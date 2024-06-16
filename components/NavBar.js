// // import Link from 'next/link';
// // import { useState, useEffect } from 'react';
// // import { FaSun, FaMoon } from 'react-icons/fa';

// // export default function NavBar() {
// //   const [darkMode, setDarkMode] = useState(true);

// //   useEffect(() => {
// //     const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
// //     setDarkMode(savedDarkMode);
// //     document.body.classList.toggle('dark-mode', savedDarkMode);
// //   }, []);

// //   const toggleDarkMode = () => {
// //     const newDarkMode = !darkMode;
// //     setDarkMode(newDarkMode);
// //     localStorage.setItem('darkMode', newDarkMode);
// //     document.body.classList.toggle('dark-mode', newDarkMode);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="nav-links">
// //         <Link href="/home">Home</Link>
// //         <Link href="/create-quiz">Create Quiz</Link>
// //         <Link href="/quizzes">Quizzes</Link>
// //         <Link href="/documentation">Documentation</Link>
// //         <Link href="/interview-questions">IQ</Link>
// //       </div>
// //       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
// //         {darkMode ? <FaSun /> : <FaMoon />}
// //       </button>
// //       <style jsx>{`
// //         .navbar {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           padding: 1rem;
// //           background-color: #333;
// //           color: white;
// //         }
// //         .nav-links {
// //           display: flex;
// //           gap: 2rem;
// //         }
// //         .nav-links a {
// //           font-size: 2em;
// //           color: white;
// //           text-decoration: none;
// //           transition: color 0.3s;
// //         }
// //         .nav-links a:hover {
// //           color: lightgrey;
// //         }
// //         .dark-mode-toggle {
// //           background: none;
// //           border: none;
// //           color: white;
// //           cursor: pointer;
// //           font-size: 2.5rem;
// //           margin-left: 2rem;
// //         }
// //         @media (max-width: 768px) {
// //           .nav-links {
// //             flex-direction: column;
// //             align-items: center;
// //           }
// //           .nav-links a {
// //             font-size: 1.5em;
// //           }
// //         }
// //       `}</style>
// //     </nav>
// //   );
// // }

// // import Link from 'next/link';
// // import { useState, useEffect } from 'react';
// // import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

// // export default function NavBar() {
// //   const [darkMode, setDarkMode] = useState(true);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
// //     setDarkMode(savedDarkMode);
// //     document.body.classList.toggle('dark-mode', savedDarkMode);
// //   }, []);

// //   const toggleDarkMode = () => {
// //     const newDarkMode = !darkMode;
// //     setDarkMode(newDarkMode);
// //     localStorage.setItem('darkMode', newDarkMode);
// //     document.body.classList.toggle('dark-mode', newDarkMode);
// //   };

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <button className="menu-toggle" onClick={toggleMenu}>
// //         {menuOpen ? <FaTimes /> : <FaBars />}
// //       </button>
// //       <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
// //         <Link href="/">Home</Link>
// //         <Link href="/create-quiz">Create Quiz</Link>
// //         <Link href="/quizzes">Quizzes</Link>
// //         <Link href="/documentation">Documentation</Link>
// //         <Link href="/interview-questions">IQ</Link>
// //       </div>
// //       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
// //         {darkMode ? <FaSun /> : <FaMoon />}
// //       </button>
// //       <style jsx>{`
// //         .navbar {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           padding: 1rem;
// //           background-color: #333;
// //           color: white;
// //         }
// //         .logo a {
// //           font-size: 2em;
// //           color: white;
// //           text-decoration: none;
// //         }
// //         .menu-toggle {
// //           display: none;
// //           background: none;
// //           border: none;
// //           color: white;
// //           font-size: 2.5rem;
// //           cursor: pointer;
// //         }
// //         .nav-links {
// //           display: flex;
// //           gap: 2rem;
// //         }
// //         .nav-links a {
// //           font-size: 2em;
// //           color: white;
// //           text-decoration: none;
// //           transition: color 0.3s;
// //         }
// //         .nav-links a:hover {
// //           color: lightgrey;
// //         }
// //         .dark-mode-toggle {
// //           background: none;
// //           border: none;
// //           color: white;
// //           cursor: pointer;
// //           font-size: 2.5rem;
// //           margin-left: 2rem;
// //         }
// //         @media (max-width: 768px) {
// //           .nav-links {
// //             display: none;
// //             flex-direction: column;
// //             gap: 1rem;
// //             width: 100%;
// //             text-align: center;
// //           }
// //           .nav-links.active {
// //             display: flex;
// //           }
// //           .menu-toggle {
// //             display: block;
// //           }
// //         }
// //       `}</style>
// //     </nav>
// //   );
// // }


// /////////////

// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import { useRouter } from 'next/router';

// export default function NavBar() {
//   const [darkMode, setDarkMode] = useState(true);
//   const router = useRouter();

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

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     router.push('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link href="/home">Home</Link>
//         <Link href="/create-quiz">Create Quiz</Link>
//         <Link href="/quizzes">Quizzes</Link>
//         <Link href="/documentation">Documentation</Link>
//         <Link href="/interview-questions">IQ</Link>
//       </div>
//       <div>
//         <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <style jsx>{`
//         .navbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem;
//           background-color: #333;
//           color: white;
//         }
//         .nav-links {
//           display: flex;
//           gap: 2rem;
//         }
//         .nav-links a {
//           font-size: 2em;
//           color: white;
//           text-decoration: none;
//           transition: color 0.3s;
//         }
//         .nav-links a:hover {
//           color: lightgrey;
//         }
//         .dark-mode-toggle {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//           font-size: 2.5rem;
//           margin-left: 2rem;
//         }
//         button {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//           font-size: 1.5rem;
//           margin-left: 1rem;
//         }
//         @media (max-width: 768px) {
//           .nav-links {
//             flex-direction: column;
//             align-items: center;
//           }
//           .nav-links a {
//             font-size: 1.5em;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }

///////////////////


import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

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

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href="/">Documentation</Link>
        <Link href="/create-quiz">Create Quiz</Link>
        <Link href="/quizzes">Quizzes</Link>
        <Link href="/interview-questions">IQ</Link>
      </div>
      <div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt />
        </button>
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
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
        .logout-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 2.5rem;
          margin-left: 1rem;
        }
        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            align-items: center;
          }
          .nav-links a {
            font-size: 1.5em;
          }
        }
      `}</style>
    </nav>
  );
}
