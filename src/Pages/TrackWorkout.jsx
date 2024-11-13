import React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function TrackWorkout() {
  return (
    <div>
      <Navbar />
      <section>
        <h1>Track Your Fitness Journey</h1>

        {/* Mission Section */}
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help you achieve your fitness goals with ease. Whether you're looking to lose weight, gain muscle, or just stay active, we’re here to guide you every step of the way. Track your workouts, stay motivated, and reach new milestones with our simple and intuitive app.
          </p>
        </div>

        {/* Future Plans Section */}
        <div className="future-plans">
          <h2>What’s Next?</h2>
          <p>
            We're just getting started! In the future, we plan to add even more features to help you stay on track—personalized workout plans, progress tracking, and tips to boost your fitness routine. Join us as we continue to grow and make your fitness journey even better!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
