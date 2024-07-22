import React from 'react';
import Image from 'next/image';
import { FaMicrophone, FaVideo, FaPhoneSlash, FaUsers, FaEllipsisV } from 'react-icons/fa';

const participants = [
  { name: 'Alex', image: '/images/people.png' },
  { name: 'Lucas', image: '/images/people.png' },
  { name: 'Rendra', image: '/images/people2.png' },
  { name: 'Devi', image: '/images/people2.png' },
  { name: 'Clara', image: '/images/people2.png' },
  { name: 'Elyssa', image: '/images/people2.png' },
  { name: 'Martin', image: '/images/people2.png' },
  { name: 'Caroline', image: '/images/people.png' },
];

export default function Participants() {
  return (
    <div>
    <div className="grid grid-cols-4 gap-4">
      {participants.map((participant, index) => (
        <div key={index} className="text-center">
          <Image src={participant.image} alt={participant.name} width={200} height={200} className="w-full  mx-auto" />
          <p>{participant.name}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center mt-4">
      <div className="flex space-x-4 mt-12">
      <button className="p-2 bg-gray-200 rounded-full">
            <FaEllipsisV size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaMicrophone size={24} />
          </button>
          <button className="p-2 bg-red-400 rounded-full">
            <FaPhoneSlash size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaVideo size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaUsers size={24} />
          </button>
          
      </div>
    </div>
  </div>
  );
}