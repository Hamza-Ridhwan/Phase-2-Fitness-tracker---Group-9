import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/TrackWorkout" className="nav-link">Track Workout</Link>
        </li>
      </ul>
    </nav>
  );
}
