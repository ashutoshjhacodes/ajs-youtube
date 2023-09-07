import React, { useEffect, useState } from "react";
import { videosApi } from "../utils/Constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(videosApi);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard videoInfo={videos[0]} />}
      {videos.map((video, index) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
