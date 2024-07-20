import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";


const LevelSelector = () => {
  return (
    <div className="flex items-center mb-5">
      <span className="mr-3 text-gray-700 flex items-center">
        <FaGraduationCap className="w-5 h-5 mr-2" />
          <span className="font-bold">Select level</span>
        </span>
      <select className="bg-gray-100 p-2 rounded-md">
        <option>SMA - Kelas 12</option>
        <option>SMA - Kelas 11</option>
        <option>SMA - Kelas 10</option>
        <option>SMP - Kelas 9</option>
        <option>SMP - Kelas 8</option>
        <option>SMP - Kelas 7</option>
      </select>
    </div>
  );
};

export default LevelSelector;