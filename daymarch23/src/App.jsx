import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import RouteButton from './components/RouteButton.jsx';
import ChatMessage from './components/ChatMessage.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import StatsCard from './components/StatsCard.jsx';
import { fetchRoute, sendChatMessage } from './utils/api';

const API_URL = 'http://localhost:3000';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [activeRoute, setActiveRoute] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [isAutoFetching, setIsAutoFetching] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const responseRef = useRef(null);
  const autoFetchInterval = useRef(null);

  const routes = [
    { path: '/', name: 'Home', icon: '🏠', color: '#667eea', description: 'Welcome message' },
    { path: '/hello', name: 'Hello', icon: '👋', color: '#f093fb', description: 'Friendly greeting' },
    { path: '/greeting', name: 'Greeting', icon: '🎉', color: '#4facfe', description: 'Warm welcome' },
    { path: '/welcome', name: 'Welcome', icon: '🌟', color: '#43e97b', description: 'Special welcome' },
    { path: '/info', name: 'API Info', icon: 'ℹ️', color: '#fa709a', description: 'Server information' },
  ];

  const handleFetchRoute = async (route, routeName) => {
    setActiveRoute(routeName);
    setAnimationClass('fade-out');
    setLoading(true);
    setError(null);
    
    setTimeout(() => {
      setAnimationClass('fade-in');
    }, 100);
    
    try {
      const data = await fetchRoute(route);
      setResponse(data);
      addChatMessage('server', `📡 ${routeName} route: ${data.message}`);
      setFetchCount(prev => prev + 1);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching data');
      addChatMessage('error', `❌ Error: ${err.response?.data?.message || 'Failed to fetch data'}`);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserRoute = async () => {
    if (!userName.trim()) {
      setError('Please enter a username');
      addChatMessage('error', '⚠️ Please enter a username');
      return;
    }
    
    setActiveRoute(`user/${userName}`);
    setAnimationClass('fade-out');
    setLoading(true);
    setError(null);
    
    try {
      const res = await axios.get(`${API_URL}/user/${userName}`);
      setResponse(res.data);
      addChatMessage('server', `👤 User route: ${res.data.message}`);
      setFetchCount(prev => prev + 1);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching data');
      addChatMessage('error', `❌ Error: ${err.response?.data?.message || 'Failed to fetch user data'}`);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const addChatMessage = (type, text) => {
    const newMessage = {
      id: Date.now(),
      type: type,
      text: text,
      timestamp: new Date().toLocaleTimeString()
    };
    setChatMessages(prev => [...prev, newMessage]);
    
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  };

  const sendCustomMessage = async () => {
    if (!messageInput.trim()) return;
    
    addChatMessage('user', messageInput);
    
    try {
      const reply = await sendChatMessage(messageInput);
      addChatMessage('server', `🤖 ${reply}`);
      setMessageInput('');
    } catch (err) {
      addChatMessage('error', `❌ Error: Could not send message`);
    }
  };

  const startAutoFetch = () => {
    if (autoFetchInterval.current) return;
    
    setIsAutoFetching(true);
    let routeIndex = 0;
    
    autoFetchInterval.current = setInterval(() => {
      const route = routes[routeIndex % routes.length];
      handleFetchRoute(route.path, route.name);
      routeIndex++;
    }, 3000);
    
    addChatMessage('system', '🔄 Auto-fetch mode activated! Fetching routes every 3 seconds.');
  };

  const stopAutoFetch = () => {
    if (autoFetchInterval.current) {
      clearInterval(autoFetchInterval.current);
      autoFetchInterval.current = null;
      setIsAutoFetching(false);
      addChatMessage('system', '⏹️ Auto-fetch mode stopped.');
    }
  };

  const clearChat = () => {
    setChatMessages([]);
    addChatMessage('system', '🧹 Chat history cleared');
  };

  const clearResponse = () => {
    setResponse(null);
    setError(null);
    setActiveRoute(null);
    addChatMessage('system', '🗑️ Response area cleared');
  };

  useEffect(() => {
    addChatMessage('system', '🎉 Welcome to Hello Server! Click any button to interact with the server.');
    return () => {
      if (autoFetchInterval.current) {
        clearInterval(autoFetchInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [response]);

  return (
    <div className="App">
      <div className="background-animation">
        <div className="floating-shapes"></div>
      </div>
      
      <header className="App-header">
        <div className="header-content">
          <h1 className="glitch-text" data-text="Hello Server">Hello Server</h1>
          <p className="subtitle">Interactive API Explorer</p>
          <StatsCard fetchCount={fetchCount} messageCount={chatMessages.length} />
        </div>
      </header>

      <div className="main-container">
        <div className="left-panel">
          <div className="route-buttons">
            <h3>
              <span className="icon">🚀</span>
              Available Routes
            </h3>
            <div className="button-grid">
              {routes.map((route) => (
                <RouteButton
                  key={route.path}
                  route={route}
                  isActive={activeRoute === route.name}
                  onClick={() => handleFetchRoute(route.path, route.name)}
                  disabled={loading && !isAutoFetching}
                />
              ))}
            </div>
          </div>

          <div className="user-route-section">
            <h3>
              <span className="icon">👤</span>
              Dynamic User Route
            </h3>
            <div className="user-input-group">
              <input
                type="text"
                placeholder="Enter username..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && fetchUserRoute()}
                className="user-input-field"
              />
              <button onClick={fetchUserRoute} className="user-submit-btn" disabled={loading}>
                <span>✨</span> Greet User
              </button>
            </div>
          </div>

          <div className="auto-fetch-section">
            <h3>
              <span className="icon">🤖</span>
              Auto Explorer
            </h3>
            <div className="auto-fetch-controls">
              {!isAutoFetching ? (
                <button onClick={startAutoFetch} className="auto-start-btn">
                  <span>▶️</span> Start Auto-Fetch
                </button>
              ) : (
                <button onClick={stopAutoFetch} className="auto-stop-btn">
                  <span>⏹️</span> Stop Auto-Fetch
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="response-section">
            <div className="section-header">
              <h3>
                <span className="icon">📡</span>
                Server Response
              </h3>
              <button onClick={clearResponse} className="clear-btn" title="Clear response">
                🗑️ Clear
              </button>
            </div>
            <div className={`response-content ${animationClass}`} ref={responseRef}>
              {loading && <LoadingSpinner />}
              {error && (
                <div className="error-card">
                  <div className="error-icon">⚠️</div>
                  <div className="error-message">{error}</div>
                </div>
              )}
              {response && !loading && (
                <div className="response-card">
                  <div className="response-header">
                    <span className="response-status success">✓ Connected</span>
                    <span className="response-route">{activeRoute}</span>
                  </div>
                  <pre className="response-json">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                </div>
              )}
              {!response && !loading && !error && (
                <div className="empty-state">
                  <div className="empty-icon">🔌</div>
                  <p>Click any route button to see server response</p>
                </div>
              )}
            </div>
          </div>

          <div className="chat-section">
            <div className="section-header">
              <h3>
                <span className="icon">💬</span>
                Live Chat with Server
              </h3>
              <button onClick={clearChat} className="clear-btn" title="Clear chat">
                🗑️ Clear
              </button>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {chatMessages.length === 0 && (
                <div className="empty-chat">
                  <div className="empty-icon">💭</div>
                  <p>Send messages to interact with the server</p>
                </div>
              )}
            </div>
            <div className="chat-input-group">
              <input
                type="text"
                placeholder="Type a message to the server..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendCustomMessage()}
                className="chat-input"
              />
              <button onClick={sendCustomMessage} className="send-btn">
                Send <span>📤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;