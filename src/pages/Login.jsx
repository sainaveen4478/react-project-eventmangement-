import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", email); 
    setIsLoggedIn(true);
    navigate("/events");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
