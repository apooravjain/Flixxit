import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle movie={mainMovie} />
      <VideoBackground
        movieId={mainMovie.id}
        mediaType={mainMovie.media_type}
      />
    </div>
  );
};

export default MainContainer;
