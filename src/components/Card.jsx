import React, { useState } from "react";

const Card = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const cardData = [
    { name: "Rajesh Kumar", description: "Passionate farmer with expertise in sustainable agriculture.", rating: 4, tags: ["Rice", "Wheat"] },
    { name: "Priya Sharma", description: "Innovative farmer focused on high-yield organic farming.", rating: 5, tags: ["Rajma", "Onion"] },
    { name: "Amit Patel", description: "Experienced in traditional and modern farming techniques.", rating: 3, tags: ["Sugarcane", "Cotton"] },
    { name: "Neha Gupta", description: "Passionate about promoting sustainable and eco-friendly farming.", rating: 4, tags: ["Methi", "Cabbage"] },
    { name: "Aarav Singh", description: "Committed to improving the livelihood of small-scale farmers.", rating: 5, tags: ["Cauliflower", "Mango"] },
    { name: "Ayush Khalate", description: "Committed to improving the livelihood of small-scale farmers.", rating: 5, tags: ["Grapes", "Mango"] },
  ];

  const searchData = cardData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(searchData.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = searchData.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="block w-full px-10 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by name or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="card-list space-y-4 p-5 flex flex-col items-center">
        {currentUsers.map((user, index) => (
          <div
            key={index}
            className="card flex bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full sm:flex-row sm:w-3/4 md:w-2/3 lg:w-1/2"
          >
            <div className="card-image w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
              <img
                src="avataaa.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full mt-1 ml-1 sm:rounded-none sm:rounded-l-lg"
              />
            </div>

            <div className="card-content flex-grow p-6">
              <h3 className="name text-xl font-bold mb-2">{user.name}</h3>
              <p className="description text-gray-700 mb-4">{user.description}</p>
              <div className="rating text-yellow-500 mb-4">
                {[...Array(user.rating)].map((_, index) => (
                  <span key={index} className="star">&#9733;</span>
                ))}
              </div>
              <div className="tags">
                {user.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center space-x-4 my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-300`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Card;