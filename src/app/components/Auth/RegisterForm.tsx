import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';


const RegisterForm: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-6 shadow-md rounded-md w-96 bg-purple-400">
      <h5 className="text-xl mb-2">Create an account</h5>
      <p className="text-sm mb-4">
        Already have an account? <a href="/login" className="text-blue-500">Log in</a>
      </p>
      <button className="w-full mb-2 p-2 bg-blue-600 text-white flex items-center justify-center">
        <FacebookIcon className="mr-2" /> Continue with Facebook
      </button>
      <button className="w-full mb-2 p-2 bg-red-600 text-white flex items-center justify-center">
        <GoogleIcon className="mr-2" /> Continue with Google
      </button>
      <div className="w-full my-4 border-t text-center">Or</div>
      <label className="w-full mb-1 text-left">Email</label>
      <input type="email" placeholder="Your email" className="w-full mb-2 p-2 border rounded-xl" />
      <label className="w-full mb-1 text-left">Password</label>
      <input type="password" placeholder="Your password" className="w-full mb-2 p-2 border rounded-xl" />
      <label className="w-full mb-1 text-left">Confirm Password</label>
      <input type="password" placeholder="Confirm password" className="w-full mb-2 p-2 border rounded-xl" />
      <button 
        className="w-full p-2 bg-purple-300 mt-6 text-black" 
        onClick={() => router.push('/login')}
      >
        Create an account
      </button>
    </div>
  );
};

export default RegisterForm;