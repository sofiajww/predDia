import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import AdminLayout from "../components/AdminLayout";

export default function Saran() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState("");
  const [sort, setSort] = useState({ key: "created_at", dir: "desc" });
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const [selected, setSelected] = useState(null); // modal detail
  const [askDelete, setAskDelete] = useState(null); // modal konfirmasi delete
  const [deleting, setDeleting] = useState(false);

  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const theme = {
    green: "#3b5d50",
    green2: "#2f4d42",
    soft: "#eef6f3",
    border: "#dfeee8",
  };

  // NOTE: api.js kamu sudah inject Authorization dari localStorage token.
  // Jadi ini optional. Tapi kita biarkan biar tetap aman kalau interceptor belum jalan.
  const authHeaders = useCallback(() => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  // ✅ FIX ESLint: fetchSaran dibikin stabil + masuk deps useEffect
  const fetchSaran = useCallback(async () => {
    setLoading(true);
    setOkMsg("");
    setErrMsg("");
    try {
      const res = await api.get("/admin/saran", { headers: authHeaders() });
      setItems(res.data || []);
    } catch (e) {
      const status = e?.response?.status;
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Gagal memuat saran. Cek token admin / endpoint.";
      setErrMsg(`${status ? status + " " : ""}${msg}`.trim());
    } finally {
      setLoading(false);
    }
  }, [authHeaders]);

  useEffect(() => {
    fetchSaran();
  }, [fetchSaran]);

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

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((x) => {
      const nama = (x.nama || "").toLowerCase();
      const email = (x.email || "").toLowerCase();
      const pesan = (x.pesan || "").toLowerCase();
      return nama.includes(s) || email.includes(s) || pesan.includes(s);
    });
  }, [items, q]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const { key, dir } = sort;

    arr.sort((a, b) => {
      const va = a?.[key];
      const vb = b?.[key];

      if (key === "created_at") {
        const da = new Date(va || 0).getTime();
        const db = new Date(vb || 0).getTime();
        return dir === "asc" ? da - db : db - da;
      }

      if (key === "id") {
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

  useEffect(() => setPage(1), [q, items.length]);

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

  const openDetail = (row) => {
    setOkMsg("");
    setErrMsg("");
    setSelected(row);
  };

  const onAskDelete = (row) => {
    setOkMsg("");
    setErrMsg("");
    setAskDelete(row);
  };

  const onDelete = async () => {
    if (!askDelete) return;
    setDeleting(true);
    setOkMsg("");
    setErrMsg("");

    try {
      await api.delete(`/admin/saran/${askDelete.id}`, { headers: authHeaders() });
      setItems((prev) => prev.filter((x) => x.id !== askDelete.id));
      setOkMsg("✅ Saran berhasil dihapus");
      setAskDelete(null);
      if (selected?.id === askDelete.id) setSelected(null);
    } catch (e) {
      const status = e?.response?.status;
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        e?.message ||
        "Gagal menghapus saran.";

      if (status === 401) setErrMsg("401 Unauthorized: token tidak terkirim / invalid.");
      else if (status === 403) setErrMsg("403 Forbidden: akun kamu bukan admin.");
      else if (status === 404) setErrMsg("404 Not Found: route DELETE /admin/saran/{id} belum ada.");
      else setErrMsg(`${status || ""} ${msg}`.trim());
    } finally {
      setDeleting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container py-2">
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
              <h3 className="mb-1">Saran Masuk</h3>
              <div style={{ opacity: 0.9, fontSize: 13 }}>
                Total saran: <b>{items.length}</b>
              </div>
            </div>

            <div className="d-flex gap-2">
              <Link to="/admin" className="btn btn-light" style={{ borderRadius: 12 }}>
                ← Dashboard
              </Link>
              <button
                className="btn btn-light"
                onClick={fetchSaran}
                disabled={loading}
                style={{ borderRadius: 12 }}
              >
                {loading ? "Memuat..." : "Refresh"}
              </button>
            </div>
          </div>
        </div>

        {(okMsg || errMsg) && (
          <div className={`alert ${okMsg ? "alert-success" : "alert-danger"}`} style={{ borderRadius: 12 }}>
            {okMsg || errMsg}
          </div>
        )}

        <div className="card shadow-sm" style={{ borderRadius: 16 }}>
          <div className="card-body">
            {/* Search */}
            <div className="row g-2 align-items-center mb-3">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text" style={{ background: theme.soft, borderColor: theme.border }}>
                    🔎
                  </span>
                  <input
                    className="form-control"
                    placeholder="Cari nama / email / isi pesan..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="col-md-6 text-md-end text-muted" style={{ fontSize: 13 }}>
                Menampilkan <b>{paged.length}</b> dari <b>{sorted.length}</b> hasil
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr style={{ background: theme.soft }}>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("id")}>
                      ID {sortIcon("id")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("nama")}>
                      Nama {sortIcon("nama")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("email")}>
                      Email {sortIcon("email")}
                    </th>
                    <th>Pesan (ringkas)</th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("created_at")}>
                      Tanggal {sortIcon("created_at")}
                    </th>
                    <th className="text-end">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        Memuat data...
                      </td>
                    </tr>
                  ) : paged.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        Data tidak ditemukan.
                      </td>
                    </tr>
                  ) : (
                    paged.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <span className="badge" style={{ background: theme.green, borderRadius: 10 }}>
                            {s.id}
                          </span>
                        </td>
                        <td className="fw-semibold">{s.nama || "-"}</td>
                        <td>{s.email || "-"}</td>
                        <td style={{ maxWidth: 420 }}>
                          <span className="text-muted">
                            {(s.pesan || "-").length > 90 ? `${s.pesan.slice(0, 90)}…` : s.pesan}
                          </span>
                        </td>
                        <td className="text-muted">{fmtDate(s.created_at)}</td>
                        <td className="text-end">
                          <div className="d-flex justify-content-end gap-2">
                            <button
                              className="btn btn-sm"
                              style={{
                                borderRadius: 10,
                                border: `1px solid ${theme.border}`,
                                background: "white",
                                color: "#111827",
                                fontWeight: 700,
                              }}
                              onClick={() => openDetail(s)}
                            >
                              Detail
                            </button>
                            <button
                              className="btn btn-sm"
                              style={{
                                borderRadius: 10,
                                border: `1px solid #f3c2c2`,
                                color: "#b42318",
                                background: "#fff5f5",
                              }}
                              onClick={() => onAskDelete(s)}
                            >
                              Hapus
                            </button>
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
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(1)} disabled={page <= 1}>
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
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(totalPages)} disabled={page >= totalPages}>
                  »
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Detail */}
        {selected && (
          <>
            <div className="modal fade show" style={{ display: "block" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ borderRadius: 16 }}>
                  <div
                    className="modal-header"
                    style={{
                      background: theme.soft,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  >
                    <h5 className="modal-title">Detail Saran</h5>
                    <button type="button" className="btn-close" onClick={() => setSelected(null)} disabled={deleting} />
                  </div>
                  <div className="modal-body">
                    <div className="mb-2">
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        Nama
                      </div>
                      <div className="fw-semibold">{selected.nama}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        Email
                      </div>
                      <div>{selected.email}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        Tanggal
                      </div>
                      <div>{fmtDate(selected.created_at)}</div>
                    </div>

                    <div className="mt-3">
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        Pesan
                      </div>
                      <div className="p-2 rounded" style={{ background: theme.soft, whiteSpace: "pre-wrap" }}>
                        {selected.pesan}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setSelected(null)}
                      disabled={deleting}
                      style={{ borderRadius: 12 }}
                    >
                      Tutup
                    </button>

                    {/* ✅ klik hapus: tutup detail dulu, lalu buka konfirmasi */}
                    <button
                      className="btn"
                      style={{
                        borderRadius: 12,
                        background: "#b42318",
                        color: "white",
                      }}
                      onClick={() => {
                        setSelected(null);
                        onAskDelete(selected);
                      }}
                      disabled={deleting}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" />
          </>
        )}

        {/* Modal Konfirmasi Delete */}
        {askDelete && (
          <>
            <div className="modal fade show" style={{ display: "block" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ borderRadius: 16 }}>
                  <div
                    className="modal-header"
                    style={{
                      background: theme.soft,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  >
                    <h5 className="modal-title">Konfirmasi Hapus</h5>
                    <button type="button" className="btn-close" onClick={() => setAskDelete(null)} disabled={deleting} />
                  </div>
                  <div className="modal-body">
                    Yakin mau hapus saran ini?
                    <div className="mt-2 p-2 rounded" style={{ background: theme.soft }}>
                      <div className="fw-semibold">{askDelete.nama}</div>
                      <div className="text-muted" style={{ fontSize: 13 }}>
                        {askDelete.email}
                      </div>
                      <div className="mt-2" style={{ fontSize: 13, whiteSpace: "pre-wrap" }}>
                        {(askDelete.pesan || "").slice(0, 160)}
                        {(askDelete.pesan || "").length > 160 ? "…" : ""}
                      </div>
                    </div>
                    <div className="text-danger mt-2" style={{ fontSize: 13 }}>
                      Aksi ini tidak bisa dibatalkan.
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setAskDelete(null)}
                      disabled={deleting}
                      style={{ borderRadius: 12 }}
                    >
                      Batal
                    </button>
                    <button
                      className="btn"
                      onClick={onDelete}
                      disabled={deleting}
                      style={{ borderRadius: 12, background: "#b42318", color: "white" }}
                    >
                      {deleting ? "Menghapus..." : "Ya, Hapus"}
                    </button>
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
