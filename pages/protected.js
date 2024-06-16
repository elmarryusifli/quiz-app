// pages/protected.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Protected() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('/api/protected', {
          headers: { Authorization: token }
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Access denied');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Data</h1>
      <p>{message}</p>
    </div>
  );
}
