import React from "react";
import { Route, Routes } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrivateLayout from "./Layout/PrivateLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Meetings from "./pages/meetings/Meetings";
import NotFound from "./pages/notfound/NotFound";
import Account from "./pages/account/Account";
import Reports from "./pages/reports/Reports";
import Details from "./pages/staff/StaffDetails";
import Staff from "./pages/staff/Orders";
import ReportPage from "./pages/reports/ReportPage";
import PublicLayout from "./Layout/PublicLayout";
import Register from "./pages/register/Register";
import RegisterVerification from "./pages/registerverification/RegisterVerification";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import Orders from "./pages/staff/Orders";
import Support from "./pages/support/Support";
import Transactions from "./pages/transactions/Transactions";
import Requests from "./pages/requests/Requests";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PublicLayout />}>
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="verification" element={<RegisterVerification />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>
          <Route path="register">
            <Route index element={<Register />} />
            <Route path="verification" element={<RegisterVerification />} />
          </Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="support">
            <Route index element={<Support/>} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="transactions">
            <Route index element={<Transactions />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="requests">
            <Route index element={<Requests/>} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="meetings">
            <Route index element={<Meetings />} />
            <Route path="reports">
              <Route index element={<Reports />} />
              <Route path=":id" element={<ReportPage />} />
            </Route>
          </Route>
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
// <PrivateLayout>
// </PrivateLayout>
