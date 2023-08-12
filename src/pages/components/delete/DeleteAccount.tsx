import { Button } from "antd";
import React from "react";

const DeleteAccount = () => {
  return (
    <div className="flex flex-col w-full px-5 py-5 bg-white  rounded">
      <h3 className="text-lg">Delete Account</h3>
      <p>
        Permanently remove your Personal Account and all of its contents from
        the Horizon platform. This action is not reversible, so please continue
        with caution.
      </p>
      <div className="flex items-center justify-end py-3">
        <Button
          type="primary"
          danger
          className="flex  bg-red-600 px-5"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccount;
