import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { token });
      if (response.status === 200) {
        localStorage.setItem('authToken', token);
        router.push('/index');
      } else {
        setMessage('Authentication failed');
      }
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
