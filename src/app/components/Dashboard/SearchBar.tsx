import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 p-3 rounded-md">
      <input
        type="text"
        placeholder="Search your course here..."
        className="flex-1 bg-transparent outline-none text-gray-700"
      />
      <button className="ml-3 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;