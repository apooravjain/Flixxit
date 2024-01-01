import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between">
      <div className="flex items-center p-3 mr-16">
        <h1 className="font-extrabold text-transparent text-4xl text-center bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-red-950">
          Flixxit
        </h1>

        {user && (
          <nav className="flex pl-12">
            <div className="hidden md:flex text-white">
              <Link to={"/"}>
                <button className="font-bold m-2 hover:text-red-600">
                  HOME
                </button>
              </Link>
              <Link to={"/movies"}>
                <button className="font-bold m-2 hover:text-red-600">
                  MOVIES
                </button>
              </Link>
              <Link to={"/tv"}>
                <button className="font-bold m-2 hover:text-red-600">
                  TV SERIES
                </button>
              </Link>
              <Link to={"/search"}>
                <button className="font-bold m-2 hover:text-red-600">
                  SEARCH
                </button>
              </Link>
              <Link to={"/about"}>
                <button className="font-bold m-2 hover:text-red-600">
                  ABOUT
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
      {user && (
        <div className="relative flex items-center ">
          <div className="flex p-2 m-2 items-center">
            <Link to={"/profile"}>
              <img
                className="w-10 h-10 rounded-md"
                src={USER_AVATAR}
                alt="usericon"
              />
            </Link>
            <button
              onClick={handleSignOut}
              className="font-bold p-2 m-2 ml-6 mr-0 text-white bg-gradient-to-r from-red-900 via-red-600 to-red-900 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
