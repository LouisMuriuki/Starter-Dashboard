import { createContext } from "react";
interface formContextProps {}
const FormContext = createContext<formContextProps>({});
export const FormContextProvider = ({ children }: any) => {
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};
