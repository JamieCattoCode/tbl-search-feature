import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import PasswordHasher from './PasswordHasher';
import SignupForm from './SignupForm';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ul className="navbar-list">
        <li className="navbar-list-item"><Link to="/">Home</Link></li>
        <li className="navbar-list-item"><Link to="search">Search</Link></li>
        <li className="navbar-list-item"><Link to="password-hasher">Password Hasher</Link></li>
        <li className="navbar-list-item"><Link to="sign-up">Sign Up</Link></li>
      </ul>
      <Routes>
        <Route path="search" element={SearchPage()} />
        <Route path="password-hasher" element={PasswordHasher()} />
        <Route path="sign-up" element={SignupForm()} />
      </Routes>
    </div>
  );
}

export default App;
