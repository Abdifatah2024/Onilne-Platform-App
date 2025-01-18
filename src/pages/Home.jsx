import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="bg-[rgb(37,37,40)] text-white">
    <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Welcome to <span className="text-orange-500">Tusmo College</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Unlock your potential with our advanced learning platform. Get ready to start your journey!
        </p>
        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <a
            href="#login"
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-600 focus:outline-none"
          >
             <Link to="/Login">
             Login
             </Link>
           
          </a>
          <a
            href="#signup"
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-md shadow-md hover:bg-gray-600 focus:outline-none"
          >
            <Link to="/Register">
            Register
            </Link> 
           
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src='images/dev.jpg'
          alt="Hero Illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
 
  )
}

export default Home