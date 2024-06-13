import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
  const [questions, setQuestions] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/questions', { questions });
    router.push('/quiz');
  };

  return (
    <div>
      <h1>Input Questions</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          rows="20"
          cols="80"
          placeholder="Paste your questions here"
        />
        <button type="submit">Add Questions</button>
      </form>
    </div>
  );
}
