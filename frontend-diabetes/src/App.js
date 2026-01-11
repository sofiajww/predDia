// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ===== LAYOUT ===== */
import MainLayout from "./components/MainLayout";

/* ===== PUBLIC PAGES ===== */
import LandingPage from "./pages/LandingPage";
import EducationPage from "./pages/EducationPage";
import RiskFactorsPage from "./pages/RiskFactorsPage";
import LifestylePage from "./pages/LifestylePage";
import AboutPage from "./pages/AboutPage";


/* ===== AUTH ===== */
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

/* ===== USER ===== */
import Dashboard from "./pages/Dashboard";

/* ===== ADMIN ===== */
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import Users from "./admin/Users";
import Predictions from "./admin/Predictions";
import Saran from "./admin/Saran";

/* ======================================================
   PROTECTED ROUTES
====================================================== */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;
  if (role === "admin") return <Navigate to="/admin" replace />;
  return children;
}

function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/admin/login" replace />;
  if (role !== "admin") return <Navigate to="/" replace />;
  return children;
}

/* ======================================================
   APP
====================================================== */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== PUBLIC (WITH MAIN LAYOUT) ===== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/risk-factors" element={<RiskFactorsPage />} />
          <Route path="/lifestyle" element={<LifestylePage />} />
          <Route path="/about" element={<AboutPage />} />

        </Route>

        {/* ===== AUTH (NO LAYOUT) ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ===== USER ===== */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ===== ADMIN ===== */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedAdminRoute>
              <Users />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/predictions"
          element={
            <ProtectedAdminRoute>
              <Predictions />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/saran"
          element={
            <ProtectedAdminRoute>
              <Saran />
            </ProtectedAdminRoute>
          }
        />

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
