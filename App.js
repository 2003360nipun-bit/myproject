import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import RDCStaffDashboard from "./components/RDCStaffDashboard";
import HeadOfficeDashboard from "./components/HeadOfficeDashboard";
import DriverDashboard from "./components/DriverDashboard";
import { initializeMockData } from "./data/mockProducts";

function App() {
  useEffect(() => {
    initializeMockData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/customer/*"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/rdc/*"
        element={
          <ProtectedRoute allowedRoles={["rdc_staff"]}>
            <RDCStaffDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/headoffice/*"
        element={
          <ProtectedRoute allowedRoles={["head_office"]}>
            <HeadOfficeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/driver/*"
        element={
          <ProtectedRoute allowedRoles={["driver"]}>
            <DriverDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h2 style={{padding:20}}>Page not found</h2>} />
    </Routes>
  );
}

export default App;
