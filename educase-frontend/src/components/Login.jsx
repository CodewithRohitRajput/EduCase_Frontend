import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
      <div className="text-center mt-10 w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800">
          Sign in to your <br />
          <span className="text-purple-600">PopX</span> account
        </h1>

        {/* Placeholder Text */}
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        {/* Form (Frontend Only) */}
        <div className="mt-6 space-y-6">
          {/* Email Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-purple-600 text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-purple-600 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Login Button */}
        <Link to='/profile' >
         <button
            className="w-full bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition mt-4 "
            >
            Login
          </button>
              </Link> 
        </div>
      </div>
    </div>
  );
};

export default Login;