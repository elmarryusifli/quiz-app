import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <style jsx global>{`
        body.dark-mode {
          background-color: #121212;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Layout;
