import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movies = useSelector((story) => story.movies.popularMovies);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
export default Movies;
