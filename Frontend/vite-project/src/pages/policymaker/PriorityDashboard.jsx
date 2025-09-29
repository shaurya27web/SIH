import React from "react";
import "./PriorityDashboard.css";

const PriorityDashboard = () => {
  const data = [
    { id: 12345, name: "John Doe", category: "Category 1", priority: "High", date: "2023-10-01", status: "Reviewed" },
    { id: 12346, name: "Jane Smith", category: "Category 2", priority: "Medium", date: "2023-10-02", status: "Pending" },
    { id: 12347, name: "Alice Johnson", category: "Category 1", priority: "Low", date: "2023-10-03", status: "Reviewed" },
  ];

  return (
    <div className="priority-dashboard">
      {/* Filters Section */}
      <div className="filters">
        <div className="filter high">High <span>15</span></div>
        <div className="filter medium">Medium <span>30</span></div>
        <div className="filter low">Low <span>45</span></div>
        <div className="filter review">Pending Review <span>10</span></div>
      </div>

      {/* Table Section */}
      <table className="priority-table">
        <thead>
          <tr>
            <th>Profile/Complaint ID</th>
            <th>Submitted By</th>
            <th>Category</th>
            <th>Priority Score</th>
            <th>Date Submitted</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>
                <span className={`priority-tag ${row.priority.toLowerCase()}`}>{row.priority}</span>
              </td>
              <td>{row.date}</td>
              <td>{row.status}</td>
              <td className="actions">
                <a href="#">View</a> | <a href="#">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriorityDashboard;
