// components/layout/Navbar.jsx
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="text-white py-5 px-4 flex-col md:flex md:justify-between md:px-40 md:gap-3 ">
          <h2 className="text-3xl font-bold">Blog Website</h2>
          <div className="flex flex-col md:flex-row md:gap-8 mt-4 md:mt-0">
            <Link href="/">
              <p className="text-lg cursor-pointer">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-lg cursor-pointer">About</p>
            </Link>
            <p className="text-lg cursor-pointer">Categories</p>
            <p className="text-lg cursor-pointer">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
