import React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Welcome to our home page</h1>
        <p>This is the main content of the home page. Explore our website!</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
