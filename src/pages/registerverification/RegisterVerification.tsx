import React, { useState, useEffect } from "react";
import { Input, Button, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const { Text } = Typography;

const RegisterVerification = () => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(60);
  const [timer, setTimer] = useState<null|number>(null);
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timer || undefined);
      setTimer(null);
    }
  }, [countdown]);

  const handleVerify = () => {
    navigate("/login/resetpassword");
    // Add code to verify the verification code here
    console.log(`Verifying code: ${verificationCode}`);
  };
  console.log(timer);
  const handleResend = () => {
    setCountdown(60);
    clearInterval(timer || undefined);
    setTimer(
      setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000)
    );
    // Add code to resend the verification code here
    console.log("Resending verification code...");
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className=" w-full md:w-[450px] shadow-md m-3 p-2 md:p-10 rounded-md  ">
        <p className="font-semibold my-9">
          We have sent a verification code to your Mobile Number.
        </p>
        <Input
          size="large"
          placeholder="Enter verification code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Space className="mt-10" size={10}>
          <Button
            type="primary"
            size={isMobile ? "small" : "large"}
            onClick={handleVerify}
          >
            Verify
          </Button>
          <Text
            type="secondary"
            disabled={timer===null}
            className="cursor-pointer"
            onClick={timer===0?()=>{}:handleResend}
          >
            Resend
            {timer ? ` (${countdown}s)` : ""}
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default RegisterVerification;
