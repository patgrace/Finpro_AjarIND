/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface SubjectCardProps {
  image: string;
  title: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-2">
        <img src={image} alt={title} className="w-12 h-12" />
      </div>
      <span className="text-gray-700">{title}</span>
    </div>
  );
};

export default SubjectCard;