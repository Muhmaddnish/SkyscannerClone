import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Faq2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const locales = [
        { code: "gb", name: "(GB) Cheap flights", url: "https://www.example.com/en-gb" },
        { code: "au", name: "(AU) Australia - Cheap flights", url: "https://www.example.com/en-au" },
        { code: "cn", name: "(CN) 中国 - 机票", url: "https://www.example.com/zh-cn" },
        { code: "in", name: "(IN) India - Flight tickets", url: "https://www.example.com/en-in" },
        { code: "jp", name: "(JP) 日本 - 航空券", url: "https://www.example.com/ja-jp" },
        { code: "mx", name: "(MX) México - vuelos", url: "https://www.example.com/es-mx" },
        { code: "ru", name: "(RU) Россия - авиабилеты", url: "https://www.example.com/ru-ru" },
        { code: "us", name: "(US) USA - flights", url: "https://www.example.com/en-us" },
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full border-b border-gray-300 pb-4"
            >
                <h2 className="text-2xl font-bold text-black">Our international sites</h2>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xl text-black transition-transform duration-300 transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mt-6">
                    {locales.map((locale) => (
                        <a
                            key={locale.code}
                            href={locale.url}
                            className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 hover:underline transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https://flagcdn.com/w20/${locale.code}.png`}
                                alt={`${locale.code} flag`}
                                className="w-5 h-4 object-cover"
                                loading="lazy"
                            />
                            <span>{locale.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Faq2;
