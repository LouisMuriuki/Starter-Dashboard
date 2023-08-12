import React, { useContext, useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
  DatePicker,
  Col,
  Row,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DrawerContext from "../../context/DrawerContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    md: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function NewStaffForm() {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const {
    confirmStaffFormLoading,
    setConfirmStaffFormLoading,
    setNewStaffModalOpen,
  } = useContext(DrawerContext);

  const handleSubmit = (values: any) => {
    console.log("Received values of form: ", values);
    setConfirmStaffFormLoading(true);
    setTimeout(() => {
      setNewStaffModalOpen(false);
      setConfirmStaffFormLoading(false);
    }, 2000);
  };

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setImageUrl(info.file.thumbUrl);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Form
      form={form}
      name="register"
      style={{ width: "100%" }}
      onFinish={handleSubmit}
      scrollToFirstError
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
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
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not a valid email address!",
              },
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item name="jobInitials" label="Job Initials">
            <Select placeholder="Please select a job">
              <Option value="developer">Developer</Option>
              <Option value="designer">Designer</Option>
              <Option value="project_manager">Project Manager</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
      <Col span={isMobile ? 24 : 12}>
          <Form.Item
            name="image"
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item name="sex" label="Sex">
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
       
      </Row>
      <Row gutter={16}>
      <Col span={isMobile ? 24 : 12}>
          <Form.Item name="organizationRole" label="Organization Role">
            <Radio.Group>
              <Radio value="member">Member</Radio>
              <Radio value="leader">Leader</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item {...tailFormItemLayout}>
        <div className=" absolute  right-5 bottom-0">
          <Button value="default" className="mr-4" htmlType="submit">
            Cancel
          </Button>
          <Button
            type="primary"
            loading={confirmStaffFormLoading}
            htmlType="submit"
          >
            Register
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default NewStaffForm;
