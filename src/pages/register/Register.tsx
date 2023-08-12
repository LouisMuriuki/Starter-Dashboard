import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/forms/RegisterForm";
import { Form } from "antd";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {  
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  
  return (
    <div className="flex ">
   { isMobile?null:  <div className="w-1/3 p-4 h-[100%] bg-blue-600">
        <div className="flex w-full items-center h-[screen] my-auto bg-blue-600">
          <img
            src={
              "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className="object-contain w-[100%] h-screen"
            alt={"mgeni karibu"}
          />
        </div>
      </div>}
      <div className=" w-full md:w-2/3 p-4 ">
        <div className="flex w-full items-center h-[100%] mx-auto">
          <div className="flex flex-col items-center w-full justify-center">
            <RegisterForm />
            <Form>
              <p className="w-full md:px-20 text-base">
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link to="/login">Login here</Link>
                </span>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
