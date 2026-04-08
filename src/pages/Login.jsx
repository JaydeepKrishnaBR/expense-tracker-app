import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await signup(email, password);
        console.log("✅ Signup success");
      } else {
        await login(email, password);
        console.log("✅ Login success");
      }

      navigate("/");
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "100px auto", textAlign: "center"}}>
      <Typography variant="h3">My Finacial Planner</Typography> <br></br>

      <Typography variant="h5">
        {isSignup ? "Sign Up" : "Login"}
      </Typography>

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        {isSignup ? "Sign Up" : "Login"}
      </Button>

      <Button
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup
          ? "Already have an account? Login"
          : "New user? Sign Up"}
      </Button>
    </Box>
  );
};

export default Login;