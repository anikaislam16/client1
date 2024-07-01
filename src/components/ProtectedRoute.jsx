import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkSession } from "../services/api";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      const authenticated = await checkSession();
      setIsAuthenticated(authenticated);
    };

    verifySession();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
