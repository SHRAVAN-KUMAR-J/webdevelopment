import React from 'react';
import './StatsCard.css';

const StatsCard = ({ fetchCount, messageCount }) => {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-value">{fetchCount}</span>
        <span className="stat-label">Requests Made</span>
      </div>
      <div className="stat">
        <span className="stat-value">{messageCount}</span>
        <span className="stat-label">Chat Messages</span>
      </div>
    </div>
  );
};

export default StatsCard;