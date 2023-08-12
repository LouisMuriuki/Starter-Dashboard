import React, { useState } from "react";
import { Form, Input, Button, Select, Row, Col, Checkbox } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  const [form] = Form.useForm();
  const [employeeCount, setEmployeeCount] = useState<string | number>(0);
  const [error, setError] = useState<string>("");
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [allchecked, setAllChecked] = useState(true);

  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", values);
      // If the request is successful, redirect the user to the login page
      // You can use the `useHistory` hook from the `react-router-dom` library to do this
    } catch (err: any) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="company-form"
      onFinish={onFinish}
      className="w-full md:px-20 "
      layout="vertical"
      scrollToFirstError
    >
      <div className="">
        <h2>Register</h2>
        <p>
          lets get you all set up so that you and your visitors can have the
          best meetring experiences{" "}
        </p>
      </div>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[
              { required: true, message: "Please input your company name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="packageType"
            label="Package Type"
            rules={[
              { required: true, message: "Please select a package type!" },
            ]}
          >
            <Select>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="premium">Pro</option>
              <option value="enterprise">Enterprise</option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="adminName"
            label="Admin Name"
            rules={[
              {
                required: true,
                message: "Please input your admin name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="adminEmail"
            label="Admin Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid email!",
              },
              {
                required: true,
                message: "Please input your admin email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="adminPhone"
            label="Admin Phone"
            rules={[
              {
                required: true,
                message: "Please input your admin phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="employeeCount"
            label="Number of Employees"
            rules={[
              {
                required: true,
                message: "Please input the number of employees!",
              },
            ]}
          >
            <Input
              type="number"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Checkbox
          checked={allchecked}
          onChange={(e) => setAllChecked(e.target.checked)}
        >
          <p>
            {" "}
            I agree to mgeni-karibu's{" "}
            <span>
              <Link to="">Terms & Conditions</Link>
            </span>{" "}
            and{" "}
            <span>
              <Link to="">Privacy Policies</Link>
            </span>
          </p>
        </Checkbox>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterForm;
