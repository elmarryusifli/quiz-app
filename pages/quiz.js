import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions');
        console.log('Questions fetched:', response.data); // Debug log
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const selectAnswer = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question${questionIndex}`]: answer,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/submit', userAnswers);
      router.push('/result');
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div>
      {questions.length > 0 ? (
        <>
          <div>
            <p>{questions[currentQuestion].text}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(currentQuestion, String.fromCharCode(97 + index))}
                className={
                  userAnswers[`question${currentQuestion}`] === String.fromCharCode(97 + index)
                    ? questions[currentQuestion].correctAnswer === String.fromCharCode(97 + index)
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }
              >
                {String.fromCharCode(97 + index)}. {option}
              </button>
            ))}
          </div>
          <div>
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0}>
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                Next
              </button>
            ) : (
              <button onClick={handleSubmit}>
                Submit Quiz
              </button>
            )}
          </div>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}
