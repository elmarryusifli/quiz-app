import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-mode', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/create-quiz">Create Quiz</Link>
      <Link href="/quizzes">Quizzes</Link>
      <Link href="/documentation">Documentation</Link>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
        .navbar a {
          margin: 0 1rem;
          color: white;
          text-decoration: none;
        }
        .dark-mode-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.5rem;
        }
      `}</style>
    </nav>
  );
}
