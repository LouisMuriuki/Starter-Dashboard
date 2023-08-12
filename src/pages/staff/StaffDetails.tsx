import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import Header from "../../components/header/Header";
import TableList from "../../components/Table/TableList";
import HeaderContext from "../../context/HeaderContext";
import Profile from "./components/Profile";

const header = ["Upcoming", "Rescheduled", "Cancelled"];
const options = header.map((option) => ({ label: option, value: option }));
const Details = () => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  const { id } = useParams();
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col md:flex-row md:mb-5">
        <div className=" w-full md:w-3/5 p-0 md:p-2 mb-2 md:mb-0">
          <Profile />
        </div>
        <div className="w-full md:w-2/5 p-0 md:p-2 mb-2 md:mb-0">
          <BarChart />
        </div>
      </div>
      <div className="flex flex-col bg-white" >
        <div className="flex justify-start m-4">
          <Header
            bgcolor="#bac6d6"
            header={options}
            headervalue={headervalue}
            setHeaderValue={setHeaderValue}
          />
        </div>

        <TableList />
      </div>
    </div>
  );
};

export default Details;
