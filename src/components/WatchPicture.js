import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WatchPicture = ({ id, posterPath, vote, title, overview, mediaType }) => {
  // console.log(vote);
  const navigate = useNavigate();
  if (!posterPath) return null;
  console.log("@@mediaType", mediaType);
  const handleWatch = () => {
    navigate(`/video/${id}`, { state: { mediaType } });
  };

  return (
    <div className=" flex pt-[8%] bg-gray-950">
      <img
        className="pl-20 px-10 h-80"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      <div className="items-center pl-40 pr-40 text-white">
        <h3 className="font-extrabold text-center">{title}</h3>
        <p class="text-center">{vote}</p>
        <p class="text-center">{overview}</p>
        <button
          className="bg-red-700 p-2 m-2 font-extrabold rounded-lg"
          onClick={handleWatch}
        >
          Watch
        </button>
      </div>
    </div>
  );
};

export default WatchPicture;
