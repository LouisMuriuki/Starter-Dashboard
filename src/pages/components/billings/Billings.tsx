import React from "react";
import { Link } from "react-router-dom";

const Billings = () => {
  return (
    <div className="flex rounded flex-col w-full bg-white px-5">
      <div className="flex justify-between items-center">
        <h4>Billing Details</h4>
        <Link to="" className="cursor-pointer">Edit</Link>
      </div>
      <div className="my-7">
        Visa
      </div>
      <div>
        <p className="font-semibold m-0">lui@admin.com</p>
        <p className="font-semibold m-0">6th Broklyn Strreet, Southamptopn</p>
      </div>
      <div className="mt-3">
        <p className="text-[#d3d3d3]">Billed on the 6th of evry Month</p>
        <p className="font-semibold">Next billing in 2 days month for money</p>
      </div>
    </div>
  );
};

export default Billings;
