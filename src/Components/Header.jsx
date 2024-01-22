import React from 'react';

function Header() {
  return (
    <div className=" w-screen  items-center justify-between
	rounded-xl text-primary font-mono text-2xl bg-accent p-4 mb-10">
      <div className="flex items-center">
        <h1 className="text-white text-3xl font-bold">AD</h1>
        <span className="cursor-pointer text-gray-500 ml-2">Web Developer</span>
      </div>
      <nav className="flex">
        <ul className="flex space-x-4">
          <li className=" cursor-pointer hover:text-secondary transition duration-300">Home</li>
		      <li className=" cursor-pointer hover:text-secondary transition duration-300">Details</li>
          <li className="cursor-pointer hover:text-secondary transition duration-300">Resume</li>
          <li className="cursor-pointer hover:text-secondary transition duration-300">Projects</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
