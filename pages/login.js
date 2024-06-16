// // // import { useState } from 'react';
// // // import axios from 'axios';
// // // import { useRouter } from 'next/router';

// // // export default function Login() {
// // //   const [token, setToken] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const router = useRouter();

// // //   const handleLogin = async () => {
// // //     try {
// // //       const response = await axios.post('/api/login', { token });
// // //       if (response.status === 200) {
// // //         localStorage.setItem('authToken', token);
// // //         router.push('/');
// // //       } else {
// // //         setMessage('Authentication failed');
// // //       }
// // //     } catch (error) {
// // //       setMessage('Authentication failed');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Login</h1>
// // //       <input
// // //         type="password"
// // //         value={token}
// // //         onChange={(e) => setToken(e.target.value)}
// // //         placeholder="Enter your access token"
// // //       />
// // //       <button onClick={handleLogin}>Login</button>
// // //       <p>{message}</p>
// // //     </div>
// // //   );
// // // }

// // ////////////////////////////////


// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useRouter } from 'next/router';

// // export default function Login() {
// //   const [token, setToken] = useState('');
// //   const [message, setMessage] = useState('');
// //   const router = useRouter();

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post('/api/login', { token });
// //       if (response.status === 200) {
// //         localStorage.setItem('authToken', token);
// //         router.push('/');
// //       } else {
// //         setMessage('Authentication failed');
// //       }
// //     } catch (error) {
// //       setMessage('Authentication failed');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <input
// //         type="password"
// //         value={token}
// //         onChange={(e) => setToken(e.target.value)}
// //         placeholder="Enter your access token"
// //       />
// //       <button onClick={handleLogin}>Login</button>
// //       <p>{message}</p>
// //     </div>
// //   );
// // }

// /////////////////////

// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [token, setToken] = useState('');
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/login', { token });
//       if (response.status === 200) {
//         localStorage.setItem('authToken', token);
//         router.push('/');
//       } else {
//         setMessage('Authentication failed');
//       }
//     } catch (error) {
//       setMessage('Authentication failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <input
//           type="password"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           placeholder="Enter your access token"
//         />
//         <button onClick={handleLogin}>Login</button>
//         <p>{message}</p>
//       </div>
//       <style jsx>{`
//         .login-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #f0f0f0;
//         }
//         .login-form {
//           background: white;
//           padding: 2rem;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           text-align: center;
//         }
//         .login-form h1 {
//           margin-bottom: 1.5rem;
//         }
//         .login-form input {
//           width: 100%;
//           padding: 0.5rem;
//           margin-bottom: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//         }
//         .login-form button {
//           width: 100%;
//           padding: 0.75rem;
//           border: none;
//           border-radius: 4px;
//           background-color: #0070f3;
//           color: white;
//           font-size: 1rem;
//           cursor: pointer;
//         }
//         .login-form button:hover {
//           background-color: #005bb5;
//         }
//         .login-form p {
//           margin-top: 1rem;
//           color: red;
//         }
//       `}</style>
//     </div>
//   );
// }

/////////////

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { token });
      if (response.status === 200) {
        localStorage.setItem('authToken', token);
        router.push('/');
      } else {
        setMessage('Authentication failed');
      }
    } catch (error) {
      setMessage('Authentication failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your personal access token"
        />
        <button onClick={handleLogin}>Sign In</button>
        <p>{message}</p>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black; /* Set background color to black */
          color: white; /* Set text color to white for visibility */
        }
        .login-form {
          background: #333; /* Dark grey background for the form */
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .login-form h1 {
          margin-bottom: 1.5rem;
        }
        .login-form input {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #444; /* Dark background for input */
          color: white; /* White text color for input */
        }
        .login-form button {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        .login-form button:hover {
          background-color: #005bb5;
        }
        .login-form p {
          margin-top: 1rem;
          color: red;
        }
      `}</style>
    </div>
  );
}

