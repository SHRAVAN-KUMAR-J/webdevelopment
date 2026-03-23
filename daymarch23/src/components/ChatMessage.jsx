import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const getIcon = () => {
    switch (message.type) {
      case 'user': return '👤';
      case 'server': return '🤖';
      case 'error': return '❌';
      case 'system': return 'ℹ️';
      default: return '💬';
    }
  };

  return (
    <div className={`chat-message ${message.type}`}>
      <div className="message-header">
        <span className="message-icon">{getIcon()}</span>
        <span className="message-time">{message.timestamp}</span>
      </div>
      <div className="message-text">{message.text}</div>
    </div>
  );
};

export default ChatMessage;