import { Avatar, Row, Col, Input, Typography } from "antd";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const { Text, Title } = Typography;
const Profile = () => {
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <div className="flex flex-col bg-white shadow-md border p-3">
      <div className="flex justify-center">
        <img
          src={
            "https://louismuriuki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.eafef7de.jpg&w=3840&q=75"
          }
          className=" rounded mt-1"
          width={isMobile ? 140 : 160}
          height={isMobile ? 140 : 160}
        />
        {/* <div className="flex justify-center flex-col  m-0">
          <p className="m-1">
            <span className="font-semibold">Total Meetings:</span>
            <span>3000</span>
          </p>
          <p className="m-1">
            <span className="font-semibold">Total visitors:</span>
            <span>3000</span>
          </p>
          <p className="m-1">
            <span className="font-semibold">Average Meetings:</span>
            <span>3000</span>
          </p>
          <p className="m-1">
            <span className="font-semibold">Date added:</span>
            <span>3000</span>
          </p>
          <p className="m-1">
            <span className="font-semibold">Busiest Day:</span>
            Busiest Day:<span>3000</span>
          </p>
        </div> */}
      </div>

      <Title level={isMobile ? 4 : 3} style={{ textAlign: "center" }}>
        Louis Muriuki
      </Title>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Text strong style={{ display: "block", marginTop: 20 }}>
            Phone Number:
          </Text>
          <Input disabled value="0759266327" />
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Text strong style={{ display: "block", marginTop: 20 }}>
            Email:
          </Text>
          <Input disabled value="lui@admin.com" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Text strong style={{ display: "block", marginTop: 20 }}>
            Job Initials:
          </Text>
          <Input disabled value="CEO" />
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Text strong style={{ display: "block", marginTop: 20 }}>
            Sex:
          </Text>
          <Input disabled value="Male" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Text strong style={{ display: "block", marginTop: 20 }}>
            Organization Role:
          </Text>
          <Input disabled value="Member" />
        </Col>
        <Col span={isMobile ? 24 : 12}></Col>
      </Row>
    </div>
  );
};

export default Profile;
