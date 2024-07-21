import React from 'react';
import Image from 'next/image';
 // Ganti dengan path gambar yang sesuai

const Banner = () => {
  return (
    <div className="bg-purple-400 text-white px-6 rounded-md flex items-center justify-between m-4">
      <div className="flex flex-col justify-between h-full">
        <div className="mt-12 mr-6">
          <h1 className="text-xl font-bold mt-0">AjariND, e-Learning Terbesar dan Terlengkap di Indonesia</h1>
          <p className="mt-2 mb-10">Diskon spesial untukmu dengan isi nomor HP sekarang!</p>
        </div>
        <button className="mb-6 bg-purple-600 text-white p-3  rounded-2xl w-1/2">
          Beli Promo
        </button>
      </div>
      <div className="ml-5 m-6">
        <Image src="/images/banner.png" alt="Banner Image" width={350} height={300}/>
      </div>
    </div>
  );
};

export default Banner;