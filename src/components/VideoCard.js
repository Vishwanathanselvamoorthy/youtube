import React from "react";
import { formatDate } from "./utils/helper";
import { formatDuration } from "./utils/helper";
import { formatViews } from "./utils/helper";

const VideoCard = ({ videoData }) => {
  

  const { snippet, statistics, contentDetails } = videoData;
  const { duration } = contentDetails;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-80 h-80  my-10">
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={thumbnails.medium.url}
          alt="img"
        />
        <span className="text-white absolute bottom-2 right-5 bg-black px-2 rounded-lg font-semibold">
          {formatDuration(duration)}
        </span>
      </div>
      <div className="w-full text-white text-center p-3 ">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm text-gray-400 font-semibold">{channelTitle}</p>
        <div className="flex justify-center items-center gap-3">
          <p className="text-sm text-gray-400 font-semibold">
            {formatViews(viewCount)}
          </p>
          <p className="text-sm text-gray-400 font-semibold">
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
