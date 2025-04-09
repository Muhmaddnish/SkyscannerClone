import React, { useState } from 'react';
import Navbar from './components/Homepage/Navbar';
import Topbar from './components/Homepage/Topbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Homepage/HeroSection';
import FaqSection from './components/Homepage/FaqSection';
import FaqSection2 from './components/Homepage/FaqSection2';
import Planner from './components/Homepage/Planner';
import Flights from './components/Pages/Flights/Navbar';

const App = () => {
  // State to toggle visibility of Flights page
  const [showFlights, setShowFlights] = useState(false);

  const handleShowFlights = () => {
    setShowFlights(true); // Show Flights page
  };

  const handleHideFlights = () => {
    setShowFlights(false); // Hide Flights page
  };

  return (
    <div>
      <Navbar onFlightsClick={handleShowFlights} />  {/* Pass function to Navbar */}
      <Topbar />

      {/* Conditionally render the Flights component */}
      {showFlights ? (
        <Flights onClose={handleHideFlights} />  // Pass function to Flights to close
      ) : (
        <>
          <HeroSection />
          <FaqSection />
          <FaqSection2 />
          <Planner />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
