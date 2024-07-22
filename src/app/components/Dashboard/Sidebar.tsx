/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { RiBookReadLine, RiRobot2Line, RiTeamLine, RiNotification2Line, RiSettings4Line } from "react-icons/ri";

const Sidebar = () => {
  const menuItems = [
    { name: 'Beranda', href: '/beranda', icon: <FaHome /> },
    { name: 'Learning Center', href: '/learningcenter', icon: <RiBookReadLine/>,},
    { name: 'TUTI', href: '/tuti', icon: <RiRobot2Line/>},
    { name: 'Study Groups', href: '/study Groups', icon: <RiTeamLine/>},
    { name: 'Notification', href: '/notification', icon: <RiNotification2Line/>},
    { name: 'Settings', href: '/settings', icon: <RiSettings4Line/>},
    { name: 'Logout', href: '/', icon: <FaSignOutAlt />, className: 'text-red-500' },
  ];


  return (
    <div className="flex h-screen">
      <div className="w-64 bg-purple-300 border-r border-gray-200 ">

        <div className="text-center mb-5">
          <img src="/images/profil.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-3" />
          <h2 className="text-lg font-bold text-gray-800">Patricia Grace</h2>
        </div>
        <nav>
        <ul className="list-none m-4 p-4 text-black">
        {menuItems.map((item) => (
          <li key={item.name} className={`m-2 p-2 rounded-3xl hover:bg-purple-400 cursor-pointer ${item.className || ''}`}>
            <Link href={item.href}>
              {item.icon && <span className="inline-block mr-2">{item.icon}</span>}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
        </nav>
      </div>
    </div>
  );
};


export default Sidebar;