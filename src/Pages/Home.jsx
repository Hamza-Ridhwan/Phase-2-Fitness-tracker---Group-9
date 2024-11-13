// src/components/App.jsx
import React from 'react';
// import './App.css'; // Add all the styles here or import from index.css
import  '../Home.css'
const Home = () => {
    return (
        <>
            <main>
                <div className="background-wrapper">
                    
                    {/* Hero Section */}
                    <section className="hero">
                        <div>
                            <h1>Track Your <span className="highlight">Fitness Journey</span></h1>
                            <button className="cta-btn">Start Tracking</button>
                        </div>
                    </section>
                </div>



                {/* Introduction */}
                <section className="intro">
                    <h2>Welcome to Your Fitness Tracker</h2>
                    <p>
                        Our platform allows you to monitor your workouts, track progress, and stay
                        motivated every day. Whether you're a beginner or an experienced athlete, we
                        help you achieve your fitness goals efficiently.
                    </p>
                </section>

                {/* Why Tracking Your Fitness is Important */}
                <section className="why-tracking">
                    <div className="box">
                        <i className="fa fa-bullseye"></i>
                        <h3>Helps You Set Goals</h3>
                        <ul>
                            <li>Track progress</li>
                            <li>Stay focused</li>
                        </ul>
                    </div>
                    <div className="box">
                        <i className="fa fa-line-chart"></i>
                        <h3>Monitors Progress</h3>
                        <ul>
                            <li>Visualize improvements</li>
                            <li>Get better results</li>
                        </ul>
                    </div>
                    <div className="box">
                        <i className="fa fa-magic"></i>
                        <h3>Boosts Motivation</h3>
                        <ul>
                            <li>Celebrate achievements</li>
                            <li>Stay consistent</li>
                        </ul>
                    </div>
                </section>

                {/* Exercise Cards */}
                <section className="exercise-cards">
                    <div className="card">
                        <h3>Running</h3>
                        <p>Great for cardio and stamina building. Helps improve cardiovascular health.</p>
                    </div>
                    <div className="card">
                        <h3>Push-ups</h3>
                        <p>Strengthens upper body muscles. Great for building muscle and endurance.</p>
                    </div>
                    <div className="card">
                        <h3>Yoga</h3>
                        <p>Improves flexibility and reduces stress. Excellent for mind-body balance.</p>
                    </div>
                </section>
            </main >
          

        </>

    );
};

export default Home;