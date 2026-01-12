import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="auth-box">
        <div className="auth-card">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
    </div>
  );
}
