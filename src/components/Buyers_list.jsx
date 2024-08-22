import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import bgimage from "../../public/farmer-bg.png";
import Card from "./Card";

// Define page transition variants
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};

// Define text animation variants

const Buyers_list = () => {
  return (
    <>
      <motion.div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="bg-cover bg-center bg-fixed min-h-screen w-full flex flex-col"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
        </motion.div>

        

        

        <motion.div
          className="flex-grow px-4 py-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Buyers_list;
