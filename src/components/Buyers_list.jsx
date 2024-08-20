import React from "react";
import Navbar from "./Navbar";
import bgimage from "../../public/farmer-bg.png";
import Card from "./Card";

const Buyers_list = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="bg-cover bg-center bg-fixed min-h-screen w-full flex flex-col"
      >
        <Navbar />
        <div className="flex-grow">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Buyers_list;
