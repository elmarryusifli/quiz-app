// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const withProtectedRoute = (WrappedComponent) => {
//   const ProtectedRoute = (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         router.push('/login');
//       }
//     }, [router]);

//     return <WrappedComponent {...props} />;
//   };

//   ProtectedRoute.displayName = `withProtectedRoute(${getDisplayName(WrappedComponent)})`;

//   return ProtectedRoute;
// };

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

// export default withProtectedRoute;

////////////////////


import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withProtectedRoute = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  ProtectedRoute.displayName = `withProtectedRoute(${getDisplayName(WrappedComponent)})`;

  return ProtectedRoute;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withProtectedRoute;
