import { createContext, useState } from "react";
interface headeerContextProps {
  headervalue: string;
  setHeaderValue: React.Dispatch<React.SetStateAction<string>>;
}
const HeaderContext = createContext<headeerContextProps>({
  headervalue: "",
  setHeaderValue: () => {},
});
export const HeaderContextProvider = ({ children }: any) => {
  const [headervalue, setHeaderValue] = useState("");

  return (
    <HeaderContext.Provider value={{ headervalue, setHeaderValue }}>
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;
