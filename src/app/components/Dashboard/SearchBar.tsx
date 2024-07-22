import React from 'react';
import { RiNotificationBadgeLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className='flex'>
    <div className="flex items-center bg-gray-100 p-3 w-full rounded-md">
      <input
        type="text"
        placeholder="Search your course here..."
        className="flex-1 bg-transparent outline-none text-gray-700"
      />
      <button className="ml-3 text-gray-500">
      <RiSearchLine />
      </button>
    </div>
      <button className="ml-3 text-gray-500">
        <RiNotificationBadgeLine />
      </button>
    </div> 
  );
};

export default SearchBar;