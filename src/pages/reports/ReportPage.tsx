import React, { useContext } from "react";
import { Button } from "antd";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import HeaderContext from "../../context/HeaderContext";
import {DownloadOutlined }from "@ant-design/icons";
const header = ["Daily", "Monthly"];
const options = header.map((option) => ({ label: option, value: option }));
const ReportPage = () => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  return (
    <div>
      <div className="flex mb-4">
        <Filter />
      </div>
      <div className="flex justify-between">
        <div className="flex mb-4 items-center">
          <Header
            bgcolor="#bac6d6"
            header={options}
            headervalue={headervalue}
            setHeaderValue={setHeaderValue}
          />
        </div>
        <div className="flex items-center">
          <Button type={"primary"} icon={<DownloadOutlined />}>Export</Button>
        </div>
      </div>

      <List />
    </div>
  );
};

export default ReportPage;
