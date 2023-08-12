import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import DrawerContext from "../../context/DrawerContext";
import NewStaffForm from "../forms/NewStaffForm";
import "./modal.css"
const NewStaffModal = () => {
  const { newstaffmodalopen, setNewStaffModalOpen,confirmStaffFormLoading } = useContext(DrawerContext);

  

  return (
    <>
      <Modal
        title="Add New Staff"
        centered
        open={newstaffmodalopen}
        confirmLoading={confirmStaffFormLoading}
        className="flex flex-col"
        onCancel={() => setNewStaffModalOpen(false)}
        width={950}
        footer={null}
      >
        <div className="mt-8">
          <NewStaffForm />
        </div>
      </Modal>
    </>
  );
};

export default NewStaffModal;
