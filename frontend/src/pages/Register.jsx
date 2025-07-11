import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    college: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/register", formData);
      toast.success(res.data.message);
      setFormData({
        username: "",
        college: "",
        email: "",
        password: ""
      });
      navigate("/login")
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">Register</h2>


        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">College</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter college name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 mt-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
            <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default Register;
