import React, { useContext, useState } from "react";
import type { DatePickerProps, TimePickerProps } from "antd";
import { DatePicker, Select, Space, TimePicker, Button } from "antd";
import { FilterContext } from "../../context/FilterContext";
import dayjs from "dayjs";

const { Option } = Select;

type PickerType = "time" | "date";

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps["onChange"] | DatePickerProps["onChange"];
}) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const Filter = () => {
  const [type, setType] = useState<PickerType>("time");
  const {
    from,
    setFrom,
    to,
    setTo,
    filterclicked,
    setFilterClicked,
    monthyear,
    setMonthYear,
  } = useContext(FilterContext);
  return (
    <div className="flex flex-col md:flex-row items-center w-full bg-white p-10 rounded shadow-md">
      <div className="flex justify-center md:justify-start mb-1 cursor-pointer md:mb-0 w-full md:w-1/5">
        <Select value={type} onChange={setType}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
      </div>
      <div className="flex justify-center md:justify-start cursor-pointer mb-1 md:mb-0 w-full md:w-1/5">
        <label className="flex items-center justify-center mr-2">Start: </label>
        <PickerWithType
          type={type}
          onChange={(value) =>
            // type && type === "month" ? setMonthYear(value) : setFrom(value)
            setFrom(value)
          }
        />
      </div>
      <div className="flex justify-center md:justify-end cursor-pointer w-full mb-2 md:mb-0 md:w-1/5">
          <label className="flex items-center justify-center mr-2">End: </label>
          <PickerWithType type={type} onChange={(value ) => setTo(value)} />
        </div>
      {/* {type === "month" ? null : (
        <div className="flex justify-center md:justify-end cursor-pointer w-full mb-2 md:mb-0 md:w-1/5">
          <label className="flex items-center justify-center mr-2">End: </label>
          <PickerWithType type={type} onChange={(value ) => setTo(value)} />
        </div>
      )} */}

      <div className="flex justify-center w-full cursor-pointer mb-1 md:mb-0 md:w-2/5">
        <Space>
          <Button type="primary">Filter</Button>
          <Button type="primary" danger>
            Reset
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Filter;
