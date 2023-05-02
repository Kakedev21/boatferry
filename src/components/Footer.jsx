import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="text-gray-400">
          <h3 className="text-xl font-bold mb-2">Beach Booking</h3>
          <p className="text-sm">
            Book your dream beach vacation today with Beach Booking.
          </p>
        </div>
        <div className="text-gray-400">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-sm">Email: beachbooking@gmail.com</p>
          <p className="text-sm">Phone: +639203726395</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
