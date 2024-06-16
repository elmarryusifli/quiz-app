export default function handler(req, res) {
  const token = req.headers['authorization'];
  const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;

  if (token === PERSONAL_ACCESS_TOKEN) {
    res.status(200).json({ message: 'This is a protected route' });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
}
