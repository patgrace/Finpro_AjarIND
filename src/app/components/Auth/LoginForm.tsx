import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';


const LoginForm: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-6 shadow-md rounded-md w-96 bg-purple-400">
      <h5 className="text-2xl m-4">LOGIN</h5>
      <label className="w-full mb-1 text-left">Email</label>
      <input type="email" placeholder="Your email" className="w-full mb-2 p-2 border rounded-xl" />
      <label className="w-full mb-1 text-left">Password</label>
      <input type="password" placeholder="Your password" className="w-full mb-2 p-2 border rounded-xl" />
      <button 
        className="w-full p-2 bg-purple-300 mt-6 text-black font-semibold rounded-lg hover:bg-purple-500 transition duration-300" 
        onClick={() => router.push('/beranda')}>
        LOGIN
      </button>
      <button 
        className="w-full p-2 bg-transparent mt-4 text-black font-semibold underline hover:text-purple-700 transition duration-300" 
        onClick={() => router.push('/forgot-password')}>
        Forgot Password?
      </button>
    </div>
  );
};

export default LoginForm;