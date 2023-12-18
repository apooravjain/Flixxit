import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
