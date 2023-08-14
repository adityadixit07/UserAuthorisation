import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

const AdminDashboard = lazy(() => import("./Dashboard.jsx"));
const AdminAuth = lazy(() => import("./Admin.jsx"));

import Loader from "../components/Loader/Loader";
const AdminRouting = () => {
  return (
    <>
      <Routes>
        {/* Landing Page Route  */}
        <Route
          exact
          path="/dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          }
        />
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <AdminAuth />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default AdminRouting;
