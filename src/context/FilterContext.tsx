import { createContext, useState } from "react";
import moment from "moment";

interface filterContextProps{
  from:Date
  setFrom:React.Dispatch<React.SetStateAction<Date>>;
  to:Date
  setTo:React.Dispatch<React.SetStateAction<Date>>;
  filterclicked:boolean
  setFilterClicked: React.Dispatch<React.SetStateAction<boolean>>;
  monthyear:Date
  setMonthYear:React.Dispatch<React.SetStateAction<Date>>;
}
export const FilterContext = createContext<filterContextProps>({
  from:new Date(),
  setFrom:() => {},
  to:new Date(),
  setTo:() => {},
  filterclicked:false,
  setFilterClicked:() => {},
  monthyear:new Date(),
  setMonthYear:() => {}
});

export const FilterContextProvider = ({ children }:any) => {
  const datefrom = new Date().setHours(0, 0, 0, 0);
  const dateto = new Date().setHours(23, 59, 59, 999);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [filterclicked, setFilterClicked] = useState(false);
  const [monthyear, setMonthYear] = useState(new Date());
  //@ts-expect-error
  console.log(from?.$d);

  return (
    <FilterContext.Provider
      value={{
        from,
        setFrom,
        to,
        setTo,
        filterclicked,
        setFilterClicked,
        monthyear,
        setMonthYear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
