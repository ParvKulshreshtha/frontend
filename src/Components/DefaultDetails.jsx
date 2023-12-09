import React from 'react';

import msgImg from "../assets/5625.jpg"

const DefaultDetails = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="relative w-48 h-48">
          <img src={msgImg} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-sm text-gray-600">
            Chat anywhere,, anytime
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultDetails;
