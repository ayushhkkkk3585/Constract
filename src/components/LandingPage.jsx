import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Features from "./Features";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/aesthetic-farmer.jpg')" }}
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
          <motion.div
            className="text-center p-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Empowering Farmers, Ensuring Market Stability
            </motion.h1>
            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join our platform to secure stable markets for your crops and
              reliable produce for your business.
            </motion.p>
            <div className="mt-8">
              <Link to="/potential-buyers">
                <motion.button
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full hover:bg-green-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Join as a Farmer
                </motion.button>
              </Link>
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 ml-4 mt-4 sm:mt-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Join as a Buyer
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <Features />
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 p-4">
        {/* Card 1 */}
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-white rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/aejaz-memon-TW59tcFYKLU-unsplash.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-white rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/shruti-singh-dab-NdsXqmQ-unsplash.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-white rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/shruti-singh-ilp4a4XCFUU-unsplash.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
