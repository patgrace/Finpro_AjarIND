/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-5">
      <div className="text-center mb-5">
        <img src="/images/profil.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-3" />
        <h2 className="text-lg font-bold text-gray-800">Patricia Grace</h2>
      </div>
      <nav>
        <ul className="list-none m-4 p-4 text-gray-600 hover:text-black cursor-pointer">
          <li className="m-2">Beranda</li>
          <li className="m-2">Learning Center</li>
          <li className="m-2">Tutoring Assistant</li>
          <li className="m-2">Mission</li>
          <li className="m-2">Notification</li>
          <li className="m-2">Settings</li>
          <li className="m-2">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;