import React from 'react';
import logo from '../image.png'


const Navbar = () => {
  return (
    <header>
      <img  src={logo} alt="Fitness Tracker Logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Track Your Workout</a>
      </nav>
    </header>
  );
};

export default Navbar;