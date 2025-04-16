import React, { useState, useRef, useEffect } from 'react';
import Login from "./Login";
import Sidebar from "./SideBar";
import { faHeart, faGlobe as faGlobeIcon, faBars, faPlane, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const allAirportSuggestions = [
    { name: "Islamabad International Airport", code: "ISB", country: "Pakistan" },
    { name: "Karachi Jinnah International Airport", code: "KHI", country: "Pakistan" },
    { name: "Lahore Allama Iqbal International Airport", code: "LHE", country: "Pakistan" },
    { name: "Peshawar Bacha Khan International Airport", code: "PEW", country: "Pakistan" },
    { name: "Quetta International Airport", code: "UET", country: "Pakistan" },
    { name: "Multan International Airport", code: "MUX", country: "Pakistan" },
    { name: "Faisalabad International Airport", code: "LYP", country: "Pakistan" },
    { name: "Sialkot International Airport", code: "SKT", country: "Pakistan" },
    { name: "Skardu Airport", code: "KDU", country: "Pakistan" },
    { name: "Dubai International Airport", code: "DXB", country: "United Arab Emirates" },
    { name: "Abu Dhabi International Airport", code: "AUH", country: "United Arab Emirates" },
    { name: "London Heathrow Airport", code: "LHR", country: "United Kingdom" },
    { name: "New York John F. Kennedy International Airport", code: "JFK", country: "United States" },
    { name: "Beijing Capital International Airport", code: "PEK", country: "China" },
    // Add more airport suggestions with name, code, and country
];

const SkyscannerNavbar = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departDate, setDepartDate] = useState(new Date('2025-04-01'));
    const [returnDate, setReturnDate] = useState(new Date('2025-04-08'));
    const [travellers, setTravellers] = useState('1 Adult, Economy');
    const [nearbyAirportsFrom, setNearbyAirportsFrom] = useState(false);
    const [nearbyAirportsTo, setNearbyAirportsTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);
    const [multiCity, setMultiCity] = useState(false);
    const [active, setActive] = useState("Flights");
    const [showLogin, setShowLogin] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [toSuggestions, setToSuggestions] = useState([]);
    const [showFromSuggestions, setShowFromSuggestions] = useState(false);
    const [showToSuggestions, setShowToSuggestions] = useState(false);
    const fromInputRef = useRef(null);
    const toInputRef = useRef(null);
    const departInputRef = useRef(null);
    const returnInputRef = useRef(null);
    const fromSuggestionsRef = useRef(null);
    const toSuggestionsRef = useRef(null);
    const [fromSuggestionIndex, setFromSuggestionIndex] = useState(-1);
    const [toSuggestionIndex, setToSuggestionIndex] = useState(-1);
    const [showTravellersOptions, setShowTravellersOptions] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [cabinClass, setCabinClass] = useState('Economy');
    const travellersRef = useRef(null);

    const handleSearch = () => {
        const formattedTravellers = `<span class="math-inline">\{adultCount\} Adult</span>{adultCount > 1 ? 's' : ''}, <span class="math-inline">\{childCount\} Child</span>{childCount > 1 ? 'ren' : ''}, ${cabinClass}`;
        setTravellers(formattedTravellers.replace(/, 0 Children, /, ', ').replace(/,  $/, ''));
        setShowTravellersOptions(false);
        console.log('Searching:', { from, to, departDate, returnDate, travellers: formattedTravellers, multiCity });
        alert('Searching for flights...');
    };

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
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

    const handleFromInputChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        setFromSuggestionIndex(-1);
        if (value.length >= 0) {
            const filteredSuggestions = allAirportSuggestions.filter(
                (airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.country.toLowerCase().includes(value.toLowerCase())
            );
            setFromSuggestions(filteredSuggestions);
            setShowFromSuggestions(true);
        } else {
            setFromSuggestions([]);
            setShowFromSuggestions(false);
        }
    };

    const handleToInputChange = (e) => {
        const value = e.target.value;
        setTo(value);
        setToSuggestionIndex(-1);
        if (value.length >= 0) {
            const filteredSuggestions = allAirportSuggestions.filter(
                (airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.country.toLowerCase().includes(value.toLowerCase())
            );
            setToSuggestions(filteredSuggestions);
            setShowToSuggestions(true);
        } else {
            setToSuggestions([]);
            setShowToSuggestions(false);
        }
    };

    const selectFromSuggestion = (suggestion) => {
        setFrom(`<span class="math-inline">\{suggestion\.name\} \(</span>{suggestion.code})`);
        setFromSuggestions([]);
        setShowFromSuggestions(false);
        setFromSuggestionIndex(-1);
        if (toInputRef.current) {
            toInputRef.current.focus();
        }
    };

    const selectToSuggestion = (suggestion) => {
        setTo(`<span class="math-inline">\{suggestion\.name\} \(</span>{suggestion.code})`);
        setToSuggestions([]);
        setShowToSuggestions(false);
        setToSuggestionIndex(-1);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromInputRef.current && !fromInputRef.current.contains(event.target) && fromSuggestionsRef.current && !fromSuggestionsRef.current.contains(event.target)) {
                setShowFromSuggestions(false);
                setFromSuggestionIndex(-1);
            }
            if (toInputRef.current && !toInputRef.current.contains(event.target) && toSuggestionsRef.current && !toSuggestionsRef.current.contains(event.target)) {
                setShowToSuggestions(false);
                setToSuggestionIndex(-1);
            }
            if (showTravellersOptions && travellersRef.current && !travellersRef.current.contains(event.target)) {
                setShowTravellersOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTravellersOptions]);

    const handleFromFocus = () => {
        setFromSuggestions(allAirportSuggestions);
        setShowFromSuggestions(true);
        setFromSuggestionIndex(-1);
    };

    const handleToFocus = () => {
        setToSuggestions(allAirportSuggestions);
        setShowToSuggestions(true);
        setToSuggestionIndex(-1);
    };

    const handleFromSuggestionMouseEnter = (index) => {
        setFromSuggestionIndex(index);
    };

    const handleToSuggestionMouseEnter = (index) => {
        setToSuggestionIndex(index);
    };

    const handleFromSuggestionKeyDown = (e) => {
        if (showFromSuggestions && fromSuggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                setFromSuggestionIndex((prevIndex) => (prevIndex + 1) % fromSuggestions.length);
            } else if (e.key === 'ArrowUp') {
                setFromSuggestionIndex((prevIndex) => (prevIndex - 1 + fromSuggestions.length) % fromSuggestions.length);
            } else if (e.key === 'Enter' && fromSuggestionIndex !== -1) {
                selectFromSuggestion(fromSuggestions[fromSuggestionIndex]);
            }
        }
    };

    const handleToSuggestionKeyDown = (e) => {
        if (showToSuggestions && toSuggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                setToSuggestionIndex((prevIndex) => (prevIndex + 1) % toSuggestions.length);
            } else if (e.key === 'ArrowUp') {
                setToSuggestionIndex((prevIndex) => (prevIndex - 1 + toSuggestions.length) % toSuggestions.length);
            } else if (e.key === 'Enter' && toSuggestionIndex !== -1) {
                selectToSuggestion(toSuggestions[toSuggestionIndex]);
            }
        }
    };

    const toggleTravellersOptions = () => {
        setShowTravellersOptions(!showTravellersOptions);
    };

    const incrementAdult = () => {
        setAdultCount(adultCount + 1);
    };

    const decrementAdult = () => {
        if (adultCount > 1) {
            setAdultCount(adultCount - 1);
        }
    };

    const incrementChild = () => {
        setChildCount(childCount + 1);
    };

    const decrementChild = () => {
        if (childCount > 0) {
            setChildCount(childCount - 1);
        }
    };

    const applyTravellers = () => {
        const formattedTravellers = `<span class="math-inline">\{adultCount\} Adult</span>{adultCount > 1 ? 's' : ''}, <span class="math-inline">\{childCount\} Child</span>{childCount > 0 ? 'ren' : ''}, ${cabinClass}`;
        setTravellers(formattedTravellers.replace(/, 0 Child(?:ren)?, /, ', ').replace(/,  $/, ''));
        setShowTravellersOptions(false);
    };

    const handleCabinClassChange = (e) => {
        setCabinClass(e.target.value);
    }; 
    
    return (
        <div className="bg-[#002951] text-white font-sans relative">
            <nav className="bg-[#002951] py-4 px-6 xl:px-8 flex items-center justify-between">
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
            </nav>

            <div className="py-8 md:py-12 px-6 xl:px-8">
                <div className="flex space-x-4 mb-6 md:mb-8">
                    <button
                        className={`flex items-center bg-[#0057FF] text-white py-2.5 px-5 rounded-full text-sm md:text-base font-semibold focus:outline-none ${active === "Flights" ? "bg-[#0057FF]" : "hover:bg-[#0043CC]"}`}
                        onClick={() => setActive("Flights")}
                    >
                        <FontAwesomeIcon icon={faPlane} className="mr-2" /> <span className="ml-2">Flights</span>
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
                            <div className="relative flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="from" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">From</label>
                                <input
                                    type="text"
                                    id="from"
                                    className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                    value={from}
                                    onChange={handleFromInputChange}
                                    placeholder="Country, city or airport"
                                    ref={fromInputRef}
                                    onFocus={handleFromFocus}
                                />
                                {showFromSuggestions && fromSuggestions.length > 0 && (
                                    <div className="absolute left-0 right-0 bg-white shadow-md rounded-md mt-1 z-10" style={{ border: '1px solid #ccc', marginTop: '2px' }}>
                                        {fromSuggestions.map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                                                onClick={() => selectFromSuggestion(suggestion)}
                                            >
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-400" />
                                                <span>{suggestion.name}</span>
                                                <span className="ml-1 text-gray-500 text-xs">({suggestion.code})</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button className="px-3 focus:outline-none" onClick={handleSwap}>
                                &#8644;
                            </button>
                            <div className="relative flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="to" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">To</label>
                                <input
                                    type="text"
                                    id="to"
                                    className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                    value={to}
                                    onChange={handleToInputChange}
                                    placeholder="Country, city or airport"
                                    ref={toInputRef}
                                    onFocus={handleToFocus}
                                />
                                {showToSuggestions && toSuggestions.length > 0 && (
                                    <div className="absolute left-0 right-0 bg-white shadow-md rounded-md mt-1 z-10" style={{ border: '1px solid #ccc', marginTop: '2px' }}>
                                        {toSuggestions.map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                                                onClick={() => selectToSuggestion(suggestion)}
                                            >
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-400" />
                                                <span>{suggestion.name}</span>
                                                <span className="ml-1 text-gray-500 text-xs">({suggestion.code})</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="departDate" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">Depart</label>
                                <DatePicker
                                    id="departDate"
                                    selected={departDate}
                                    onChange={(date) => setDepartDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                    ref={departInputRef}
                                />
                            </div>
                            <div className="flex-1 bg-white text-black rounded-lg p-4">
                                <label htmlFor="returnDate" className="block text-xs md:text-sm font-semibold text-gray-600 mb-1">Return</label>
                                <DatePicker
                                    id="returnDate"
                                    selected={returnDate}
                                    onChange={(date) => setReturnDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500"
                                    ref={returnInputRef}
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

                {active === "Hotels" && (
                    <div className="text-center py-10">
                        <h2>Search Hotels</h2>
                        {/* Add hotel search input fields and logic here */}
                    </div>
                )}

                {active === "Car hire" && (
                    <div className="text-center py-10">
                        <h2>Search Car Hire</h2>
                        {/* Add car hire search input fields and logic here */}
                    </div>
                )}
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
    );
};

export default SkyscannerNavbar;