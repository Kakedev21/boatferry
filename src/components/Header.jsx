import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Beach Booking</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
