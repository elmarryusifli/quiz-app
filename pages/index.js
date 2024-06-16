// pages/index.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { token });
      setMessage(response.data.message);
      localStorage.setItem('authToken', token);
      router.push('/protected');
    } catch (error) {
      setMessage('Authentication failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="password"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter your access token"
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}
