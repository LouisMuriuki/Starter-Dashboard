import { Typography, Button } from "antd";
import React, { useContext } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import List from "../../components/list/List";
import { Link } from "react-router-dom";
import AsyncConfirm from "../../components/drawer/AsyncConfirm";
import DrawerContext from "../../context/DrawerContext";
import TableList from "../../components/Table/TableList";
import NewStaffModal from "../../components/drawer/NewStaffModal";

const Orders = () => {
  const { Title } = Typography;
  const {
    asyncconfirmopen,
    setAsyncConfirmOpen,
    newstaffmodalopen,
    setNewStaffModalOpen,
  } = useContext(DrawerContext);

  return (
    <div>
      <div className="bg-[white] shadow-md border p-2 mb-4 flex justify-between rounded border-gray-100  items-center">
        <Title level={3} className="flex  items-center justify-center">
          NEW ORDER
        </Title>
        <Button
          className="flex items-center justify-center"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setNewStaffModalOpen(true)}
        >
          ADD
        </Button>
      </div>
      <TableList />
      <NewStaffModal />
    </div>
  );
};

export default Orders;
