import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const navigate = useNavigate();
  const GoToLoginPage = () => {
    navigate('/Login');
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-between py-32 items-center bg-blue-500 px-12">
      <Logo />
      <div className="w-full flex flex-col gap-5">
        <DefaultButton
          className={`w-full h-auto py-3 hover:scale-105 ${
            isSignUpHovered ? "bg-white text-black" : "bg-white text-black"
          }`}
          onClick={GoToLoginPage}
        >
          Sign in
        </DefaultButton>

        <DefaultButton
          className={`w-full h-auto py-3 hover:scale-105 ${
            isSignUpHovered ? "bg-white text-black" : "bg-blue-500 text-white"
          }`}
          onClick={GoToLoginPage}
          onMouseEnter={() => setIsSignUpHovered(true)}
          onMouseLeave={() => setIsSignUpHovered(false)}
        >
          Sign Up
        </DefaultButton>
      </div>
    </div>
  );
};

export default Start;

