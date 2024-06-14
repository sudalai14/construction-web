import React from 'react';
import logo from '../assets/logo.png'; // Ensure you have the logo image in the specified path

const QuickLinks = () => {
  return (
    <div id="quicklinks" className="py-16 bg-white flex flex-col items-center px-8">
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-3xl font-bold text-black">Quick Links</h2>
        <p className="mt-4 text-gray-600">
          Find what you need quickly through our quick links...
        </p>
        <ul className="mt-4 text-gray-600">
          <li className="mt-2"><a href="#aboutus" className="text-orange-500 hover:text-orange-600">About Us</a></li>
          <li className="mt-2"><a href="#services" className="text-orange-500 hover:text-orange-600">Services</a></li>
          <li className="mt-2"><a href="#projects" className="text-orange-500 hover:text-orange-600">Projects</a></li>
          <li className="mt-2"><a href="#contactus" className="text-orange-500 hover:text-orange-600">Contact Us</a></li>
        </ul>
        <div className="mt-8 text-gray-600">
          <h3 className="text-lg font-bold">CONTACT INFO:</h3>
          <p className="mt-2">Phone: 6382633116, 9159401853</p>
          <p className="mt-2">Email: markconstructions22@gmail.com</p>
          <p className="mt-2">
            Location: 
            <a href="https://maps.google.com" className="text-orange-500 hover:text-orange-600 ml-1">
              Company Location
            </a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center mt-8">
        <img src={logo} alt="Company Logo" className="w-32 mx-auto mb-2" />
        <h1 className="font-bold text-xl text-orange-500">MARK</h1>
        <p className="text-orange-500" style={{ fontSize: '0.8rem', margin: '0 auto' }}>Construction</p>
        <p className="text-black">A civil aspirants touch</p>
      </div>
    </div>
  );
};

export default QuickLinks;
