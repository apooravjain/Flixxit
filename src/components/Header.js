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
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });

  //   //Unsubscribe whem component unmounts
  //   return () => unsubscribe();
  // }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <div className="">
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
          <div className="">
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
        </div>
      )}
    </div>
  );
};

export default Header;
