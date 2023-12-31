import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useState } from "react";

const useMovieTrailer = (movieId, mediaType = "tv") => {
  const [trailer, setTrailer] = useState("");

  // const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        mediaType +
        "/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData =
      json.results.filter((video) => video.type === "Trailer") || [];
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailer(trailer);
    // dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return trailer;
};

export default useMovieTrailer;
