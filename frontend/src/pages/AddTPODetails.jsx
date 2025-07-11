import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddTPOModal = ({ isOpen, onClose, onTPOAdded }) => {
  if (!isOpen) return null;

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    contact: ""
  })

  const handleChange = (e)=>{
    setFormData((prev)=>({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("FormData: ",FormData)
    try {
        const result = await axios.post("http://localhost:5000/tpo/addTPO", FormData)
        toast.success(result.data.message)
        onTPOAdded(FormData)
        setFormData({
        name: "",
        email: "",
        college: "",
        contact: ""
    });
        setTimeout(() => {
            onClose();
        }, 3500);
    } catch (error) {
        toast.error(error.response?.data?.error || "Something went wrong");
        console.log("Error in AddTPOData frontend Dashboard: ",error.message);
        setTimeout(() => {
            onClose();
        }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4 text-purple-700">
          Add TPO Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
          <input
            onChange={handleChange}
            name="name"
            value={FormData.name}
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            required
          />
          <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
          <input
            onChange={handleChange}
            name="email"
            value={FormData.email}
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <label htmlFor="college" className="block text-gray-600 mb-1">College</label>
          <input
            onChange={handleChange}
            name="college"
            value={FormData.college}
            type="text"
            placeholder="College"
            className="w-full border p-2 rounded"
            required
          />
          <label htmlFor="contact" className="block text-gray-600 mb-1">Contact</label>
          <input
            onChange={handleChange}
            name="contact"
            value={FormData.contact}
            type="tel"
            placeholder="Contact No"
            className="w-full border p-2 rounded"
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    <ToastContainer position="top-center" autoClose={2500} />
      
    </div>
  );
};

export default AddTPOModal;
