import React from "react";
import "./SystemStatusDashboard.css";

const SystemStatusDashboard = () => {
  const updates = [
    { name: "Nitin Saxena", role: "CEO, ProCrew", location: "Kanpur, Uttar Pradesh", status: "Resolved" },
    { name: "Nitin Saxena", role: "CEO, ProCrew", location: "Kanpur, Uttar Pradesh", status: "Ongoing" },
    { name: "Nitin Saxena", role: "CEO, ProCrew", location: "Kanpur, Uttar Pradesh", status: "Rejected" },
  ];

  return (
    <div className="system-status-dashboard">
      <h2>System Status</h2>
      <p>Overview of the current system status and updates.</p>

      <div className="update-progress">
        <label>Upcoming Updates: </label>
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}></div>
        </div>
        <span>80%</span>
      </div>

      {updates.map((u, idx) => (
        <div key={idx} className={`status-card ${u.status.toLowerCase()}`}>
          <h4>{u.name}</h4>
          <p>{u.role}</p>
          <p>{u.location}</p>
          <span className={`status-badge ${u.status.toLowerCase()}`}>{u.status}</span>
        </div>
      ))}
    </div>
  );
};

export default SystemStatusDashboard;
