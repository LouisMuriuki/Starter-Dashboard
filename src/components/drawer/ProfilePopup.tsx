import React, { useContext, useState } from "react";
import { Avatar, Button, Modal, Badge } from "antd";
import DrawerContext from "../../context/DrawerContext";
import {
  LogoutOutlined,
  PlusOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const ProfilePopup = () => {
  const {
    setNotificationsOpen,
    setNewMeetingOpen,
    profileModalOpen,
    setProfileModalOpen,
  } = useContext(DrawerContext);

  const handleCancel = () => {
    setProfileModalOpen(false);
  };

   const navigate=useNavigate()
  return (
    <>
      <Modal
        style={{ position: "absolute", top: 60, right: 20 }}
        open={profileModalOpen}
        onCancel={handleCancel}
        closable={false}
        bodyStyle={{ height: 280 }}
        width={200}
        footer={null}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-0">
            <div className="cursor-pointer">
              <Avatar
                style={{ marginBottom: 5 }}
                size={54}
                src="https://louismuriuki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
              />
            </div>
            <p className="p-0 my-1 text-sm md:text-base">louis hugo</p>
            <p className="p-0 my-1 text-sm md:text-base">lui@admin.com</p>
          </div>
          <div className="my-2 flex flex-col">
            <div className="flex items-center my-1">
              <div className="flex w-1/4">
                <PlusOutlined />
              </div>
              <div className="flex w-3/4">
                <Button
                  className="flex justify-start text-sm md:text-base"
                  type="text"
                  onClick={() => [
                    setNewMeetingOpen(true),
                    setProfileModalOpen(false),
                  ]}
                  block
                >
                  New Meeting
                </Button>
              </div>
            </div>
            <div className="flex items-center my-1">
              <div className="flex w-1/4">
                <Badge dot>
                  <BellOutlined />
                </Badge>
              </div>
              <div className="flex w-3/4">
                <Button
                  className="flex justify-start text-sm md:text-base"
                  type="text"
                  block
                  onClick={() => [
                    setNotificationsOpen(true),
                    setProfileModalOpen(false),
                  ]}
                >
                  Notifications
                </Button>
              </div>
            </div>
            <div className="flex items-center my-1">
              <div className="flex w-1/4 ">
                <UserOutlined />
              </div>
              <div className="flex w-3/4">
                <Button
                  className="flex justify-start text-sm md:text-base"
                  type="text"
                  block
                  onClick={() => [
                    setProfileModalOpen(false),
                    navigate("/account"),
                  ]}
                >
                  Account
                </Button>
              </div>
            </div>
            <div className="flex items-center my-1">
              <div className="flex w-1/4">
                <LogoutOutlined />
              </div>
              <div className="flex w-3/4">
                <Button
                  className="flex justify-start text-sm md:text-base"
                  type="text"
                  block
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfilePopup;
