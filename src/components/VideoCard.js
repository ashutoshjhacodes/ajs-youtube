import React from "react";

const VideoCard = ({ videoInfo }) => {
  //   console.log(videoInfo);
  const thumbnailUrl = videoInfo?.snippet?.thumbnails?.medium?.url;
  const channelName = videoInfo?.snippet?.channelTitle;
  //   const channelId = videoInfo?.snippet?.channelId;
  const likes = videoInfo?.statistics?.likeCount;
  const views = videoInfo?.statistics?.viewCount;
  const comments = videoInfo?.statistics?.commentCount;
  return (
    <div className="m-2 p-2 w-72 shadow-xl">
      <img className="rounded-xl" alt="thumbnail" src={thumbnailUrl}></img>
      <ul>
        <li className="font-bold my-2 py-2">{channelName}</li>
        <li>Likes:{likes}</li>
        <li>Views:{views}Views</li>
        <li>Comments:{comments}</li>
      </ul>
    </div>
  );
};

//Higher Order Components:
//A function which takes a component and returns an enhanced or modified component

export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard videoInfo={videoInfo}/>
    </div>
  );
};
export default VideoCard;
