import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Use the correct path to the image in the public folder

const Contract = () => {
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100vw" },
  };

  return (
    <>
      <motion.div
      style={{ backgroundImage: "url('/barrenLand.jpg')" }}
      className="bg-cover bg-center min-h-screen "
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
        className="mb-6"
      >
        <Navbar />
      </motion.div>
      
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gray-300 py-6 px-4">
          CONTRACT FARMING AGREEMENT
        </h1>

        <form className="space-y-6 p-4 sm:p-6 md:p-8">
          {/* Agreement sections */}
          {[
            { title: "Scope", content: "The Producer agrees to cultivate [Type of Crop/Product] on [Total Area of Land] located at [Farm Address], and the Contractor agrees to purchase the entire production. The Producer must adhere to cultivation practices specified by the Contractor." },
            { title: "Quality and Standards", content: "The Contractor may provide technical guidance and necessary inputs. The Producer must meet the quality standards set by the Contractor." },
            { title: "Price and Payment", content: "The agreed price is [Price per Unit]. Payment will be made within [Number of Days] days after delivery. Any deductions or penalties will be communicated in advance." },
            { title: "Delivery", content: "The Producer will deliver the crop to [Delivery Location] by [Delivery Date]. The Contractor is responsible for transportation costs unless otherwise agreed." },
            { title: "Obligations", content: "The Contractor will provide necessary inputs, and the Producer will use them exclusively for the contracted crop. The Producer shall not sell the crop to any other buyer without the Contractor's consent." },
            { title: "Force Majeure", content: "Neither party is liable for failures due to unforeseen events beyond their control." },
            { title: "Termination", content: "Either party may terminate the Agreement with [Number of Days] notice, provided obligations are fulfilled. Immediate termination applies in cases of breach." },
            { title: "Dispute Resolution", content: "Disputes will be resolved through amicable negotiations or [Arbitration/Mediation] under [Jurisdiction] law." },
            { title: "Governing Law", content: "This Agreement is governed by the laws of [State/Country]." },
            { title: "Intervention of 3rd party", content: "This Agreement is governed by the laws of [State/Country] and I [Farmer name] make sure that [Gram Panchayat] is the only party that is involved in this." },
          ].map((section, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-md">
              <h2 className="font-semibold text-lg mb-2">{section.title}:</h2>
              <p className="text-sm sm:text-base">{section.content}</p>
            </div>
          ))}

          {/* Signatures section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Signatures:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Contractor", "Farmer", "Date"].map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">{field}:</label>
                  <input
                    type={field === "Date" ? "date" : "text"}
                    className="w-full border rounded p-2 text-sm"
                    placeholder={field === "Date" ? "YYYY-MM-DD" : `Enter ${field}'s name`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
            >
              Print Agreement
            </button>
          </div>
        </form>
      </div>
    </motion.div>
    </>
  );
};

export default Contract;
