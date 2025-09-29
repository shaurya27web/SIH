// MinistryDashboard.jsx
import React, { useState } from "react";
import "./MinistryDashboard.css";

const MinistryDashboard = () => {
  const [expanded, setExpanded] = useState(null);

  const summaries = [
    {
      id: 1,
      title: "Law is beneficial for small businesses",
      date: "Today",
      points: [
        "The proposed legislation is seen as having a positive impact.",
        "Specifically identifies small businesses as the primary beneficiary.",
        "Expresses a positive opinion on the new law.",
      ],
      sentiment: "Positive",
    },
    {
      id: 2,
      title: "Section-66A",
      date: "22/07/2025",
      points: [
        "The proposed legislation is seen as having a positive impact.",
        "Specifically identifies small businesses as the primary beneficiary.",
        "Expresses a positive opinion on the new law.",
      ],
      sentiment: "Negative",
    },
  ];

  return (
    <div className="ministry-dashboard">
      {/* Filters */}
      <div className="filter-row">
        <select><option>Location</option></select>
        <select><option>Project Status</option></select>
        <select><option>Draft Section</option></select>
        <select><option>Stakeholder Type</option></select>
        <select><option>Sentiment Type</option></select>
        <button className="filter-btn">Summarise</button>
      </div>

      {/* Search + Modes */}
      <div className="summary-header">
        <input
          type="text"
          placeholder="Summarise the latest comments and ask question regarding it..."
        />
        <div className="view-modes">
          <button className="mode-btn">One-liner</button>
          <button className="mode-btn active">Bullet Points</button>
          <button className="mode-btn">Detailed</button>
        </div>
      </div>

      {/* AI Summaries */}
      <div className="summaries">
        {summaries.map((item) => (
          <div key={item.id} className="summary-card">
            <div className="summary-header-row">
              <h3>{item.title} <span>({item.date})</span></h3>
              <span className={`tag ${item.sentiment.toLowerCase()}`}>
                {item.sentiment}
              </span>
            </div>
            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            {expanded === item.id && (
              <div className="detailed-view">
                <p>
                  This is the detailed explanation of <b>{item.title}</b>. You can add
                  long text, reports, or analysis here.
                </p>
              </div>
            )}

            <div className="actions-row">
              <button className="btn green">Mark as Reviewed</button>
              <button className="btn blue">Export</button>
              <button className="btn orange">Assign to Dept</button>
              <button className="btn gray">Addressed</button>
            </div>

            <div className="quick-actions">
              <button>Quick Summary</button>
              <button>Report Shortcut</button>
              <button>Filter by Region</button>
              <button>Flag for Review</button>
              <button onClick={() =>
                setExpanded(expanded === item.id ? null : item.id)
              }>
                {expanded === item.id ? "Hide Detailed" : "Read Detailed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinistryDashboard;
