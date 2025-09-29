import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";

// Pages
import Dashboard from "./pages/policymaker/Dashboard";
import MinistryDashboard from "./pages/policymaker/MinistryDashboard";
import CommentDashboard from "./pages/policymaker/CommentDashboard";
import DataReports from "./pages/policymaker/DataReports";
import Invoice from "./pages/policymaker/InvoiceDashboard";

// Newly Added Pages
import PriorityDashboard from "./pages/policymaker/PriorityDashboard";
import SystemStatusDashboard from "./pages/policymaker/SystemStatusDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navbar */}
        <header className="top-navbar">
          <div className="navbar-left">
            <img
              src="/src\assets\amblem.jpg"
              alt="Gov Logo"
              className="gov-logo"
            />
            <div className="ministry-title">
              <h1>MINISTRY OF CORPORATE AFFAIRS</h1>
              <p>EMPOWERING BUSINESS, PROTECTING INVESTORS</p>
            </div>
          </div>

          <div className="navbar-right">
            <input type="text" placeholder="Search..." className="search-bar" />
            <span className="officer-name">Officer Name</span>
          </div>
        </header>

        {/* Secondary Menu */}
        <nav className="main-nav">
          <Link to="/policymaker/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/policymaker/ministry-dashboard" className="nav-link">AI Summaries</Link>
          <Link to="/policymaker/comment-dashboard" className="nav-link">Comment Dashboard</Link>
          <Link to="/policymaker/update-status" className="nav-link">Update Status</Link>
          <Link to="/policymaker/priority-scoring" className="nav-link">Priority Scoring</Link>
          <Link to="/policymaker/system-status" className="nav-link">System Status</Link>
          <Link to="/policymaker/data-reports" className="nav-link">Data & Reports</Link>
          <Link to="/policymaker/invoice" className="nav-link">Invoice</Link>
        </nav>

        {/* Main Content */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/policymaker/dashboard" replace />} />
            <Route path="/policymaker/dashboard" element={<Dashboard />} />
            <Route path="/policymaker/ministry-dashboard" element={<MinistryDashboard />} />
            <Route path="/policymaker/comment-dashboard" element={<CommentDashboard />} />
            <Route path="/policymaker/update-status" element={<SystemStatusDashboard />} />
            <Route path="/policymaker/priority-scoring" element={<PriorityDashboard />} />
            <Route path="/policymaker/system-status" element={<SystemStatusDashboard />} />
            <Route path="/policymaker/data-reports" element={<DataReports />} />
            <Route path="/policymaker/invoice" element={<Invoice />} />
            <Route path="*" element={<div className="not-found">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
