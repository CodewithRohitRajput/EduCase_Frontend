import React from 'react';
import pic from '../images/profile_pic.avif'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
      <div className="w-full max-w-sm ">
        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-800 mt-4">
          Account Settings
        </h1>

        {/* Profile Section */}
        <div className='bg-gradient-to-b from-gray-200 to bg-gray-100 rounded-md '>
        <div className="mt-6 pt-5 pl-2 flex items-center  ">
          {/* Profile Picture with Camera Icon */}
          <div className="relative">
            <img
              src={pic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📷</span>
            </div>
          </div>

          {/* Name and Email */}
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">Marry Doe</h2>
            <p className="text-gray-600">marry@gmail.com</p>
          </div>
        </div>

        {/* Placeholder Text */}
        <p className="text-gray-600 mt-4 text-sm pl-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed diam nonumy eirmod tempor invidunt ut labore et <br />
          dolore magna aliquyam erat, sed diam
        </p>
            
        </div>
     <hr class=" border-dotted border-gray-500 mt-2 " />
     <hr class=" border-dotted border-gray-500 mt-96 translate-y-7 " />

      </div>

    </div>
  );
};

export default Profile;