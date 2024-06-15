import { useState } from 'react';
import axios from 'axios';

export default function CreateQuiz() {
  const [questionsText, setQuestionsText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/questions', { questions: questionsText });
      setQuestionsText('');
    } catch (error) {
      console.error('Error adding questions:', error);
    }
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={questionsText}
          onChange={(e) => setQuestionsText(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Enter your questions here..."
        ></textarea>
        <button type="submit">Add Questions</button>
      </form>
    </div>
  );
}
