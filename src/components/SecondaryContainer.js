import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";

const SecondaryContainer = () => {
  const movies = useSelector((story) => story.movies);
  //console.log(movies);

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
    </div>
  );
};

export default SecondaryContainer;
