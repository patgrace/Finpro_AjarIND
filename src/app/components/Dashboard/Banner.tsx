import React from 'react';
import Image from 'next/image';
 // Ganti dengan path gambar yang sesuai

const Banner = () => {
  return (
    <div className="bg-purple-600 text-white px-6 rounded-md flex items-center justify-between m-4">
      <div className="flex flex-col justify-between h-full">
        <div className="mt-12 mr-6">
          <h1 className="text-xl font-bold mt-0">AjariND, e-Learning Terbesar dan Terlengkap di Indonesia</h1>
          <p className="mt-2 mb-10">Diskon spesial untukmu dengan isi nomor HP sekarang!</p>
        </div>
        <div className="mt-3 mb-8 mr-5 flex items-center bg-white text-purple-600 px-4 py-2 rounded-md">
          <span>+82</span>
          <input type="text" className="ml-2 bg-transparent border-none outline-none" placeholder="Nomor HP" />
          <button className="ml-2 ">
           
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V14a1 1 0 11-2 0V6.586L6.707 8.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.586z" clipRule="evenodd" />

          </button>
        </div>
      </div>
      <div className="ml-5 m-6">
        <Image src="/images/banner.png" alt="Banner Image" width={350} height={300}/>
      </div>
    </div>
  );
};

export default Banner;