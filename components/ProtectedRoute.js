// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
