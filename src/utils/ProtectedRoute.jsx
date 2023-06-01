import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/useContext";

const ProtectedRoute = ({redirectPath = '/login' }) => {
    const {check} = useContext(UserContext);
    if (!check) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
  };

export default ProtectedRoute