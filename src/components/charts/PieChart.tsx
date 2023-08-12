import React, { useState, useEffect, useContext } from "react";
import { Pie } from "@ant-design/plots";
import Header from "../header/Header";
import HeaderContext from "../../context/HeaderContext";

const PieChart = ({ header }) => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  const data = [
    {
      type: "CEO",
      value: 27,
    },
    {
      type: "HR",
      value: 25,
    },
    {
      type: "CFO",
      value: 18,
    },
    {
      type: "ACC",
      value: 15,
    },
    {
      type: "CTO",
      value: 10,
    },
  ];
  const onMouseEnter = (data, index) => {
    return {
      animationDuration: 500,
      animationEasing: "elasticOut",
      
    };
  };
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
        cursor:"pointer"
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div className="bg-white shadow-md border p-1 w-full rounded">
      <div className="flex flex-col px-3 ">
        <h1 className="flex text-lg justify-center text-[#25385f]">
          Staff Engagements
        </h1>
        <div className="flex justify-end">
          <Header
            bgcolor="#f5f5f5"
            header={header}
            setHeaderValue={setHeaderValue}
            headervalue={headervalue}
          />
        </div>
      </div>
      <div style={{ cursor: "pointer" }}>
        <Pie
          hasLegend
          animate={false}
          subTitle="Pie Chart"
          onMouseEnter={onMouseEnter}
          {...config}
        />
      </div>
    </div>
  );
};

export default PieChart;
