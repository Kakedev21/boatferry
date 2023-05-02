import React, { useState } from "react";

function Register() {
  return (
    <div className="max-w-md mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mt-8 overflow-hidden">
        <div className="p-6 mr-2 bg-gray-100">
          <h2 className="text-center font-bold text-2xl mb-2">
            Create an Account
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
