import React from "react";
import "./DataReports.css";

const DataReports = () => {
  const reports = [
    { id: "001", title: "Annual Financial Report", category: "Compliance", date: "01 Jan 2025", status: "Published" },
    { id: "002", title: "Fraud Analysis Report", category: "Fraud", date: "15 Feb 2025", status: "Under Review" },
    { id: "003", title: "Monthly Compliance Summary", category: "Compliance", date: "10 Mar 2025", status: "Published" },
  ];

  return (
    <div className="data-reports">
      {/* Sidebar Notifications */}
      <div className="sidebar">
        <h3>Latest Notifications</h3>
        <ul>
          <li className="red">Quarterly Compliance Trends released</li>
          <li className="yellow">Fraud Complaints Report published</li>
          <li className="blue">Daily Summary auto-generated</li>
          <li className="green">Custom Report ready for download</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-section">
        <div className="table-container">
          <h2>Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Report Title</th>
                <th>Category</th>
                <th>Date Released</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.title}</td>
                  <td>{r.category}</td>
                  <td>{r.date}</td>
                  <td>
                    <span className={`status ${r.status.toLowerCase().replace(" ","-")}`}>
                      {r.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn">View</button>
                    <button className="btn">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataReports;
