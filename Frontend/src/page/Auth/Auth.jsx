import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
          <h1 className="text-6xl font-bold pb-9">Crypto Trading</h1>

          {location.pathname == "/signup" ? (
            <section className="w-96">
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>Have already account?</span>
                <Button variant="ghost" onClick={() => navigate("/signin")}>
                  SignIn
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-96">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center mt-2">
                <span>Back to login</span>
                <Button variant="ghost" onClick={() => navigate("/signup")}>
                  SignIn
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-96">
              <SigninForm />
              <div className="flex items-center justify-center">
                <span>Don't have an account?</span>
                <Button variant="ghost" onClick={() => navigate("/signup")}>
                  SignUp
                </Button>
              </div>

              <div className="mt-10">
                <Button
                  className="w-full py-5"
                  variant="outline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
