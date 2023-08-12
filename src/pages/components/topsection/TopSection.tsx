import React from "react";

const TopSection = () => {
  return (
    <div
      className="flex w-full  bg-white rounded cursor-pointer "
      style={{
        border: "1px solid gray",
        borderRadius: 5,
        borderColor: "#d3d3d3",
      }}
    >
      <div
        className="w-1/4 items-center justify-center "
        style={{
          borderRight: "1px solid gray",
          borderColor: "#d3d3d3",
        }}
      >
        <div className="flex flex-col ">
          <h2 className=" flex items-center text-xs md:text-lg justify-center text-[#5a5e6b]">
            Organization Name
          </h2>
          <h4 className=" flex items-center text-xs md:text-base  justify-center">Bizplus</h4>
        </div>
      </div>
      <div
        className="w-2/4 flex items-center justify-center"
        style={{
          borderRight: "1px solid gray",
          borderColor: "#d3d3d3",
        }}
      >
        <div className="flex flex-col ">
          <h2 className=" flex items-center text-xs md:text-lg justify-center text-[#5a5e6b]">
            Organization Address
          </h2>
          <h4 className=" flex items-center text-xs md:text-base justify-center">Bizplus</h4>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-center ">
        <div className="flex flex-col ">
          <h2 className=" flex items-center justify-center text-[#5a5e6b] text-xs md:text-lg">Current Plan</h2>
          <h4 className=" flex items-center justify-center text-xs md:text-base ">Proffessional</h4>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
