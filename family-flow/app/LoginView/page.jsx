"use client";

/* Hooks */
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

/* MUI */
import { Container, Button, Stack, TextField, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function LoginPage() {
  const router = useRouter();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const loggedInUser = loginUser(email, password);

    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      router.push("/MainView");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          alignItems: "stretch",
          backgroundColor: theme.palette.background.card,
          border: "1px solid lightgray",
          borderRadius: 3,
          justifyContent: "center",
          px: 3,
          py: 5,
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignSelf: "center",
            backgroundColor: theme.palette.background.default,
            borderRadius: "50px",
            p: 3,
          }}
        >
          <CalendarMonthOutlinedIcon color="primary" fontSize="large" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h1" align="center" sx={{ fontSize: "1.75rem" }}>
            Family Planner
          </Typography>
          <Typography
            component="p"
            align="center"
            sx={{ color: "primary.main" }}
          >
            Sign in to your account.
          </Typography>
        </Stack>
        <Stack spacing={4}>
          <TextField
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                "&.Mui-focused": {
                  backgroundColor: theme.palette.background.input,
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                "&.Mui-focused": {
                  backgroundColor: theme.palette.background.input,
                },
              },
            }}
          />
        </Stack>

        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ py: 1.5 }}
        >
          Sign In
        </Button>
        <Typography
          align="center"
          sx={{ fontSize: "0.80rem", minHeight: "1.5rem" }}
        >
          {error}
        </Typography>
      </Stack>
    </Container>
  );
}
