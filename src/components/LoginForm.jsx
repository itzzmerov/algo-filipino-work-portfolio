import React, { useState } from 'react';
import './login.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the login verification
    const userRef = 'rovic';
    const passRef = 'balingbing';

    if (username === userRef && password === passRef) {
      onLogin(); // Call the onLogin function from the parent component
    } else {
      alert('Incorrect username or password!');
    }
  };

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <form className="login__form" onSubmit={handleSubmit}>
          <div>
            <h2 className="login__title">Log in</h2>
            <label className="login__label" htmlFor="username">Username</label>
            <input
              id="username"
              className='login__input'
              type="text"
              placeholder="JohnDoe@12"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="login__label" htmlFor="password">Password </label>
            <input
              id="password"
              className='login__input'
              type="password"
              placeholder="***********"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn__form" type="submit" value="Log in">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;