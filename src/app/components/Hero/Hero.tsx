import React from 'react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-400 p-20 text-white ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bimbel Online & Offline Terbesar, Terlengkap, dan Terbukti di Indonesia
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Diskon spesial untukmu dengan isi nomor HP sekarang
        </p>
        <div className="flex justify-center items-center">
          <input 
            type="text" 
            placeholder="+62" 
            className="p-2 rounded-l-md border-none focus:outline-none text-gray-800"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-r-md">
            Dapatkan Diskon
          </button>
        </div>
      </div>
    </div>
  )
}