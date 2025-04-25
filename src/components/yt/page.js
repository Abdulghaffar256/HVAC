import React from "react";
import { PortableText } from "@portabletext/react";

// Utility function to safely extract YouTube video ID
const getYouTubeID = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.+?[?&]v=)|youtu\.be\/)([^"&?/\\ ]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Custom PortableText component to render YouTube embeds
const portableTextComponents = {
  types: {
    youtube: ({ value }) => {
      const videoId = getYouTubeID(value.url);

      if (!videoId) {
        return <p className="text-red-500">Invalid YouTube URL</p>;
      }

      return (
        <div className="w-full my-6 aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="150%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      );
    },
  },
};
 export default portableTextComponents
