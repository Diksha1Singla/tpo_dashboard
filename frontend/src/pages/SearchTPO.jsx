import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchTPO = ({ isOpen, onClose, onSearchResult }) => {
  if (!isOpen) return null;

  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      toast.error("Please enter a value to search");
      return;
    }

    try {
      const body = { [searchBy]: searchValue };
      const res = await axios.post("http://localhost:5000/tpo/searchTPO", body);
      toast.success("TPO Found ✅");
      onSearchResult(res.data.result); // Pass result to parent
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      toast.error(error.response?.data?.Error || "Search failed");
      console.error("Error in SearchTPO:", error.message);
      setTimeout(() => onClose(), 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4 text-purple-700">Search TPO</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Search By</label>
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="college">College</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Enter {searchBy}</label>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`Enter ${searchBy}`}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default SearchTPO;