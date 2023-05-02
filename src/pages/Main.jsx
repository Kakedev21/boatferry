import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1661632427594-40981a15699a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMGZlcnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Beach"
            />
            <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white">
                Welcome to Paradise
              </h2>
              <p className="text-sm text-white">
                Book a boat to take you to your dream beach today
              </p>
              {/* <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                Book Now
              </button> */}
            </div>
          </div>
        </div>
      </main>

      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Ready to book your dream vacation?
          </h2>
          <p className="text-lg text-white mb-4">
            Sign up now and receive exclusive discounts and offers!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
