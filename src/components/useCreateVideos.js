import { useState } from "react";
import { DateTime } from "luxon";
import axios from "../axios";

export default function useCreateVideos() {
  const [videos, setVideos] = useState([]);

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
  }
  return [videos, createVideos];
}
