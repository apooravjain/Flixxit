import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularTvSeries = () => {
  const [data, setData] = useState([]);

  const getPopularTvSeries = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await response.json();
    setData(json.results);
  };

  useEffect(() => {
    getPopularTvSeries();
  }, []);

  return data;
};

export default usePopularTvSeries;
