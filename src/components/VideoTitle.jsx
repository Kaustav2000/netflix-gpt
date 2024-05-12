import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-lg mx-2 p-3 px-12 rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white text-lg p-3 px-12 bg-opacity-50 hover:opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
