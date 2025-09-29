import React from "react";
import "./CommentDashboard.css";

const CommentDashboard = () => {
  const comments = [
    {
      id: 1,
      name: "Aarav Mehta",
      location: "Bangalore",
      sentiment: "Positive",
      section: "Section 45 – Digital Filing Standards",
      text: "The new digital filing system is user-friendly and will reduce compliance burden. Excellent step.",
      priority: "Medium",
      upvotes: 12,
    },
    {
      id: 2,
      name: "Neha Sharma",
      location: "Pune",
      sentiment: "Negative",
      section: "Section 18 – Penalties for Non-Compliance",
      text: "The penalties suggested are too harsh for minor delays. Small businesses may struggle.",
      priority: "High",
      upvotes: 28,
    },
    {
      id: 3,
      name: "Aditya Rao",
      location: "Chennai",
      sentiment: "Medium",
      section: "Section 28 – Data Privacy Rules",
      text: "The draft introduces privacy safeguards, but implementation costs for smaller firms are unclear.",
      priority: "Medium",
      upvotes: 16,
    },
  ];

  return (
    <div className="comment-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="cluster-box">
          <h3>Comment Clusters</h3>
          <ul>
            <li>CSR Reporting Issues (70)</li>
            <li>Investor Safeguards (45)</li>
            <li>Tax Burden Concerns (25)</li>
          </ul>
          <button className="btn-primary">Check More</button>
        </div>

        <div className="keyword-map">
          <h3>Keyword Frequency Map</h3>
          <div className="wordcloud">CSR • Penalties • Data Privacy</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        {/* Filters */}
        <div className="filter-row">
          <select><option>Priority Score</option></select>
          <select><option>Project Status</option></select>
          <select><option>Draft Section</option></select>
          <select><option>Stakeholder Type</option></select>
          <select><option>Posted at</option></select>
          <button className="btn-primary">Apply Filters</button>
        </div>

        {/* Comments */}
        <div className="comment-grid">
          {comments.map((c) => (
            <div key={c.id} className="comment-card">
              <div className="comment-header">
                <h4>{c.name}</h4>
                <span className={`tag ${c.sentiment.toLowerCase()}`}>
                  {c.sentiment}
                </span>
              </div>

              <p className="location">{c.location}</p>
              <h5 className="section-title">{c.section}</h5>
              <p className="comment-text">{c.text}</p>
              <p className="priority"><b>Priority:</b> {c.priority}</p>

              <div className="card-actions">
                <span className="upvotes">👍 {c.upvotes}</span>
                <div className="action-buttons">
                  <button className="btn-secondary">Assign</button>
                  <button className="btn-outline">Comments</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentDashboard;
