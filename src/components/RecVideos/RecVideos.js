import { Alert, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import axios from "../../axios";
import requests from "../../request";
import { DateTime } from "luxon";
import "./RecVideos.css";
import { Link } from "react-router-dom";

const RecVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.popularVideos);
        createVideos(response.data.items);
        return response;
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
        }
        fetchData();
  }, []);

  

  async function createVideos(videoItems) {
    let newVideos = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        `/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
      );
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      newVideos.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }
    setVideos(newVideos);
    setIsLoading(false);
  }

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
        {videos.map((item) => {
          return (
            <Link key={item.videoId} to={`/video/${item.videoId}`}>
              <VideoCard
                title={item.title}
                image={item.image}
                channel={item.channel}
                views={item.views}
                timestamp={item.timestamp}
                channelImage={item.channelImage}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecVideos;
