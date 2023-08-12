import React from "react";
import ReportCard from "../../components/reports/ReportCard";
const reports = [
  {
    title: "Check-in&Check-out reports",
    descrption: "This report shows all visitors who have checked in and checked out, including the date and time of their visits.",
  },
  {
    title: "Visitors Log Report",
    descrption: "This report displays the list of all visitors along with their personal information and purpose of visit.",
  },
  {
    title: "Pre-registered Visitors Report",
    descrption: "This report shows all visitors who have pre-registered for their visits",
  },
  {
    title: "Analytics Report",
    descrption: "This report provides insights into the overall visitor activity, including the number of visitors, purpose of visits, and duration of visits",
  },
];
const Reports = () => {
  return (
    <div className="flex items-center m-auto w-full justify-between flex-wrap">
      {reports.map((report,i)=>{
        return(
          <ReportCard title={report.title} description={report.descrption} key={i}  />
        )
      })}
    </div>
  );
};

export default Reports;
