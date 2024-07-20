import React from 'react';
import { FcReading } from "react-icons/fc";


const StudyFeature = () => {
  return (
    <div className="flex items-center mb-5">
       <span className="mr-3 text-gray-700 flex items-center">
         <FcReading />
          <span className="font-bold">Study Feature</span>
        </span>
      <select className="bg-gray-100 p-2 rounded-md">
        <option>Self Study</option>
        <option>Group Study</option>
        <option>Live Tutoring</option>
      </select>
    </div>
  );
};

export default StudyFeature;