import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import { useState } from "react";

const Start = () => {
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between py-32 items-center bg-blue-500 px-12">
      <Logo />
      <div className="w-full flex flex-col gap-5">
        <DefaultButton
          className={`w-full h-auto py-3 hover:scale-105 ${
            isSignUpHovered ? "bg-white text-black" : "bg-white text-black"
          }`}
        >
          Sign in
        </DefaultButton>

        <DefaultButton
          className={`w-full h-auto py-3 hover:scale-105 ${
            isSignUpHovered ? "bg-white text-black" : "bg-blue-500 text-white"
          }`}
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
