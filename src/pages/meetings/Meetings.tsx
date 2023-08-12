import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import TableList from "../../components/Table/TableList";
import HeaderContext from "../../context/HeaderContext";
import "./meetings.css"
const header = ["Upcoming", "Rescheduled", "Cancelled"];
const options = header.map((option) => ({ label: option, value: option }));
const Meetings = () => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        <Header
          bgcolor="#bac6d6"
          header={options}
          headervalue={headervalue}
          setHeaderValue={setHeaderValue}
        />
      </div>

      <TableList />
    </div>
  );
};

export default Meetings;
