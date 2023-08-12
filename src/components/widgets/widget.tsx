import React, { CSSProperties } from "react";
import { Card } from "antd";
 import { RiseOutlined } from "@ant-design/icons";
interface Props {
  text: string;
  number: number;
  color: string;
  icon: string;
}

function Widget({ text, number, color, icon }: Props) {
  return (
    <Card
      size="default"
      hoverable={false}
      style={{
        height: 140,
        padding: 0,
      }}
    >
      <div className="flex flex-row w-auto gap-0 ">
        <div className="flex flex-col justify-evenly w-[100%]">
          <div className="flex justify-center flex-col w-full items-center">
            <h3 className="m-0 p-1 text-sm md:text-xl lg:text-base">{text}</h3>
            <h5 className="m-0 p-1 text-base font-bold">{number}</h5>
            <p className="m-0 p-1 text-base font-bold">
              <span className="text-green-400">
                10%
                <RiseOutlined />
              </span>
              vs last month
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Widget;
