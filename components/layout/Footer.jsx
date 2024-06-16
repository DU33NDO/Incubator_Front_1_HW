import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-lg font-bold">Blog Website</span>
          </div>
          <div className="text-sm text-gray-400">
            &copy; 2024 Blog Website. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              // prefetch={true}
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              // prefetch={true}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
