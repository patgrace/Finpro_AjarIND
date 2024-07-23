import React from 'react';
import { FaCamera } from "react-icons/fa6";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-purple-600 text-white px-6 py-2 shadow-md rounded-2xl mt-4 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-4">Bantu Kamu Jawab Soal dengan Tepat dan Real-Time!</h1>
        <p className="mb-6">Ayo, dapatkan jawaban yang mudah dipahami untukmu!</p>
        <div className="flex items-center bg-white p-3 rounded-2xl shadow-md w-full">
          <select className="bg-transparent text-black p-2 rounded-md mr-2">
            <option>SMA</option>
            <option>SMP</option>
          </select>
          <select className="text-black bg-transparent p-2 rounded-md mr-2">
            <option>Matematika</option>
            <option>Fisika</option>
            <option>Kimia</option>
            <option>Biologi</option>
          </select>
          <input
            type="text"
            placeholder="Ketik atau upload soal di sini"
            className="bg-transparent p-2 flex-grow outline-none"
          />
          <button className="bg-transparent p-2">
            <FaCamera className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="ml-10">
        <Image
          src="/images/vectortuti.png" 
          alt="Deskripsi Gambar"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;