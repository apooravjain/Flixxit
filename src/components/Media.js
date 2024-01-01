import React from "react";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Header from "./Header";

const Media = ({ mediaType }) => {
  const tvSeries = usePopularTvSeries();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const heading = mediaType === "tv" ? "TV Series" : "Movies";

  const movies = useMemo(() => {
    return mediaType === "tv" ? tvSeries : popularMovies;
  }, [mediaType, tvSeries, popularMovies]);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-y-1 bg-black pt-[7%]">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            className={"w-30 md:w-50 p-4 cursor:pointer"}
          />
        ))}
      </div>
    </div>
  );
};
export default Media;
