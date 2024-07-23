/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';
import { PiCirclesFourFill } from "react-icons/pi";
import { RiBookReadLine, RiRobot2Line, RiTeamLine, RiSettings4Line } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    { name: 'Beranda', href: '/beranda', icon: <PiCirclesFourFill /> },
    { name: 'Learning Center', href: '/learningcenter', icon: <RiBookReadLine/>,},
    { name: 'TUTI', href: '/tuti', icon: <RiRobot2Line/>},
    { name: 'Study Groups', href: '/studygroups', icon: <RiTeamLine/>},
    { name: 'Settings', href: '/settings', icon: <RiSettings4Line/>},
    { name: 'Logout', href: '/', icon: <FaSignOutAlt />, className: 'text-red-500' },
  ];

  return (
    <div className="">
      <div className="w-64 bg-purple-300 border-r border-gray-200 p-5 min-h-screen flex flex-col">
      <div className="text-center my-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className='m-2'>
              <h2 className="text-lg font-bold text-gray-800">Ice Cream</h2>
              <p className="text-gray-600">icecream@gmail.com</p>
            </div>
            <MdOutlineKeyboardDoubleArrowLeft className="text-gray-600 ml-2" />
          </div>
        </div>
        <nav className="flex-grow">
          <ul className="list-none m-4 py-4 text-black">
            {menuItems.map((item) => (
              <li key={item.name} className={`m-2 p-2 rounded-3xl hover:bg-purple-4000 cursor-pointer ${item.className || ''}`}>
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