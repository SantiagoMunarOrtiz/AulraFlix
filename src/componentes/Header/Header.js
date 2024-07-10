import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">Aluraflix</div>
        <nav className="space-x-4">
          <button className="text-gray-600 hover:text-gray-800"></button>
          <button className="text-gray-600 hover:text-gray-800">About</button>
          <button className="text-gray-600 hover:text-gray-800">Services</button>
          <button className="text-gray-600 hover:text-gray-800">TrabajoAlura</button>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
