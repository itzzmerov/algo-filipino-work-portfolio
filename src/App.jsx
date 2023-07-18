import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import LoginForm from './components/LoginForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <Nav />
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;