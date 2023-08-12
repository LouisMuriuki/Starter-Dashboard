import React from "react";
import { Link } from "react-router-dom";

const Invoices = () => {
  return (
    <div className="flex flex-col rounded w-full bg-white px-5">
      <div className="flex w-full items-center justify-between">
        <h3>Invoices</h3>
        <Link to="" className="cursor-pointer ">
          View All
        </Link>
      </div>
      <div>
        <hr className="w-[85%] my-2 px-6 border-t border-gray-100" />
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className=" col-span-2">
            <Link to="" className="flex justify-center m-0">November 6 2020</Link>
            </div>
            <div className=" col-span-1">
              <p className="flex justify-center m-0">7200</p>
            </div>
            <div className=" col-span-1">
              <p className="flex justify-center m-0">Icon</p>
            </div>
          </div>
        </div>
        <hr className="w-[85%] my-2 px-6 border-t border-gray-100" />
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className=" col-span-2">
            <Link to="" className="flex justify-center m-0">November 6 2020</Link>
            </div>
            <div className=" col-span-1">
              <p className="flex justify-center m-0">7200</p>
            </div>
            <div className=" col-span-1">
              <p className="flex justify-center m-0">Icon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
