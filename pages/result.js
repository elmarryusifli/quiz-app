import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Result() {
  const [results, setResults] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('/api/results');
        console.log('Results fetched:', response.data); // Debug log
        setResults(response.data);

        const correct = response.data.filter(result => result.correct).length;
        const wrong = response.data.filter(result => !result.correct).length;

        setCorrectCount(correct);
        setWrongCount(wrong);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Correct Answers: {correctCount}</p>
      <p>Wrong Answers: {wrongCount}</p>
      {results.map((result, index) => (
        <div key={index}>
          <p><strong>{result.text}</strong></p>
          <ul>
            {result.options.map((option, optIndex) => (
              <li
                key={optIndex}
                className={result.userAnswer === String.fromCharCode(97 + optIndex)
                  ? (result.correctAnswer === String.fromCharCode(97 + optIndex)
                    ? 'correct-answer'
                    : 'incorrect-answer')
                  : ''}
              >
                {String.fromCharCode(97 + optIndex)}. {option}
                {result.correctAnswer === String.fromCharCode(97 + optIndex) && ' (Correct Answer)'}
              </li>
            ))}
          </ul>
          {!result.correct && (
            <>
              <p className="incorrect-answer">Your answer: {result.userAnswer}</p>
              <p className="correct-answer">Correct answer: {result.correctAnswer}</p>
            </>
          )}
        </div>
      ))}
      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
}
