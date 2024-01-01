import React from "react";
import Header from "./Header";
import WatchPicture from "./WatchPicture";
import { useLocation } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();
  const posterPath = location.state.posterPath;
  const id = location.state.id;
  const title = location.state.title;
  const overview = location.state.overview;
  const mediaType = location.state.mediaType;
  const vote = location.state.vote;

  return (
    <div>
      <Header />
      <WatchPicture
        id={id}
        posterPath={posterPath}
        vote={vote}
        title={title}
        overview={overview}
        mediaType={mediaType}
      />
    </div>
  );
};

export default WatchPage;
