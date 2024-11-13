import React from 'react';  
import Layout from '../Components/Layout';  
import { Link } from 'react-router-dom';  

const cardsData = [  
  {  
    title: 'Helps You Set Goals',  
    description: 'Track progress and stay focused.',  
  },  
  {  
    title: 'Monitors Progress',  
    description: 'Visualize improvements and get better results.',  
  },  
  {  
    title: 'Boosts Motivation',  
    description: 'Celebrate achievements and stay consistent.',  
  },  
  {  
    title: 'Running',  
    description: 'Great for cardio and stamina building. Helps improve cardiovascular health.',  
    linkText: 'Track Now',  
    linkPath: '/trackworkouts',  
  },  
  {  
    title: 'Push-ups',  
    description: 'Strengthens upper body muscles. Great for building muscle and endurance.',  
    linkText: 'Track Now',  
    linkPath: '/trackworkouts',  
  },  
  {  
    title: 'Yoga',  
    description: 'Improves flexibility and reduces stress. Excellent for mind-body balance.',  
    linkText: 'Track Now',  
    linkPath: '/trackworkouts',  
  },  
];  

function Home() {  
  return (  
    <Layout>  
      <div className="hero">  
        <h1>Track Your Fitness Journey</h1>  
        <Link to="/trackworkouts">  
          <button className="start-button">START TRACKING</button>  
        </Link>  
      </div>  

      <div className="welcome-section">  
        <h2>Welcome to Your Fitness Tracker</h2>  
        <p>  
          Our platform allows you to monitor your workouts, track progress, and stay motivated every day. Whether you are a beginner or an experienced athlete, we help you achieve your fitness goals efficiently.  
        </p>  
      </div>  

      <div className="tracker-features">  
        <h2>What The Tracker Does For You</h2>  
        <div className="feature-cards">  
          {cardsData.slice(0, 3).map((card, index) => (  
            <div className="card" key={index}>  
              <h3>{card.title}</h3>  
              <p>{card.description}</p>  
            </div>  
          ))}  
        </div> 
        </div>

      <div className="exercise-tracked "> 
        <h2>Some Of The Exercise Tracked </h2>
        <div className="feature-cards">
        {cardsData.map((card, index) => (  
          <div className="card" key={index}>  
            <h3>{card.title}</h3>  
            <p>{card.description}</p>  
            {card.linkText && (  
              <Link to={card.linkPath}>  
                <button className="track-button">{card.linkText}</button>  
              </Link>  
            )}  
          </div>  
        ))}  
      </div>  
      </div>
    </Layout>  
  );  
}  

export default Home;