// TopBar.jsx

import React from 'react';
import { FaHotel, FaCar, FaGlobeAmericas } from 'react-icons/fa'; // Import icons

const TopBar = () => {
    return (
        <div className="py-6 mt-8 mb-8">
            <div className="container mx-auto flex justify-center gap-4 flex-wrap">
                <button className="bg-[#001533] text-white border-none py-3 px-6 rounded-lg text-base cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[160px] justify-center">
                    <FaHotel className="text-lg" /> Hotels
                </button>
                <button className="bg-[#001533] text-white border-none py-3 px-6 rounded-lg text-base cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[160px] justify-center">
                    <FaCar className="text-lg" /> Car hire
                </button>
                <button className="bg-[#001533] text-white border-none py-3 px-6 rounded-lg text-base cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[160px] justify-center">
                    <FaGlobeAmericas className="text-lg" /> Explore everywhere
                </button>
            </div>
        </div>
    );
};

export default TopBar;