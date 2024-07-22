import React from 'react';
import Image
 from 'next/image';
export default function Setting() {
  return (
    <div className="m-6 p-6 font-sans">
      <div className="flex items-center mb-6">
        <Image src="/images/profil.jpg" alt="Profile" 
        width={100} 
        height={100} 
        className="w-20 h-20 rounded-full mr-6" />
        <div className="flex-grow">
          <h2 className="text-xl font-semibold">IceCream</h2>
          <p className="text-gray-600">icecreamm@gmail.com</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Edit</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="mb-2">First Name</label>
          <input type="text" placeholder="Your First Name" className="p-2 border bg-gray-100 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Surname</label>
          <input type="text" placeholder="Your Surname" className="p-2 border bg-gray-100 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Gender</label>
          <select className="p-2 border bg-gray-100 rounded">
            <option>Women</option>
            <option>Men</option>    
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Country</label>
          <input type="text" placeholder="Your Country" className="p-2 border bg-gray-100 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Language</label>
          <select className="p-2 border bg-gray-100 rounded">
            <option>Your Language</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Time Zone</label>
          <input type="text" placeholder="Your Time Zone" className="p-2 border bg-gray-100 rounded" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">My email Address</h3>
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-4">📧</span>
          <div>
            <p>davina.nayla@gmail.com</p>
            <p className="text-gray-600 text-sm">1 month ago</p>
          </div>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">+Add Email Address</button>
      </div>
    </div>
  );
}