import React from 'react';

interface MissionItemProps {
  title: string;
  date: string;
  completed: boolean;
}

const MissionItem: React.FC<MissionItemProps> = ({ title, date, completed }) => {
    return (
      <div className="flex items-center mb-3">
        <div className={`w-4 h-4 rounded-full border-2 ${completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
        <div className="ml-3">
          <h3 className={`text-sm font-semibold ${completed ? 'text-gray-700' : 'text-gray-500'}`}>{title}</h3>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
    );
  };
  
  export default MissionItem;