import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import ChangePassword from "../pages/ChangePassword";

import ProtectedRoute from "./ProtectedRoute";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Dashboard";
import ListOfClasses from "../pages/dashboard/ListOfClasses";
import CreateClass from "../pages/dashboard/CreateClass";
import EditClass from "../pages/dashboard/EditClass";
import CreateTeacher from "../pages/dashboard/CreateTeacher";
import CreateStudent from "../pages/dashboard/CreateStudent";
import CreateSubject from "../pages/dashboard/CreateSubject"; 


export default function AppRoutes() {
  return (
    <BrowserRouter>
  <Routes>

    {/* ROOT REDIRECT */}
    <Route
      path="/"
      element={
        localStorage.getItem("access_token")
          ? <Navigate to="/home" replace />
          : <Navigate to="/login" replace />
      }
    />

    <Route path="/login" element={<Login />} />
    <Route path="/change-password" element={<ChangePassword />} />

    {/* PUBLIC (after login) */}
    <Route
      element={
        // <ProtectedRoute>
          <PublicLayout />
        // </ProtectedRoute>
      }
    >
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>

    {/* DASHBOARD */}
    <Route
      element={
        // <ProtectedRoute>
          <AdminLayout />
        // </ProtectedRoute>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/classes" element={<ListOfClasses />} />
      <Route path="/dashboard/classes/create" element={<CreateClass />} />
      <Route path="/dashboard/classes/edit/:id" element={<EditClass />} />
      <Route path="/dashboard/teachers/create" element={<CreateTeacher />} />
      <Route path="/dashboard/subjects/create" element={<CreateSubject />} />
      <Route path="/dashboard/students/create" element={<CreateStudent />} />


    </Route>

  </Routes>
</BrowserRouter>
  );
}
