import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
    <>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
