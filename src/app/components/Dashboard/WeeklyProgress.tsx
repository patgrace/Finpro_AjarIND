import React from 'react';

const WeeklyProgress = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md m-4">
      <h2 className="text-lg font-bold mb-3">Weekly Progress</h2>
      <p className="text-gray-600 mb-5">Start from Jul 15-21, 2024</p>
      <div className="flex items-center justify-center mb-3">
        <div className="relative">
          <svg className="w-24 h-24" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            />
            <path
              className="text-green-500"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeDasharray="75, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">50%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600">Tasks Completed</p>
    </div>
  );
};

export default WeeklyProgress;