import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Sidebar from "../pages/sidebar/Sidebar";
import Clienti from "../pages/clienti/Clienti";
import Programmazione from "../pages/programmazione/Programmazione";
import Profile from "../pages/profile/Profile";

export default function Navigation() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/clienti" element={<Clienti />} />
            <Route path="/program" element={<Programmazione />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}
