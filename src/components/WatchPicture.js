import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
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
        className="w-2/6 h-2/6 px-10"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      <div className="pl-40 py-9 text-white w-2/4">
        <h3 className="font-extrabold text-center mb-8 text-3xl">{title}</h3>
        <p className="text-center font-bold mb-8">Rating: {vote}</p>
        <p className="text-center mb-8">{overview}</p>
        <div className="text-center">
          <button
            className="w-24 p-2 m-2 font-extrabold rounded-lg bg-gradient-to-r from-red-950 via-red-600 to-red-950"
            onClick={handleWatch}
          >
            Play
          </button>
          <button
            className="bg-gradient-to-r from-red-950 via-red-600 to-red-950 w-24 p-2 m-2 font-extrabold rounded-lg"
            onClick={addToWatchList}
          >
            Add +
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPicture;
