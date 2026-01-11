import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import AdminLayout from "../components/AdminLayout";

export default function Users() {
  const navigate = useNavigate();

  // ✅ ganti kalau path dashboard admin kamu beda
  const ADMIN_DASHBOARD_PATH = "/admin";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState("");
  const [sort, setSort] = useState({ key: "id", dir: "asc" });
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const theme = {
    green: "#3b5d50",
    green2: "#2f4d42",
    soft: "#eef6f3",
    border: "#dfeee8",
  };

  // ✅ FIX ESLint: buat stabil
  const authHeaders = useCallback(() => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  // ✅ FIX ESLint: fetchUsers stabil + deps aman
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setErrMsg("");
    setOkMsg("");
    try {
      const res = await api.get("/admin/pengguna", { headers: authHeaders() });
      setUsers(res.data || []);
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Gagal memuat pengguna. Cek endpoint / token.";
      setErrMsg(msg);
    } finally {
      setLoading(false);
    }
  }, [authHeaders]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
    if (!s) return users;
    return users.filter((u) => {
      const name = (u.name || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      return name.includes(s) || email.includes(s);
    });
  }, [users, q]);

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

  useEffect(() => setPage(1), [q, users.length]);

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

  const onAskDelete = (u) => {
    setOkMsg("");
    setErrMsg("");
    setSelected(u);
  };

  const onDelete = async () => {
    if (!selected) return;
    setDeleting(true);
    setOkMsg("");
    setErrMsg("");

    try {
      await api.delete(`/admin/pengguna/${selected.id}`, {
        headers: authHeaders(),
      });

      setUsers((prev) => prev.filter((x) => x.id !== selected.id));
      setOkMsg(`✅ User dihapus: ${selected.name || selected.email}`);
      setSelected(null);
    } catch (e) {
      const status = e?.response?.status;
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        e?.message ||
        "Gagal menghapus user.";

      if (status === 401) {
        setErrMsg("401 Unauthorized: token belum terkirim / token invalid.");
      } else if (status === 403) {
        setErrMsg("403 Forbidden: akun kamu bukan admin / tidak punya akses.");
      } else if (status === 404) {
        setErrMsg("404 Not Found: endpoint delete belum ada / path-nya beda.");
      } else {
        setErrMsg(`${status || ""} ${msg}`.trim());
      }
    } finally {
      setDeleting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container py-4">
        {/* Header hijau */}
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
              <h3 className="mb-1">Kelola Pengguna</h3>
              <div style={{ opacity: 0.9, fontSize: 13 }}>
                Total pengguna: <b>{users.length}</b>
              </div>
            </div>

            {/* ✅ tombol kanan */}
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
                onClick={fetchUsers}
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

        <div className="card shadow-sm" style={{ borderRadius: 16 }}>
          <div className="card-body">
            {/* Search bar */}
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
                    placeholder="Cari nama atau email..."
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
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("name")}>
                      Nama {sortIcon("name")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("email")}>
                      Email {sortIcon("email")}
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => toggleSort("created_at")}>
                      Dibuat {sortIcon("created_at")}
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
                    paged.map((u) => (
                      <tr key={u.id}>
                        <td>
                          <span className="badge" style={{ background: theme.green, borderRadius: 10 }}>
                            {u.id}
                          </span>
                        </td>
                        <td className="fw-semibold">{u.name || "-"}</td>
                        <td>{u.email || "-"}</td>
                        <td className="text-muted">{fmtDate(u.created_at)}</td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm"
                            style={{
                              borderRadius: 10,
                              border: `1px solid #f3c2c2`,
                              color: "#b42318",
                              background: "#fff5f5",
                            }}
                            onClick={() => onAskDelete(u)}
                          >
                            Hapus
                          </button>
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

        {/* Modal */}
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
                    <h5 className="modal-title">Konfirmasi Hapus</h5>
                    <button type="button" className="btn-close" onClick={() => setSelected(null)} disabled={deleting} />
                  </div>
                  <div className="modal-body">
                    Yakin mau hapus user ini?
                    <div className="mt-2 p-2 rounded" style={{ background: theme.soft }}>
                      <div className="fw-semibold">{selected.name || "-"}</div>
                      <div className="text-muted" style={{ fontSize: 13 }}>
                        {selected.email}
                      </div>
                    </div>
                    <div className="text-danger mt-2" style={{ fontSize: 13 }}>
                      Aksi ini tidak bisa dibatalkan.
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setSelected(null)}
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
