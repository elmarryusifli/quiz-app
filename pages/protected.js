// pages/protected.js
import withProtectedRoute from '../components/ProtectedRoute';

const Protected = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This is a protected route.</p>
    </div>
  );
};

export default withProtectedRoute(Protected);
