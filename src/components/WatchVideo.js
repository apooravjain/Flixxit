import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./Header";

const WatchVideo = () => {
  const { id } = useParams();
  const location = useLocation();
  const mediaType = location.state.mediaType;

  // Call useMovieTrailer outside of the useEffect
  const trailerVideo = useMovieTrailer(id, mediaType);

  return (
    <>
      <Header />
      <div className="">
        <iframe
          className="w-screen min-h-screen"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1"
          }
          title="YouTube video player"
          allow=" autoplay; gyroscope; "
        ></iframe>
      </div>
    </>
  );
};

export default WatchVideo;
