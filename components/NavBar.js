import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/">Documentation</Link>
        <Link href="/quizzes">Quizzes</Link>
        <Link href="/interview-questions">IQ</Link>
        <Link href="/create-quiz">Create Quiz</Link>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt />
        </button>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
        .logo a {
          font-size: 2em;
          color: white;
          text-decoration: none;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 2em;
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: lightgrey;
        }
        .dark-mode-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 2.5rem;
          margin-left: 2rem;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            text-align: center;
          }
          .nav-links.active {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
        }
          .logout-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 2.5rem;
          margin-left: 1rem;
        }
      `}</style>
    </nav>
  );
}
