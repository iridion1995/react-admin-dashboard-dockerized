import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <main
      style={{
        backgroundColor: "white",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >

      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </main>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
