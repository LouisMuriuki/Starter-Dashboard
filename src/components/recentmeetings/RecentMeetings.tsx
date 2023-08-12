import { Typography } from "antd";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const meetings = [
  {
    meetingTitle: "Weekly Team Meeting",
    timeRange: "10:00am - 11:00am",
    imageUrls: [
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
    ],
  },
  {
    meetingTitle: "Monthly Project Review",
    timeRange: "1:00pm - 2:00pm",
    imageUrls: [
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
    ],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
];

const RecentMeetings = () => {
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const Colors = ["#Abcdab", "#d0c2b0", "be5a43"];
  const { Title } = Typography;
  return (
    <div className="flex flex-col bg-[#fff] shadow-md border h-[450px] rounded md:h-[504px] ">
      <div className="flex items-center justify-center py-0">
        <h3 className="text-lg text-[#25385f]"> Upcoming Meetings</h3>
      </div>
      <div className="w-full mb-4 overflow-auto p-1 md:p-2 scrollbar-hide">
        {meetings.map((meeting, i) => {
          return (
            <div
              key={i}
              className="w-full md:h-[100px] bg-[#f5f5f5] flex items-center justify-center p-1 rounded-md border border-gray-700 shadow-md mb-6"
            >
              <div className="p-2 md:p-4 w-1/5">
                <div className="flex items-center justify-center p-1 rounded-md border border-gray-100 shadow-sm bg-[#Abcdab]">
                  <h2 className="text-xs md:text-base text-[#242424]">CEO</h2>
                </div>
              </div>
              <div className=" px-2  w-3/5 flex justify-between flex-col">
                <h5 className=" text-xs md:text-lg py-1 leading-3 my-auto">
                  {meeting.meetingTitle}
                </h5>
                <p className="text-xs md:text-base py-1 my-auto">
                  {meeting.timeRange}
                </p>
              </div>
              <div className="p-1 flex items-center justify-center w-1/5">
                {meeting.imageUrls.slice(0, 2).map((image, i) => {
                  return (
                    <img
                      key={i}
                      src={image}
                      alt="react logo"
                      className="rounded-full border border-gray-100 shadow-sm"
                      style={{
                        width: isMobile ? "20px" : "30px",
                        height: isMobile ? "20px" : "30px",
                        objectFit: "cover",
                      }}
                    />
                  );
                })}
                {meeting.imageUrls.length > 2 && (
                  <p className="text-xs">+{meeting.imageUrls.length - 2}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentMeetings;
