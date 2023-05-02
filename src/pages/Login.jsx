import React, { useState } from "react";

function Login() {
  return (
    <main className="flex h-screen w-full items-center bg-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block font-medium text-white">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1 bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-4">New Customer?</h2>
            <p className="mb-4">
              Create an account with us and you'll be able to:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Check out faster</li>
              <li>Save multiple addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
            </ul>
            <div className="mt-6">
              <a
                href="/register"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Create an Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
