const { results } = require('../../sharedData');

export default function handler(req, res) {
  try {
    console.log('Returning results:', results); // Debug log
    res.status(200).json(results);
  } catch (error) {
    console.error('Error in /api/results handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
