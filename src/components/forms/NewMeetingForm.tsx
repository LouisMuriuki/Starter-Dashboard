import {
  Form,
  Input,
  Upload,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Col,
  Row,
} from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const NewMeetingForm = () => {
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      // {...layout}
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Company Name"
            name="companyName"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="ID/Passport Number"
            name="idNumber"
            rules={[
              {
                required: true,
                message: "Please input your ID/Passport Number!",
              },
            ]}
          >
            <Input placeholder="ID/Passport Number" />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Nationality"
            name="nationality"
            rules={[
              {
                required: true,
                message: "Please select your nationality!",
              },
            ]}
          >
            <Select placeholder="Select your Nationality">
              <Option value="India">India</Option>
              <Option value="USA">USA</Option>
              <Option value="UK">UK</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Host"
            name="host"
            rules={[
              {
                required: true,
                message: "Please input the host name!",
              },
            ]}
          >
            <Input placeholder="Host" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please upload your image!",
              },
            ]}
          >
            <Upload name="image" action="/upload" listType="picture">
              <Button>
                <UploadOutlined /> Click to Upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please select the date!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Start Time"
            name="startTime"
            rules={[
              {
                required: true,
                message: "Please select the start time!",
              },
            ]}
          >
            <TimePicker />
          </Form.Item>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="End Time"
            name="endTime"
            rules={[
              {
                required: true,
                message: "Please select the end time!",
              },
            ]}
          >
            <TimePicker />
          </Form.Item>
        </Col>
      </Row>

      {/* <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default NewMeetingForm;
