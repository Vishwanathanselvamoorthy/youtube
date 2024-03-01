import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoApi, setVideoApi] = useState([]);

  useEffect(() => {
    fetchVideoApi();
  }, []);

  const fetchVideoApi = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);

    const json = await data.json();

    setVideoApi(json.items);
  };
  return (
    <div className="m-24 flex flex-wrap justify-between overflow-y-auto hide-scrollbar  " style={{ maxHeight: 'calc(100vh - 100px)' }}>
      {videoApi.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
