// // import { useEffect } from 'react';
// // import { useRouter } from 'next/router';
// // import '../styles/globals.css';

// // function MyApp({ Component, pageProps }) {
// //   const router = useRouter();

// //   useEffect(() => {
// //     const token = localStorage.getItem('authToken');
// //     if (!token && router.pathname !== '/login') {
// //       router.push('/login');
// //     } else if (token && router.pathname === '/login') {
// //       router.push('/home');
// //     }
// //   }, [router]);

// //   return <Component {...pageProps} />;
// // }

// // export default MyApp;

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (!token && router.pathname !== '/login') {
//       router.push('/login');
//     } else if (token && router.pathname === '/login') {
//       router.push('/home');
//     }
//   }, [router]);

//   return <Component {...pageProps} />;
// }

// export default MyApp;


////////////////////


import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token && router.pathname !== '/login') {
      router.push('/login');
    } else if (token && router.pathname === '/login') {
      router.push('/');
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
