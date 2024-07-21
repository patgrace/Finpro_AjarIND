/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { name: 'Beranda', href: '/beranda' },

    { name: 'Learning Center', href: '/learningcenter' },

    { name: 'TUTI', href: '/tutoring-assistant' },
    { name: 'Mission', href: '/mission' },
    { name: 'Notification', href: '/notification' },

    { name: 'Settings', href: '/settings' },
    { name: 'Logout', href: '/' },
  ];


  return (
    <div className="w-64 bg-purple-300 border-r border-gray-200 p-5 h-100%">

      <div className="text-center mb-5">
        <img src="/images/profil.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-3" />
        <h2 className="text-lg font-bold text-gray-800">Patricia Grace</h2>
      </div>
      <nav>

        <ul className="list-none m-4 p-4 text-black">
          {menuItems.map((item) => (
            <li key={item.name} className="m-2 p-2 rounded-3xl hover:bg-purple-400 cursor-pointer">
              <Link href={item.href}>
              {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};


export default Sidebar;