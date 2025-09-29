// Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Filter Row */}
      <div className="filter-row">
        <select>
          <option>All Ministries</option>
          <option>Corporate Affairs</option>
          <option>Finance</option>
        </select>
        <select>
          <option>All Categories</option>
          <option>Taxation</option>
          <option>Investments</option>
        </select>
        <select>
          <option>Status: All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <input type="text" placeholder="Search by keywords..." />
        <button className="filter-btn">Apply</button>
      </div>

      {/* Summary Cards */}
      <div className="card-grid">
        <div className="card">
          <h3>Total Comments</h3>
          <p>1,248</p>
        </div>
        <div className="card">
          <h3>Pending Reviews</h3>
          <p>342</p>
        </div>
        <div className="card">
          <h3>AI Summarized</h3>
          <p>876</p>
        </div>
        <div className="card">
          <h3>Priority Items</h3>
          <p>120</p>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <h2>Recent Comments</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ministry</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#101</td>
              <td>Corporate Affairs</td>
              <td>Taxation</td>
              <td>Need clarity on compliance rules</td>
              <td><span className="status open">Open</span></td>
              <td>
                <button className="btn primary">Review</button>
                <button className="btn secondary">Mark Resolved</button>
              </td>
            </tr>
            <tr>
              <td>#102</td>
              <td>Finance</td>
              <td>Investments</td>
              <td>Policy update required for startups</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <button className="btn primary">Review</button>
                <button className="btn secondary">Mark Resolved</button>
              </td>
            </tr>
            <tr>
              <td>#103</td>
              <td>Corporate Affairs</td>
              <td>Corporate Law</td>
              <td>Simplify company registration</td>
              <td><span className="status resolved">Resolved</span></td>
              <td>
                <button className="btn primary">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
