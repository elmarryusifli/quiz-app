// pages/api/protected.js
export default function handler(req, res) {
  const token = req.headers['authorization'];
  const PERSONAL_ACCESS_TOKEN = "Ilqaroglan13579@";

  if (token === PERSONAL_ACCESS_TOKEN) {
    res.status(200).json({ message: 'This is a protected route' });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
}
