import React from "react";
import Billings from "../components/billings/Billings";
import DeleteAccount from "../components/delete/DeleteAccount";
import Invoices from "../components/invoices/Invoices";
import TopSection from "../components/topsection/TopSection";
import Upgrade from "../components/upgrade/Upgrade";

const Account = () => {
  return (
    <div>
      <h4 className="text-lg ml-3">Account Settings</h4>
      <div className="p-1 md:p-3">
        <TopSection />
      </div>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 p-1 md:p-3">
          <Billings/>
        </div>
        <div className="flex  w-full md:w-1/2  p-1 md:p-3">
          <Invoices/>
        </div>
      </div>
      <div className="p-1 md:p-3">
        <Upgrade />
      </div>
      <div className="p-1 md:p-3">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Account;
