// pages/login.js
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { token });
      setMessage(response.data.message);
      // Save token to local storage or state management
      localStorage.setItem('authToken', token);
    } catch (error) {
      setMessage('Authentication failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter your access token"
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}
