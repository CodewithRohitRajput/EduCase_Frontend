import React from 'react';
import { Link } from 'react-router-dom';
const CreateAccount = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create your <br />
          <span className="text-purple-600">PopX</span> account
        </h1>

        {/* Form (Frontend Only) */}
        <div className="mt-6 space-y-6">
          {/* Full Name Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-gray-500 text-sm">
              <span className="text-purple-600  bg-transparent ">Full Name <span className='text-red-500'>*</span></span>
            </label>
            <input
              type="text"
              placeholder="Mary Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-gray-500 text-sm">
              <span className="text-purple-600">Phone number<span className='text-red-500'>*</span></span>
            </label>
            <input
              type="tel"
              placeholder="Mary Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Email Address Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-gray-500 text-sm">
             <span className="text-purple-600"> Email address<span className='text-red-500'>*</span></span>
            </label>
            <input
              type="email"
              placeholder="Mary Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-gray-500 text-sm">
              <span className="text-purple-600">Password<span className='text-red-500'>*</span></span>
            </label>
            <input
              type="password"
              placeholder="Mary Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Company Name Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-gray-500 text-sm">
              Company name
            </label>
            <input
              type="text"
              placeholder="Mary Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Are you an Agency? Radio Buttons */}
          <div className="mt-4">
            <p className="text-gray-600 mb-2">
              Are you an Agency?<span className='text-red-500'>*</span>
            </p>
            <div className="flex justify-start space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="text-purple-600 focus:ring-purple-600"
                  defaultChecked
                />
                <span className="ml-2 text-gray-600">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="text-purple-600 focus:ring-purple-600"
                />
                <span className="ml-2 text-gray-600">No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
       <Link to='/profile' >
       
          <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition mt-4">
            Create Account
          </button>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;