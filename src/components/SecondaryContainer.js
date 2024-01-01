import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((story) => story.movies);

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Trending Today"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Top Rated TV Series"}
          movies={movies.topRatedMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-extrabold text-transparent text-3xl p-5 my-8 text-center bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-red-950">
          Flixxit
        </h1>
      </div>
    </div>
  );
};

export default SecondaryContainer;
