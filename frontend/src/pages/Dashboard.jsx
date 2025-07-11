import axios from "axios";
import { useEffect, useState } from "react";
import AddTPODetails from "./AddTPODetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchTPO from "./SearchTPO";

const Dashboard = () => {
  const [SearchModel, setSearchModel] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tpo/getTPO");
      setData(res.data.message);
    } catch (error) {
      console.log("Error in getData frontend Dashboard");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const totalPages = Math.ceil(data.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = data.slice(startIndex, startIndex + entriesPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
          Dashboard
        </h2>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Left Buttons: Add & Search */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowModel(true)}
              className="bg-purple-300 text-black py-2 px-6 rounded-full font-semibold shadow hover:bg-purple-400 transition"
            >
              Add TPO Details
            </button>

            <button
              onClick={() => setSearchModel(true)}
              className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search
            </button>
          </div>

          <div>
            <button
              onClick={async () => await getData()}
              className="bg-gray-500 text-white py-2 px-6 rounded-full font-semibold shadow hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </div>

        <SearchTPO
          isOpen={SearchModel}
          onClose={() => setSearchModel(false)}
          onSearchResult={(result) => {
            setData(result);
          }}
        />

        <AddTPODetails isOpen={showModel} onClose={() => setShowModel(false)}  onTPOAdded={(newTPO) => {
          setData((prev) => [...prev, newTPO]);
        }}  />

        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-gray-600">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">College</th>
                <th className="px-4 py-2 text-left">Contact No</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry) => (
                <tr key={entry.id} className="border-t">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.college}</td>
                  <td className="px-4 py-2">{entry.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={goToPrev}
            disabled={currentPage === 1}
            className="bg-purple-600 text-white px-4 py-1.5 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="bg-purple-600 text-white px-4 py-1.5 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
