import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Card = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const cardData = [
    {
      name: "Rajesh Kumar",
      description:
        "Specializes in sourcing high-quality rice and wheat, ensuring premium produce.",
      rating: 4,
      tags: ["Rice", "Wheat"],
    },
    {
      name: "Priya Sharma",
      description:
        "Focuses on organic farming for high-yield rajma and onions, combining innovation with sustainability.",
      rating: 5,
      tags: ["Rajma", "Onion"],
    },
    {
      name: "Amit Patel",
      description:
        "Expertise in both traditional and modern farming techniques for sugarcane and cotton, offering diverse agricultural solutions.",
      rating: 3,
      tags: ["Sugarcane", "Cotton"],
    },
    {
      name: "Neha Gupta",
      description:
        "Advocates for sustainable farming practices with a focus on methi and cabbage, promoting eco-friendly agriculture.",
      rating: 4,
      tags: ["Methi", "Cabbage"],
    },
    {
      name: "Aarav Singh",
      description:
        "Enhances small-scale farming with a focus on cauliflower and mango, improving livelihoods through sustainable practices.",
      rating: 5,
      tags: ["Cauliflower", "Mango"],
    },
    {
      name: "Ayush Khalate",
      description:
        "Specializes in grapes and mangoes, dedicated to boosting small-scale farming and supporting farmers' growth.",
      rating: 5,
      tags: ["Grapes", "Mango"],
    },
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
  const generatePhoneNumber = () => {
    const firstDigit = Math.floor(Math.random() * 4) + 6; // Generates 6, 7, 8, or 9
    const restOfNumber = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
    const phoneNumber = `${firstDigit}${restOfNumber}`;
    return phoneNumber.replace(/(\d{5})(\d{5})/, "$1 $2");
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-5 px-4"
      >
        <h1 className="text-black underline font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Navigate through Potential Buyers
        </h1>
      </motion.div>
      <div className="container mx-auto my-5 px-4 py-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
        {currentUsers.map((user, index) => {
          const phoneNumber = generatePhoneNumber();

          return (
            <div
              key={index}
              className="card flex flex-col bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full sm:flex-row sm:w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/2"
            >
              <div className="card-image w-full h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0">
                <img
                  src="avataaa.png"
                  alt="Profile"
                  className="w-full h-full object-contain sm:rounded-none sm:rounded-l-lg"
                />
              </div>

              <div className="card-content flex-grow p-6">
                <h3 className="name text-xl font-bold mb-2">{user.name}</h3>
                <p className="description text-gray-700 mb-4">
                  {user.description}
                </p>
                <div className="rating text-yellow-500 mb-4">
                  {[...Array(user.rating)].map((_, index) => (
                    <span key={index} className="star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <div className="tags mb-4">
                  {user.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="call-now bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex-grow">
                    Call Now: {phoneNumber}
                  </button>
                  <Link to="/contract">
                    <button className="proceed-to-contract bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center flex-grow">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      Proceed to Contract
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination flex justify-center space-x-4 my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-300`}
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
