// File: components/Pages/Flights.js
import React, { useState } from 'react';
 import TopHeader from '../../Homepage/TopHeader';
import Login from '../../Homepage/Login';
const Flights = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <>
      {/* Include Navbar inside Flights */}
      <Navbar />

      {/* TopHeader receives the openLogin function as a prop */}
      <TopHeader onLoginClick={openLogin} />

      {/* Show the Login modal conditionally */}
      {showLogin && <Login isOpen={showLogin} onClose={closeLogin} />}

      <div className="p-6 text-white bg-[#001f3f] min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to Flights</h1>
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Flights;
