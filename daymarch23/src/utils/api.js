import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchRoute = async (route) => {
  try {
    const response = await axios.get(`${API_URL}${route}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendChatMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message });
    return response.data.reply;
  } catch (error) {
    throw error;
  }
};

export const fetchUserRoute = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/user/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchChatHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/chat/history`);
    return response.data.history;
  } catch (error) {
    throw error;
  }
};