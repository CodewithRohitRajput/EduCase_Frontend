import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-end justify-center p-4  ">
      <div className="text-center mb-10 ">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to <span className="text-purple-600">PopX</span>
        </h1>

        {/* Placeholder Text */}
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
            <Link to='/signup'>
          <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition">
            Create Account
          </button>
            </Link>
         <Link to='/login' >
         <button className="w-full mt-2 bg-purple-200 text-purple-800 font-semibold py-2 px-4 rounded hover:bg-purple-300 transition">
            Already Registered? Login
          </button>
         </Link> 
        </div>
      </div>
    </div>
  );
};

export default Welcome;