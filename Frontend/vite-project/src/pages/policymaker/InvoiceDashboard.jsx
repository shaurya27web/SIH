import React from "react";
import "./InvoiceDashboard.css";

const InvoiceDashboard = () => {
  const invoices = [
    { id: "MCA-2025-0912", desc: "Filing Fee", date: "01/01/2025", due: "01/02/2025", amount: "₹ 5,000", status: "Paid" },
    { id: "MCA-2025-0913", desc: "Compliance", date: "02/01/2025", due: "02/02/2025", amount: "₹ 10,000", status: "Pending" },
    { id: "MCA-2025-0914", desc: "Penalty", date: "03/01/2025", due: "03/02/2025", amount: "₹ 15,000", status: "Overdue" },
  ];

  return (
    <div className="invoice-dashboard">
      {/* Summary Cards */}
      <div className="card-grid">
        <div className="card green">
          <h4>Paid Invoices</h4>
          <p>₹ 25,000</p>
        </div>
        <div className="card yellow">
          <h4>Pending Invoices</h4>
          <p>₹ 25,000</p>
        </div>
        <div className="card red">
          <h4>Overdue Invoices</h4>
          <p>₹ 10,000</p>
        </div>
        <div className="card blue">
          <h4>Total Invoices</h4>
          <p>₹ 50,000</p>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="table-container">
        <h2>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Description</th>
              <th>Issued Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Download</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.id}</td>
                <td>{inv.desc}</td>
                <td>{inv.date}</td>
                <td>{inv.due}</td>
                <td>{inv.amount}</td>
                <td><span className={`status ${inv.status.toLowerCase()}`}>{inv.status}</span></td>
                <td>
                  <button className="btn secondary">PDF</button>
                  <button className="btn secondary">Excel</button>
                </td>
                <td>
                  <button className="btn view">View</button>
                  <button className="btn pay">Pay</button>
                  <button className="btn share">Share</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
