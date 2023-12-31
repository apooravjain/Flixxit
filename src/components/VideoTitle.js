import { useNavigate } from "react-router-dom";

const VideoTitle = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
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

  const handleWatch = () => {
    navigate(`/play/${movie.id}`, { state: { mediaType: movie.media_type } });
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{movie.title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">
        {movie.overview}
      </p>
      <div className="my-4 md:m-0">
        <button
          className="hover:cursor-pointer bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"
          onClick={handleWatch}
        >
          ▶️ Play
        </button>
        <button
          className="hover:cursor-pointer hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"
          onClick={handleClick}
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
