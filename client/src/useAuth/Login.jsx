import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, error, logout } = useAuth0();

  const deleteAllCookies = () => {
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
  };

  const handleLogout = async () => {
    try {
      deleteAllCookies();
      await logout({ logoutParams: { returnTo: window.location.origin } });
    } catch (error) {
      console.log(error);
    } finally {
      loginWithRedirect({
        prompt: "login",
      });
    }
  };

  return (
    <main
      style={{
        backgroundColor: "primary.main",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card
        sx={{
          width: "70%",
          height: "20%",
          backgroundColor: "white",
          color: "white",
          margin: "100px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <CardContent style={{ height: "70%" }}>
          {error ? (
            <Typography sx={{ fontSize: 25 }} color="error.main" gutterBottom>
              {error.message}
            </Typography>
          ) : (
            <Typography sx={{ fontSize: 25 }} color="neutral.dark" gutterBottom>
              You have to login to see this page
            </Typography>
          )}
        </CardContent>
        <CardActions
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          {error ? (
            <Button
              size="large"
              variant="outlined"
              style={{
                backgroundColor: "background.default",
                width: 200,
                fontSize: 20,
                borderColor: "neutral.dark",
              }}
              onClick={handleLogout}
            >
              Retry Login
            </Button>
          ) : (
            <Button
              size="large"
              variant="outlined"
              style={{
                backgroundColor: "background.default",
                width: 200,
                fontSize: 20,
                borderColor: "neutral.dark",
              }}
              onClick={() =>
                loginWithRedirect({
                  prompt: "login",
                })
              }
            >
              Login
            </Button>
          )}
        </CardActions>
      </Card>
    </main>
  );
};

export default Login;