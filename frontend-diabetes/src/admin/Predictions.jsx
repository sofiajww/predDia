import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import AdminLayout from "../components/AdminLayout"; // ✅ TAMBAH INI

export default function Predictions() {
  const navigate = useNavigate();
  const ADMIN_DASHBOARD_PATH = "/admin"; // ganti kalau beda

  const theme = {
    green: "#3b5d50",
    green2: "#2f4d42",
    soft: "#eef6f3",
    border: "#dfeee8",
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI controls
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all | checked | unchecked
  const [sort, setSort] = useState({ key: "_id", dir: "desc" });

  const [page, setPage] = useState(1);
  const pageSize = 8;

  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // loading per row when marking checked
  const [checkingId, setCheckingId] = useState(null);

  // ✅ detail modal
  const [detail, setDetail] = useState(null);

  // ✅ FIX AUTH: ambil token admin (utama) + fallback token biasa
  const authHeaders = () => {
    const token =
      localStorage.getItem("admin_token") || localStorage.getItem("token");
    return token
      ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
      : { Accept: "application/json" };
  };

  const fmtDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString("id-ID", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const fetchPredictions = async () => {
    setLoading(true);
    setOkMsg("");
    setErrMsg("");
    try {
      const res = await api.get("/admin/prediksi", { headers: authHeaders() });
      setData(res.data || []);
    } catch (e) {
      if (e?.response?.status === 401) {
        setErrMsg("Unauthenticated.");
        return;
      }
      setErrMsg(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          "Gagal memuat data prediksi."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPredictions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSort = (key) => {
    setSort((prev) => {
      if (prev.key !== key) return { key, dir: "asc" };
      return { key, dir: prev.dir === "asc" ? "desc" : "asc" };
    });
  };

  const sortIcon = (key) => {
    if (sort.key !== key) return "⇅";
    return sort.dir === "asc" ? "↑" : "↓";
  };

  const getChecked = (p) => {
    return Boolean(p.dicek_admin ?? p.id_admin ?? p.checked ?? p.is_checked);
  };

  const normalized = useMemo(() => {
    return (data || []).map((p) => {
      const id = p.id_prediksi ?? p.id;
      const hasil = p.hasil ?? p.result ?? "-";
      const tanggal =
        p.tanggal_prediksi ?? p.created_at ?? p.updated_at ?? p.tanggal ?? null;

      // relasi dataKesehatan bisa beda nama, jadi aku coba beberapa kemungkinan
      const dk = p.dataKesehatan ?? p.data_kesehatan ?? p.data_kesehatans ?? null;

      return {
        ...p,
        _id: id,
        _checked: getChecked(p),
        _userName: p.user?.name || "-",
        _userEmail: p.user?.email || "",
        _hasil: hasil,
        _tanggal: tanggal,
        _dk: dk,
      };
    });
  }, [data]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    let arr = [...normalized];

    if (statusFilter === "checked") arr = arr.filter((p) => p._checked);
    if (statusFilter === "unchecked") arr = arr.filter((p) => !p._checked);

    if (s) {
      arr = arr.filter((p) => {
        const user = (p._userName || "").toLowerCase();
        const email = (p._userEmail || "").toLowerCase();
        const hasil = String(p._hasil || "").toLowerCase();
        const id = String(p._id ?? "").toLowerCase();
        return (
          user.includes(s) ||
          email.includes(s) ||
          hasil.includes(s) ||
          id.includes(s)
        );
      });
    }

    return arr;
  }, [normalized, q, statusFilter]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const { key, dir } = sort;

    arr.sort((a, b) => {
      const va = a?.[key];
      const vb = b?.[key];

      if (key === "_tanggal") {
        const da = new Date(va || 0).getTime();
        const db = new Date(vb || 0).getTime();
        return dir === "asc" ? da - db : db - da;
      }

      if (key === "_id") {
        const na = Number(va ?? 0);
        const nb = Number(vb ?? 0);
        return dir === "asc" ? na - nb : nb - na;
      }

      const sa = String(va ?? "").toLowerCase();
      const sb = String(vb ?? "").toLowerCase();
      if (sa < sb) return dir === "asc" ? -1 : 1;
      if (sa > sb) return dir === "asc" ? 1 : -1;
      return 0;
    });

    return arr;
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));

  const paged = useMemo(() => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    const start = (safePage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, totalPages]);

  useEffect(() => setPage(1), [q, statusFilter, data.length]);

  const stats = useMemo(() => {
    const total = normalized.length;
    const checked = normalized.filter((p) => p._checked).length;
    const unchecked = total - checked;
    return { total, checked, unchecked };
  }, [normalized]);

  const badgeHasil = (hasilRaw) => {
    const hasil = String(hasilRaw || "").toLowerCase();

    const isHigh =
      hasil.includes("diabetes") ||
      hasil.includes("tinggi") ||
      hasil.includes("positif") ||
      hasil.includes("berisiko");

    const style = {
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      border: "1px solid",
    };

    if (isHigh) {
      return (
        <span
          style={{
            ...style,
            background: "#fff5f5",
            color: "#b42318",
            borderColor: "#f3c2c2",
          }}
        >
          {hasilRaw}
        </span>
      );
    }

    return (
      <span
        style={{
          ...style,
          background: theme.soft,
          color: theme.green2,
          borderColor: theme.border,
        }}
      >
        {hasilRaw}
      </span>
    );
  };

  const cek = async (idPrediksi) => {
    if (!idPrediksi) return;

    setCheckingId(idPrediksi);
    setOkMsg("");
    setErrMsg("");

    try {
      await api.put(`/admin/prediksi/${idPrediksi}/cek`, null, {
        headers: authHeaders(),
      });

      setOkMsg("✅ Prediksi ditandai sudah dicek admin");

      setData((prev) =>
        (prev || []).map((p) => {
          const pid = p.id_prediksi ?? p.id;
          if (pid === idPrediksi) return { ...p, dicek_admin: true };
          return p;
        })
      );

      // ✅ kalau modal detail sedang terbuka untuk item yang sama, sinkronkan statusnya juga
      setDetail((prev) => {
        if (!prev) return prev;
        if (prev._id === idPrediksi) return { ...prev, dicek_admin: true, _checked: true };
        return prev;
      });
    } catch (e) {
      if (e?.response?.status === 401) {
        setErrMsg("Unauthenticated.");
        return;
      }
      setErrMsg(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          "Gagal menandai prediksi."
      );
    } finally {
      setCheckingId(null);
    }
  };

  // ✅ helper buat render data kesehatan dengan aman
  const renderDataKesehatan = (dk) => {
    if (!dk) {
      return <div className="text-muted">Data kesehatan tidak tersedia.</div>;
    }

    // tampilkan key yang penting dulu, sisanya fallback
    const preferredKeys = [
      "jenis_kelamin",
      "umur",
      "tinggi_badan",
      "berat_badan",
      "bmi",
      "gula_darah",
      "tekanan_darah",
      "kolesterol",
      "riwayat_keluarga",
      "aktivitas",
      "merokok",
    ];

    const pairs = [];

    // masukkan key yang ada
    preferredKeys.forEach((k) => {
      if (dk[k] !== undefined && dk[k] !== null && dk[k] !== "") {
        pairs.push([k, dk[k]]);
      }
    });

    // fallback: tambahin semua key lain yang belum keambil (biar tetap lengkap)
    Object.keys(dk).forEach((k) => {
      if (preferredKeys.includes(k)) return;
      const v = dk[k];
      if (v === undefined || v === null || v === "") return;
      pairs.push([k, v]);
    });

    if (pairs.length === 0) {
      return <div className="text-muted">Data kesehatan kosong.</div>;
    }

    const labelize = (key) =>
      String(key)
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
      <div className="row g-2">
        {pairs.map(([k, v]) => (
          <div className="col-md-6" key={k}>
            <div
              className="p-2 rounded"
              style={{ background: theme.soft, border: `1px solid ${theme.border}` }}
            >
              <div className="text-muted" style={{ fontSize: 12 }}>
                {labelize(k)}
              </div>
              <div className="fw-semibold">{String(v)}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ✅ CUMA DIBUNGKUS ADMINLAYOUT (ISI DALAM TETAP)
  return (
    <AdminLayout>
      <div className="container py-4">
        {/* Header */}
        <div
          className="p-3 p-md-4 mb-3 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${theme.green}, ${theme.green2})`,
            borderRadius: 16,
            color: "white",
          }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <div>
              <h3 className="mb-1">Kelola Prediksi</h3>
              <div style={{ opacity: 0.9, fontSize: 13 }}>
                Pantau semua hasil prediksi pengguna & tandai yang sudah dicek.
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate(ADMIN_DASHBOARD_PATH)}
                style={{ borderRadius: 12 }}
              >
                ← Kembali ke Dashboard
              </button>

              <button
                className="btn btn-light"
                onClick={fetchPredictions}
                disabled={loading}
                style={{ borderRadius: 12 }}
              >
                {loading ? "Memuat..." : "Refresh"}
              </button>
            </div>
          </div>
        </div>

        {(okMsg || errMsg) && (
          <div
            className={`alert ${okMsg ? "alert-success" : "alert-danger"}`}
            style={{ borderRadius: 12 }}
          >
            {okMsg || errMsg}
          </div>
        )}

        {/* Ringkasan */}
        <div className="row g-2 mb-3">
          {[
            { label: "Total Prediksi", value: stats.total },
            { label: "Sudah Dicek", value: stats.checked },
            { label: "Belum Dicek", value: stats.unchecked },
          ].map((s) => (
            <div className="col-md-4" key={s.label}>
              <div className="card shadow-sm" style={{ borderRadius: 16 }}>
                <div className="card-body">
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    {s.label}
                  </div>
                  <div className="fw-bold" style={{ fontSize: 24 }}>
                    {s.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel */}
        <div className="card shadow-sm" style={{ borderRadius: 16 }}>
          <div className="card-body">
            <div className="row g-2 align-items-center mb-3">
              <div className="col-md-6">
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{ background: theme.soft, borderColor: theme.border }}
                  >
                    🔎
                  </span>
                  <input
                    className="form-control"
                    placeholder="Cari ID / nama / email / hasil..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ borderColor: theme.border }}
                >
                  <option value="all">Semua status</option>
                  <option value="checked">Sudah dicek</option>
                  <option value="unchecked">Belum dicek</option>
                </select>
              </div>

              <div className="col-md-3 text-md-end text-muted" style={{ fontSize: 13 }}>
                Menampilkan <b>{paged.length}</b> dari <b>{sorted.length}</b> hasil
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr style={{ background: theme.soft }}>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("_id")}>
                      ID {sortIcon("_id")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("_userName")}>
                      User {sortIcon("_userName")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("_hasil")}>
                      Hasil {sortIcon("_hasil")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("_tanggal")}>
                      Tanggal {sortIcon("_tanggal")}
                    </th>
                    <th className="text-end">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-muted">
                        Memuat data...
                      </td>
                    </tr>
                  ) : paged.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-muted">
                        Data tidak ditemukan.
                      </td>
                    </tr>
                  ) : (
                    paged.map((p) => (
                      <tr key={p._id}>
                        <td>
                          <span
                            className="badge"
                            style={{ background: theme.green, borderRadius: 10 }}
                          >
                            {p._id}
                          </span>
                        </td>

                        <td>
                          <div className="fw-semibold">{p._userName}</div>
                          {p._userEmail ? (
                            <div className="text-muted" style={{ fontSize: 12 }}>
                              {p._userEmail}
                            </div>
                          ) : null}
                        </td>

                        <td>{badgeHasil(p._hasil)}</td>

                        <td className="text-muted">{fmtDate(p._tanggal)}</td>

                        <td className="text-end">
                          <div className="d-flex justify-content-end gap-2 flex-wrap">
                            {/* ✅ Detail */}
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              style={{ borderRadius: 10 }}
                              onClick={() => setDetail(p)}
                            >
                              Detail
                            </button>

                            {/* Status */}
                            {p._checked ? (
                              <span
                                className="badge"
                                style={{
                                  background: theme.soft,
                                  color: theme.green2,
                                  border: `1px solid ${theme.border}`,
                                  borderRadius: 999,
                                  padding: "8px 10px",
                                }}
                              >
                                ✅ Sudah dicek
                              </span>
                            ) : (
                              <button
                                className="btn btn-sm"
                                onClick={() => cek(p._id)}
                                disabled={checkingId === p._id}
                                style={{
                                  borderRadius: 10,
                                  border: `1px solid ${theme.border}`,
                                  background: theme.green,
                                  color: "white",
                                }}
                              >
                                {checkingId === p._id ? "Menandai..." : "Tandai dicek"}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="text-muted" style={{ fontSize: 13 }}>
                Halaman <b>{page}</b> / <b>{totalPages}</b>
              </div>

              <div className="btn-group">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setPage(1)}
                  disabled={page <= 1}
                >
                  «
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                >
                  Prev
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                >
                  Next
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setPage(totalPages)}
                  disabled={page >= totalPages}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Modal Detail */}
        {detail && (
          <>
            <div className="modal fade show" style={{ display: "block" }}>
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content" style={{ borderRadius: 16 }}>
                  <div
                    className="modal-header"
                    style={{
                      background: theme.soft,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  >
                    <h5 className="modal-title">Detail Prediksi #{detail._id}</h5>
                    <button type="button" className="btn-close" onClick={() => setDetail(null)} />
                  </div>

                  <div className="modal-body">
                    {/* ringkas */}
                    <div className="row g-2 mb-3">
                      <div className="col-md-6">
                        <div
                          className="p-3 rounded"
                          style={{ background: theme.soft, border: `1px solid ${theme.border}` }}
                        >
                          <div className="text-muted" style={{ fontSize: 12 }}>Pengguna</div>
                          <div className="fw-semibold">{detail._userName}</div>
                          {detail._userEmail ? (
                            <div className="text-muted" style={{ fontSize: 12 }}>
                              {detail._userEmail}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className="p-3 rounded"
                          style={{ background: theme.soft, border: `1px solid ${theme.border}` }}
                        >
                          <div className="text-muted" style={{ fontSize: 12 }}>Tanggal</div>
                          <div className="fw-semibold">{fmtDate(detail._tanggal)}</div>
                          <div className="mt-2">{badgeHasil(detail._hasil)}</div>
                        </div>
                      </div>
                    </div>

                    <h6 className="mb-2">Data Kesehatan</h6>
                    {renderDataKesehatan(detail._dk)}

                    {/* info admin check */}
                    <div className="mt-3">
                      <h6 className="mb-2">Status Admin</h6>
                      {Boolean(detail.dicek_admin ?? detail.id_admin ?? detail.checked ?? detail.is_checked ?? detail._checked) ? (
                        <span
                          className="badge"
                          style={{
                            background: theme.soft,
                            color: theme.green2,
                            border: `1px solid ${theme.border}`,
                            borderRadius: 999,
                            padding: "8px 10px",
                          }}
                        >
                          ✅ Sudah dicek
                        </span>
                      ) : (
                        <span className="text-muted">Belum dicek admin</span>
                      )}
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      className="btn btn-outline-secondary"
                      style={{ borderRadius: 12 }}
                      onClick={() => setDetail(null)}
                    >
                      Tutup
                    </button>

                    {!Boolean(detail.dicek_admin ?? detail.id_admin ?? detail.checked ?? detail.is_checked ?? detail._checked) && (
                      <button
                        className="btn"
                        onClick={() => cek(detail._id)}
                        disabled={checkingId === detail._id}
                        style={{
                          borderRadius: 12,
                          background: theme.green,
                          color: "white",
                        }}
                      >
                        {checkingId === detail._id ? "Menandai..." : "Tandai dicek"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" />
          </>
        )}
      </div>
    </AdminLayout>
  );
}

