import withProtectedRoute from '../components/ProtectedRoute';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default withProtectedRoute(Home);
