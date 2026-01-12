import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import ViewTickets from "./pages/ViewTickets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    setIsLoggedIn(!!logged);
  }, []);

  return (
    <>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        {isLoggedIn && (
          <>
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/view-tickets" element={<ViewTickets />} />
          </>
        )}
      </Routes>
    </>
  );
}
