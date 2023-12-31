import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import WatchPage from "./WatchPage";
import About from "./About";

import WatchVideo from "./WatchVideo";
import Movies from "./Movies";
import Media from "./Media";
import SearchPage from "./SearchPage";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <ProtectedRoute element={<Browse />} />,
    },
    {
      path: "/watch/:id",
      element: <WatchPage />,
    },
    {
      path: "/video/:id",
      element: <WatchVideo />,
    },
    {
      path: "/tv",
      element: <Media mediaType="tv" />,
    },
    {
      path: "/movies",
      element: <Media mediaType="movie" />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
