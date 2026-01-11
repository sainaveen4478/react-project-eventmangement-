import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import ViewTickets from "./pages/ViewTickets";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tickets" element={<ViewTickets />} />
        <Route path="/view-tickets" element={<ViewTickets />} />
      </Routes>
    </>
  );
}
