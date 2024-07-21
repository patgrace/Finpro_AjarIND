/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ProgressCardProps {
  image: string;
  title: string;
  category: string;
  progress: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ image, title, category, progress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-blue-500 font-semibold">{category}</span>
        <span className="text-xs text-gray-500">By Ajarin</span>
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="text-xs text-gray-500">{progress}% completed</span>
    </div>
  );
};

export default ProgressCard;