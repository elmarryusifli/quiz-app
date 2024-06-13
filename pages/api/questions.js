const { questions } = require('../../sharedData');

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { questions: inputText } = req.body;
      questions.length = 0; // Clear the array
      questions.push(...parseQuestions(inputText));
      console.log('Questions received:', questions); // Debug log
      res.status(200).json({ success: true });
    } else if (req.method === 'GET') {
      console.log('Sending questions:', questions); // Debug log
      res.status(200).json(questions);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in /api/questions handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function parseQuestions(inputText) {
  const questionBlocks = inputText.trim().split(/\n\s*\n/);
  return questionBlocks.map((block, index) => {
    const lines = block.trim().split('\n');
    const questionText = lines[0].replace(/^\d+\.\s*/, '').trim();
    const options = lines.slice(1).map(line => line.replace(/^\s*[a-dA-D]\)\s*/, '').replace(/\(.\)/, '').trim());
    const correctOption = lines.slice(1).find(option => option.includes('(') && option.includes(')'));

    if (!correctOption) {
      return null;
    }

    const correctAnswerMatch = correctOption.match(/\((.)\)/);
    const correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : null;

    return { text: questionText, options, correctAnswer };
  }).filter(question => question !== null);
}
