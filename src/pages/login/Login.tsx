import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState("");
  const [termschecked, setTermsChecked] = useState(true);

  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const onFinish = (values: any) => {
    // Send login request to the server
    // If successful, redirect the user to the dashboard
    // If not, set the error state to display an error message
  };

  return (
    <div className="flex">
      <div className=" w-full md:w-1/2 p-1 md:p-4 ">
        <div className="flex w-full items-center h-[100%] mx-auto">
          <div className="flex w-[100%] flex-col px-5 md:px-10 ">
            <h2 className="text-lg md:text-xl">Login in to your Account</h2>
            <p>welcome back! Please login</p>
            <Form
              form={form}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size={isMobile?"middle":"large"} 
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  size={isMobile?"middle":"large"} 
                  placeholder="Password"
                />
              </Form.Item>
              <div className="flex justify-between items-center">
                <Checkbox
                  checked={termschecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                >
                  Remember Me
                </Checkbox>
                <p>
                  <Link to={"/login/verification"}>Forgot Password?</Link>
                </p>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size={isMobile?"middle":"large"} 
                  className="w-full mt-2"
                >
                  Log in
                </Button>
              </Form.Item>
              {error && <div className="error-message">{error}</div>}
            </Form>
            <div className="flex items-center justify-center w-full">
              <Form>
                <p className="flex items-center justify-center">
                  <p>Don't have an account? </p>
                  <p>
                    <Link to={"/register"}>Create an account</Link>
                  </p>
                </p>
              </Form>{" "}
            </div>
          </div>
        </div>
      </div>
      {isMobile?null:<div className="w-1/2 p-4 h-[100%] bg-blue-600">
        <div className="flex w-full items-center h-[screen] my-auto bg-blue-600">
          <img
            src={
              "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className="object-contain w-[100%] h-screen"
            alt={"mgeni karibu"}
          />
        </div>
      </div>}
    </div>
  );
};

export default Login;
