// src/components/TopHeader.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGlobe } from "@fortawesome/free-solid-svg-icons";

const TopHeader = ({ onLoginClick }) => {
  return (
    <div className="bg-[#002951] text-white px-6 xl:px-8 py-3 flex items-center justify-between">
      <div className="text-2xl font-semibold">Skyscanner</div>
      <div className="flex items-center space-x-4">
        <span className="text-sm cursor-pointer">Help</span>

        <div className="text-sm border border-white rounded px-2 py-1 flex items-center space-x-1">
          <FontAwesomeIcon icon={faGlobe} className="mr-1" />
          <span>English (UK)</span>
          <span>|</span>
          <span>🇵🇰 Pakistan</span>
          <span>₨ PKR</span>
        </div>

        <FontAwesomeIcon icon={faHeart} className="text-white text-lg cursor-pointer" />

        <button
          onClick={onLoginClick}
          className="bg-white text-[#002951] px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-200"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
