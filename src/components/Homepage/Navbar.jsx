import React, { useState } from 'react';
import Login from "./Login";
import Sidebar from "./SideBar"; // Import the Sidebar component
import { faHeart, faGlobe as faGlobeIcon, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkyscannerNavbar = () => {
    const [from, setFrom] = useState('Pakistan (PK)');
    const [to, setTo] = useState('');
    const [depart, setDepart] = useState('2025-04-01'); // Default date in YYYY-MM-DD format
    const [returnDate, setReturnDate] = useState('2025-04-08'); // Default date in YYYY-MM-DD format
    const [travellers, setTravellers] = useState('1 Adult, Economy');
    const [nearbyAirportsFrom, setNearbyAirportsFrom] = useState(false);
    const [nearbyAirportsTo, setNearbyAirportsTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);
    const [multiCity, setMultiCity] = useState(false);
    const [active, setActive] = useState("Flights");
    const [showLogin, setShowLogin] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

    const handleSearch = () => {
        console.log('Searching:', { from, to, depart, returnDate, travellers, multiCity });
        alert('Searching for flights...');
    };

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="bg-[#002951] text-white font-sans relative">
            <nav className="bg-[#002951] py-4">
                <div className="px-6 xl:px-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-xl md:text-4xl font-semibold mr-9">Skyscanner</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <span className="text-x1">&#9829;</span>
                        <button className="text-xl bg-transparent border-none focus:outline-none">
                            <FontAwesomeIcon icon={faGlobeIcon} />
                        </button>
                        <button
                            onClick={openLogin}
                            className="bg-transparent border border-white rounded-md px-4 py-1.5 text-sm md:text-base hover:bg-white hover:text-[#002951] transition duration-200"
                        >
                            Log in
                        </button>
                        <button
                            onClick={openSidebar}
                            className="bg-transparent border border-white rounded-md p-1.5 hover:bg-white hover:text-[#002951] transition duration-200 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                        {showLogin && <Login isOpen={showLogin} onClose={closeLogin} />}
                    </div>
                </div>
            </nav>

            <div className="py-8 md:py-12">
                <div className="px-6 xl:px-8">
                    <div className="flex space-x-4 mb-6 md:mb-8">
                        <button
                            className={`flex items-center bg-[#0057FF] text-white py-2.5 px-5 rounded-full text-sm md:text-base font-semibold focus:outline-none ${active === "Flights" ? "bg-[#0057FF]" : "hover:bg-[#0043CC]"}`}
                            onClick={() => setActive("Flights")}
                        >
                            ✈️ <span className="ml-2">Flights</span>
                        </button>
                        <button
                            className={`flex items-center text-white py-2.5 px-5 rounded-full text-sm md:text-base font-semibold focus:outline-none hover:bg-[#0043CC] ${active === "Hotels" ? "bg-[#0043CC]" : ""}`}
                            onClick={() => setActive("Hotels")}
                        >
                            🏨 <span className="ml-2">Hotels</span>
                        </button>
                        <button
                            className={`flex items-center text-white py-2.5 px-5 rounded-full text-sm md:text-base font-semibold focus:outline-none hover:bg-[#0043CC] ${active === "Car hire" ? "bg-[#0043CC]" : ""}`}
                            onClick={() => setActive("Car hire")}
                        >
                            🚗 <span className="ml-2">Car hire</span>
                        </button>
                    </div>

                    {active === "Flights" && (
                        <>
                            <div className="mb-10 md:mb-12">
                                <h1 className="text-2xl md:text-4xl font-semibold mb-4">Millions of cheap flights. One simple search.</h1>
                                <button onClick={() => setMultiCity(!multiCity)} className="text-sm md:text-base focus:outline-none flex items-center">
                                    &#8634; <span className="ml-2">Create a multi-city route</span>
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                            <div className="flex-1 bg-white text-black rounded-lg p-4">

                                    <label htmlFor="from" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">From</label>
                                    <input
                                        type="text"
                                        id="from"
                                        className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        placeholder="Pakistan (PK)"
                                    />
                                </div>
                                <button className="px-3 focus:outline-none" onClick={handleSwap}>
                                    &#8644;
                                </button>
                                <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="to" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">To</label>
                                    <input
                                        type="text"
                                        id="to"
                                        className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        placeholder="Country, city or airport"
                                    />
                                </div>
                                <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="depart" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">Depart</label>
                                    <input
                                        type="date" // Updated to date input
                                        id="depart"
                                        className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                        value={depart} // Ensure it's in YYYY-MM-DD format
                                        onChange={(e) => setDepart(e.target.value)} // Handle date change
                                    />
                                </div>
                                <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="return" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">Return</label>
                                    <input
                                        type="date" // Updated to date input
                                        id="return"
                                        className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                        value={returnDate} // Ensure it's in YYYY-MM-DD format
                                        onChange={(e) => setReturnDate(e.target.value)} // Handle date change
                                    />
                                </div>
                                <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="travellers" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">Travellers and cabin class</label>
                                    <input
                                        type="text"
                                        id="travellers"
                                        className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                        value={travellers}
                                        onChange={(e) => setTravellers(e.target.value)}
                                        placeholder="1 Adult, Economy"
                                    />
                                </div>
                                <div className="ml-0 md:ml-6 mt-4 md:mt-0">
                                    <button
                                        onClick={handleSearch}
                                        className="bg-[#0057FF] hover:bg-[#0043CC] text-white font-semibold py-3 px-8 rounded-md focus:outline-none text-sm md:text-base"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>

                            {multiCity && (
                                <div className="mt-4 text-gray-700">
                                    <p className="text-sm md:text-base">Multi-City Route Options (Coming Soon!)</p>
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-6 mt-4">
                                <label className="flex items-center text-sm md:text-base">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-[#0057FF] focus:ring-[#0057FF] rounded mr-2"
                                        checked={nearbyAirportsFrom}
                                        onChange={(e) => setNearbyAirportsFrom(e.target.checked)}
                                    />
                                    Add nearby airports
                                </label>
                                <label className="flex items-center text-sm md:text-base">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-[#0057FF] focus:ring-[#0057FF] rounded mr-2"
                                        checked={directFlights}
                                        onChange={(e) => setDirectFlights(e.target.checked)}
                                    />
                                    Direct flights
                                </label>
                            </div>
                        </>
                    )}

                    {/* Add conditional rendering for Hotels or Car Hire */}

                </div>
            </div>

            {/* Render the Sidebar conditionally */}
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
    );
};

export default SkyscannerNavbar;
