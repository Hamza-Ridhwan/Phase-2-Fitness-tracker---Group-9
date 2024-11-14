import React from 'react';
import logo from '../image.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header>
      <img  src={logo} alt="Fitness Tracker Logo" />
      <nav className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/trackWorkout">Track Your Workout</Link>
      </nav>
    </header>
  );
};

export default Navbar;