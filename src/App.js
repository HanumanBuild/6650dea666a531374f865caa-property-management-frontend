import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Property Management</h1>
          <p className="text-xl mb-8">We offer 24/7 service to manage your properties efficiently.</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            />
            <button
              type="submit"
              className="p-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-700"
            >
              Contact Us
            </button>
          </form>
        </div>
      </header>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-700">Description of feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-700">Description of feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-700">Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;