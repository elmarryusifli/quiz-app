const { questions, results } = require('../../sharedData');

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const userAnswers = req.body;
      calculateResults(userAnswers);
      console.log('Results calculated:', results); // Debug log
      res.status(200).json({ success: true });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in /api/submit handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function calculateResults(userAnswers) {
  results.length = 0; // Clear the array
  results.push(...questions.map((question, index) => {
    const userAnswer = userAnswers[`question${index}`];
    const correct = userAnswer === question.correctAnswer;
    return { ...question, userAnswer, correct };
  }));
  console.log('Calculated results:', results); // Debug log
}
