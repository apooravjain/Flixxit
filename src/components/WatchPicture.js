import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { addMedia } from "../utils/watchListSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToFirebaseWatchList } from "../utils/watchListSlice";

const WatchPicture = ({ id, posterPath, vote, title, overview, mediaType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const watchList = useSelector((store) => store.watchList);

  if (!posterPath) return null;

  const handleWatch = () => {
    navigate(`/play/${id}`, { state: { mediaType } });
  };

  const mediaData = {
    id,
    posterPath,
    title,
  };

  const addToWatchList = () => {
    toast("Added to favourites!");
    dispatch(addMedia(mediaData));
    dispatch(addToFirebaseWatchList(mediaData));
  };

  return (
    <div className="flex px-16 pt-[8%] min-h-screen bg-black">
      <img
        className="w-96 h-96 px-10"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      <div className="pl-10 text-white ">
        <h3 className="font-extrabold text-center mb-8">{title}</h3>
        <p className="text-center mb-8">{vote}</p>
        <p className="text-center mb-8">{overview}</p>
        <button
          className="bg-red-700 p-2 m-2 font-extrabold rounded-lg"
          onClick={handleWatch}
        >
          Play
        </button>
        <button
          className="bg-red-700 p-2 m-2 font-extrabold rounded-lg"
          onClick={addToWatchList}
        >
          Add +
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default WatchPicture;
