import { Segmented } from "antd";
import { SegmentedLabeledOption, SegmentedValue } from "antd/es/segmented";
import React, { useState } from "react";

interface Props {
  header: SegmentedLabeledOption[];
  bgcolor:string;
  headervalue: string | number;
  setHeaderValue: React.Dispatch<React.SetStateAction<string|number>>;
}
const Header = ({ header, setHeaderValue, headervalue,bgcolor }: Props) => {
 

  return (
    <Segmented options={header} style={{backgroundColor:bgcolor}} value={headervalue} onChange={setHeaderValue} />
  );
};

export default Header;
