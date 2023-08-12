import { Button } from "antd";
import React from "react";

const Upgrade = () => {
  return (
    <div className="flex w-full border border-slate-100 rounded bg-white py-5 px-5">
      <div className="flex flex-col p-2">
        <h2 className="text-slate-800 m-0">Get more with Mgeni-Karibu</h2>
        <h4 className="text-grey">Upgrade anytime</h4>
        <p>
          For growing businesses that need to manage a large number of business
          proceeses
        </p>
        <div>
          <Button className="animate-bounce transition duration-300 delay-150 hover:delay-300 mt-5" type={"primary"}>Upgrade Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
