import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  movie,
  className = "default-class w-36 md:w-48 pr-4",
}) => {
  const navigate = useNavigate();
  // Navigate to a new page and pass state parameters

  const handleClick = () => {
    console.log("movie", movie);

    navigate("/watch/" + movie.id, {
      state: {
        posterPath: movie.poster_path,
        id: movie.id,
        title: movie.title || movie.name,
        overview: movie.overview,
        mediaType: movie.media_type,
        vote: movie.vote_average,
      },
    });
  };

  if (!movie.poster_path) return null;

  return (
    <div className={`${className} hover:cursor-pointer`} onClick={handleClick}>
      <img alt="Movie Card" src={IMG_CDN_URL + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
