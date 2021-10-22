import { Alert, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import axios from "../../axios";
import requests from "../../request";
import "./RecVideos.css";
import useCreateVideos from "../useCreateVideos";

const RecVideos = () => {
  const [videos, createVideos] = useCreateVideos();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.popularVideos);
      createVideos(response.data.items);
      setIsLoading(false);
      setIsError(false);
      return response;
    }
    return() => fetchData();
  }, [createVideos]);

  if (isError) {
    return (
      <Alert severity="error" className="loading">
        No Results Found!
      </Alert>
    );
  }

  return (
    <div className="recvideos">
      {isLoading ? (
        <CircularProgress className="loading" color="secondary" />
      ) : null}
      <div className="recvideos__videos">
        {videos.map((item) => (
          <VideoCard
            key={item.videoId}
            title={item.title}
            image={item.image}
            channel={item.channel}
            views={item.views}
            timestamp={item.timestamp}
            channelImage={item.channelImage}
          />
        ))}
      </div>
    </div>
  );
};

export default RecVideos;
