export default function handler(req, res) {
  const { token } = req.body;
  const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;

  if (token === PERSONAL_ACCESS_TOKEN) {
    res.status(200).json({ message: 'Authenticated', token });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}
