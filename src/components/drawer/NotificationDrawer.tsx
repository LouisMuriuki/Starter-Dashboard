import React, { useContext, useState } from "react";
import { Button, Drawer } from "antd";
import DrawerContext from "../../context/DrawerContext";
import {GrFormClose} from 'react-icons/gr'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Notifications = [
  "The CEO has rescheduled today's meeting with Michael to tomorrow at 11 AM.",
  "The CFO has cancelled their meeting with the sales team due to a family emergency.",
  "The HR manager has scheduled a new meeting with the interns for next week.",
  "The marketing director has rescheduled their one-on-one with John from Friday to Thursday.",
  "The IT manager has cancelled their weekly status update meeting.",
  "The project manager has scheduled a new conference call with the remote team for 3 PM.",
  "The chief of operations has rescheduled the departmental meeting to next month.",
  "The legal counsel has cancelled their meeting with the marketing team due to a prior engagement.",
  "The head of R&D has scheduled a new meeting with the engineering team for tomorrow at 2 PM.",
  "The CEO's assistant has rescheduled the budget review meeting to next week.",
];

const NotificationDrawer: React.FC = () => {
  const { notificationsopen, setNotificationsOpen } = useContext(DrawerContext);
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const onClose = () => {
    setNotificationsOpen(false);
  };

  return (
    <>
      <Drawer
        title="System Notifications"
        placement="right"
        onClose={onClose}
        open={notificationsopen}
        width={isMobile?310:378}
      >
        {Notifications.map((notification, i) => {
          return (
            <div key={i} className="relative bg-cyan-200 p-1 rounded-md w-full m-1">
              <p>{notification}</p>
              <GrFormClose size={20} style={{color:"red"}}  className="absolute top-1 right-1 cursor-pointer"/>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default NotificationDrawer;
