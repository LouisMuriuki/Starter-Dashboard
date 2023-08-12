import { createContext, useState } from "react";
interface contextProps {
  notificationsopen: boolean;
  setNotificationsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  newmeetingopen: boolean;
  setNewMeetingOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  asyncconfirmopen: boolean;
  setAsyncConfirmOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  profileModalOpen: boolean;
  setProfileModalOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  newstaffmodalopen: boolean;
  setNewStaffModalOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  confirmStaffFormLoading: boolean;
  setConfirmStaffFormLoading:  React.Dispatch<React.SetStateAction<boolean>>;
}
const DrawerContext = createContext<contextProps>({
  notificationsopen: false,
  setNotificationsOpen: () => {},
  newmeetingopen: false,
  setNewMeetingOpen: () => {},
  asyncconfirmopen: false,
  setAsyncConfirmOpen: () => {},
  profileModalOpen: false,
  setProfileModalOpen: () => {},
  newstaffmodalopen: false,
  setNewStaffModalOpen: () => {},
  confirmStaffFormLoading: false,
  setConfirmStaffFormLoading: () => {},
});
export const DrawerContextProvider = ({ children }: any) => {
  const [notificationsopen, setNotificationsOpen] = useState(false);
  const [newmeetingopen, setNewMeetingOpen] = useState(false);
  const [asyncconfirmopen, setAsyncConfirmOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [newstaffmodalopen, setNewStaffModalOpen] = useState(false);
  const [confirmStaffFormLoading, setConfirmStaffFormLoading] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        notificationsopen,
        setNotificationsOpen,
        newmeetingopen,
        setNewMeetingOpen,
        asyncconfirmopen,
        setAsyncConfirmOpen,
        profileModalOpen,
        setProfileModalOpen,
        newstaffmodalopen,
        setNewStaffModalOpen,
        confirmStaffFormLoading,
        setConfirmStaffFormLoading,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
export default DrawerContext;
