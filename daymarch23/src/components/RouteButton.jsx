import React from 'react';
import './RouteButton.css';

const RouteButton = ({ route, isActive, onClick, disabled }) => {
  return (
    <button
      className={`route-btn ${isActive ? 'active' : ''}`}
      style={{ '--btn-color': route.color }}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="btn-icon">{route.icon}</span>
      <div className="btn-content">
        <span className="btn-name">{route.name}</span>
        <span className="btn-path">{route.path}</span>
        <span className="btn-desc">{route.description}</span>
      </div>
    </button>
  );
};

export default RouteButton;