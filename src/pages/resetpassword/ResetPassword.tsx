import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const { Text } = Typography;

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));


  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log("Resetting password:", values);
      message.success("Password reset successful!");
      form.resetFields();
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Failed to reset password, please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-full md:w-[450px] shadow-md m-3 p-2 md:p-10">
        <Form form={form} layout="vertical">
        <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter a password.",
              },
            ]}
          >
            <Input.Password size={isMobile?"middle":"large"} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter a password.",
              },
            ]}
          >
            <Input.Password size={isMobile?"middle":"large"} placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size={isMobile?"middle":"large"} 
              loading={loading}
              onClick={handleSubmit}
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;