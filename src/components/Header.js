import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex">
      <div className="flex items-center justify-center p-3 mr-16">
        <h1 className="font-extrabold text-transparent text-4xl text-center bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-red-950">
          Flixxit
        </h1>
      </div>
      {user && (
        <nav className="flex items-center justify-between">
          <div className="hidden md:flex">
            <Link to={"/browse"}>
              <button className="text-white font-bold m-2">HOME</button>
            </Link>
            <Link to={"/movies"}>
              <button className="text-white font-bold m-2">MOVIES</button>
            </Link>
            <Link to={"/tv"}>
              <button className="text-white font-bold m-2">TV SERIES</button>
            </Link>
            <Link to={"/search"}>
              <button className="text-white font-bold m-2">SEARCH</button>
            </Link>
            <Link to={"/about"}>
              <button className="text-white font-bold m-2">ABOUT</button>
            </Link>
          </div>
          <div className="relative flex items-center justify-end">
            <div className="flex p-2 m-2 items-center">
              <Link to={"/profile"}>
                <img
                  className="w-10 h-10"
                  src={user?.photoURL}
                  alt="usericon"
                />
              </Link>
              <button
                onClick={handleSignOut}
                className="font-bold p-2 m-2  text-white bg-red-700 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
