import React, { useState } from 'react';

const Planner = () => {
    const [activeFilter, setActiveFilter] = useState('City');
    const [currentCarHirePage, setCurrentCarHirePage] = useState(0);
    const itemsPerPage = 9;

    const filters = ['City', 'Region', 'Airport', 'Country'];
    const allCarHireData = [
        'Best car hire in Beijing', 'Car hire in Bangkok', 'Car hire in Paris', 'Car hire in Singapore',
        'Car hire in Doha', 'Best car hire in Melbourne', 'Cheap car hire in London', 'Car hire in Lahore',
        'Tehran car hire', 'Another City Hire 1', 'Regional Car Rental 1', 'Airport Car Service 1',
        'Another City Hire 2', 'Regional Car Rental 2', 'Airport Car Service 2', 'Another City Hire 3',
        'Regional Car Rental 3', 'Airport Car Service 3', 'Page 2 - Item 1', 'Page 2 - Item 2', 'Page 2 - Item 3',
        'Page 2 - Item 4', 'Page 2 - Item 5', 'Page 2 - Item 6', 'Page 2 - Item 7', 'Page 2 - Item 8',
        'Page 2 - Item 9', 'Page 3 - Item 1', 'Page 3 - Item 2', 'Page 3 - Item 3', 'Page 3 - Item 4',
        'Page 3 - Item 5', 'Page 3 - Item 6', 'Page 3 - Item 7', 'Page 3 - Item 8', 'Page 3 - Item 9',
        'Page 4 - Item 1', 'Page 4 - Item 2', 'Page 4 - Item 3', 'Page 4 - Item 4', 'Page 4 - Item 5',
        'Page 4 - Item 6', 'Page 4 - Item 7', 'Page 4 - Item 8', 'Page 4 - Item 9', 'Page 5 - Item 1',
        'Page 5 - Item 2', 'Page 5 - Item 3', 'Page 5 - Item 4', 'Page 5 - Item 5', 'Page 5 - Item 6',
        'Page 5 - Item 7', 'Page 5 - Item 8', 'Page 5 - Item 9', 'Page 6 - Item 1', 'Page 6 - Item 2',
        'Page 6 - Item 3', 'Page 6 - Item 4', 'Page 6 - Item 5', 'Page 6 - Item 6', 'Page 6 - Item 7',
        'Page 6 - Item 8', 'Page 6 - Item 9', 'Page 7 - Item 1', 'Page 7 - Item 2', 'Page 7 - Item 3',
        'Page 7 - Item 4', 'Page 7 - Item 5', 'Page 7 - Item 6', 'Page 7 - Item 7', 'Page 7 - Item 8',
        'Page 7 - Item 9', 'Page 8 - Item 1', 'Page 8 - Item 2', 'Page 8 - Item 3', 'Page 8 - Item 4',
        'Page 8 - Item 5', 'Page 8 - Item 6', 'Page 8 - Item 7', 'Page 8 - Item 8', 'Page 8 - Item 9',
    ];

    const totalPages = Math.ceil(allCarHireData.length / itemsPerPage);
    const startIndex = currentCarHirePage * itemsPerPage;
    const currentItems = allCarHireData.slice(startIndex, startIndex + itemsPerPage);

    const goToPreviousPage = () => setCurrentCarHirePage(prev => Math.max(prev - 1, 0));
    const goToNextPage = () => setCurrentCarHirePage(prev => Math.min(prev + 1, totalPages - 1));
    const goToPage = (page) => setCurrentCarHirePage(page);

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Start planning your adventure</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition shadow-sm ${
                                activeFilter === filter
                                    ? 'bg-indigo-600 text-white border-indigo-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {currentItems.map(item => (
                        <a key={item} href="#" className="text-sm text-blue-600 hover:underline">
                            {item}
                        </a>
                    ))}
                </div>

                {allCarHireData.length > itemsPerPage && (
                    <div className="flex items-center justify-between">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentCarHirePage === 0}
                            className={`px-3 py-1.5 rounded-md border text-sm font-medium transition ${
                                currentCarHirePage === 0
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                            }`}
                        >
                            Previous
                        </button>

                        <div className="flex items-center gap-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        currentCarHirePage === index
                                            ? 'bg-indigo-600'
                                            : 'bg-gray-300 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNextPage}
                            disabled={currentCarHirePage === totalPages - 1}
                            className={`px-3 py-1.5 rounded-md border text-sm font-medium transition ${
                                currentCarHirePage === totalPages - 1
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Planner;
