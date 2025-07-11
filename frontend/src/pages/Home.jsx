import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token")
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl bg-white p-10 rounded-2xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
          Welcome to Suvidha Foundation
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Empowering students through opportunities, mentorship, and growth.
          Login or Register to explore internships, events, TPO features and
          more!
        </p>
{!token?
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white border border-purple-600 text-purple-700 hover:bg-purple-50 px-6 py-2 rounded-lg font-medium transition"
          >
            Register
          </Link>
        </div>:<>
          <Link
            to="/dashboard"
            className="bg-white border-t-4 border-r-2 border-l-4 border-b-2 border-purple-600 text-purple-700 hover:bg-purple-50 px-6 py-2 rounded-lg font-lg font-bold transition"
          >
            Explore TPO DashBoard
          </Link>
        </>}
      </div>
    </div>
  );
};

export default Home;

