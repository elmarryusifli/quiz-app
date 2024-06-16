// pages/api/login.js
export default function handler(req, res) {
  const { token } = req.body;
  const PERSONAL_ACCESS_TOKEN = "Ilqaroglan13579@";

  if (token === PERSONAL_ACCESS_TOKEN) {
    res.status(200).json({ message: 'Authenticated', token });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}
