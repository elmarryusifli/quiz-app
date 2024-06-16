// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// export default function NavBar() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
//     setDarkMode(savedDarkMode);
//     document.body.classList.toggle('dark-mode', savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     localStorage.setItem('darkMode', newDarkMode);
//     document.body.classList.toggle('dark-mode', newDarkMode);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link href="/">Home</Link>
//         <Link href="/create-quiz">Create Quiz</Link>
//         <Link href="/quizzes">Quizzes</Link>
//         <Link href="/documentation">Documentation</Link>
//         <Link href="/interview-questions">IQ</Link>
//       </div>
//       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </button>
//       <style jsx>{`
//         .navbar {
//           display: flex;
//           justify-content: center; /* Center the items horizontally */
//           align-items: center; /* Center the items vertically */
//           padding: 1rem;
//           background-color: #333;
//           color: white;
//         }
//         .nav-links {
//           display: flex;
//           gap: 2rem; /* Space between links */
//         }
//         .nav-links a {
//           font-size: 2em; /* H1 size */
//           color: white; /* White font color */
//           text-decoration: none; /* Remove underline */
//           transition: color 0.3s;
//         }
//         .nav-links a:hover {
//           color: lightgrey; /* Optional: change color on hover */
//         }
//         .dark-mode-toggle {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//           font-size: 2.5rem; /* Adjust size as needed */
//           margin-left: 2rem; /* Space from the links */
//         }
//       `}</style>
//     </nav>
//   );
// }
//////////////////////////
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// export default function NavBar() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
//     setDarkMode(savedDarkMode);
//     document.body.classList.toggle('dark-mode', savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     localStorage.setItem('darkMode', newDarkMode);
//     document.body.classList.toggle('dark-mode', newDarkMode);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link href="/">Home</Link>
//         <Link href="/create-quiz">Create Quiz</Link>
//         <Link href="/quizzes">Quizzes</Link>
//         <Link href="/documentation">Documentation</Link>
//         <Link href="/interview-questions">IQ</Link>
//       </div>
//       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </button>
//       <style jsx>{`
//         .navbar {
//           display: flex;
//           justify-content: center; /* Center the items horizontally */
//           align-items: center; /* Center the items vertically */
//           padding: 1rem;
//           background-color: #333;
//           color: white;
//         }
//         .nav-links {
//           display: flex;
//           gap: 2rem; /* Space between links */
//         }
//         .nav-links a {
//           font-size: 2em; /* H1 size */
//           color: white; /* White font color */
//           text-decoration: none; /* Remove underline */
//           transition: color 0.3s;
//         }
//         .nav-links a:hover {
//           color: lightgrey; /* Optional: change color on hover */
//         }
//         .dark-mode-toggle {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//           font-size: 2.5rem; /* Adjust size as needed */
//           margin-left: 2rem; /* Space from the links */
//         }
//       `}</style>
//     </nav>
//   );
// }

/////////////////////////////////////////////////////

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
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/create-quiz">Create Quiz</Link>
        <Link href="/quizzes">Quizzes</Link>
        <Link href="/documentation">Documentation</Link>
        <Link href="/interview-questions">IQ</Link>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
          flex-wrap: wrap;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          flex-grow: 1;
          justify-content: center;
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
        @media (max-width: 600px) {
          .nav-links {
            flex-direction: column;
            align-items: center;
          }
          .nav-links a {
            font-size: 1.5em;
          }
          .dark-mode-toggle {
            font-size: 2rem;
            margin-left: 0;
            margin-top: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
