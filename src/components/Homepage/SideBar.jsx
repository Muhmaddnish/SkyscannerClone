// src/components/Sidebar.jsx
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlane,
    faHotel,
    faCar,
    faGlobe,
    faMapMarkerAlt,
    faQuestionCircle,
    faTimes, // Import the close icon
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarVariants = {
    open: {
        x: 0,
        transition: { duration: 0.2, ease: 'easeInOut' },
    },
    closed: {
        x: '100%',
        transition: { duration: 0.2, ease: 'easeInOut' },
    },
};

const Sidebar = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && event.target.closest('.sidebar-container') === null) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out sidebar-container"
                    variants={sidebarVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <div className="p-4 flex justify-end">
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                    </div>
                    <nav className="py-3">
                        <ul className="space-y-1">
                            <li>
                                <button
                                    onClick={() => console.log('Flights clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faPlane} className="mr-4 text-blue-500" />
                                    Flights
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => console.log('Hotels clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faHotel} className="mr-4 text-blue-500" />
                                    Hotels
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => console.log('Car hire clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faCar} className="mr-4 text-blue-500" />
                                    Car hire
                                </button>
                            </li>
                            <hr className="my-2 border-t border-gray-200" />
                            <li>
                                <button
                                    onClick={() => console.log('Regional settings clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 text-gray-500" />
                                    Regional settings
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => console.log('Explore everywhere clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faGlobe} className="mr-4 text-green-500" />
                                    Explore everywhere
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => console.log('Help clicked')}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 focus:outline-none w-full text-left"
                                >
                                    <FontAwesomeIcon icon={faQuestionCircle} className="mr-4 text-teal-500" />
                                    Help
                                </button>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;