// src/components/VideoCard.jsx
import { useState, useEffect, useRef } from "react";

const categoryColors = {
  Tutorial: "bg-green-100 text-green-700",
  Seminar: "bg-purple-100 text-purple-700",
  Webinar: "bg-blue-100 text-blue-700",
  Workshop: "bg-orange-100 text-orange-700"
};

const VideoCard = ({ video, playlistMode = false, onEnd }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const iframeRef = useRef(null);

  // Listen for video end using YouTube Player API (postMessage simulation)
  useEffect(() => {
    if (!playlistMode) return;

    const handleMessage = (event) => {
      if (
        event.data &&
        typeof event.data === "string" &&
        event.data.includes('"event":"onStateChange"')
      ) {
        const data = JSON.parse(event.data.replace("youtube-player:", ""));
        if (data.info === 0 && onEnd) {
          // 0 = ended
          onEnd();
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [playlistMode, onEnd]);

  const videoUrl = playlistMode
    ? `${video.link}?enablejsapi=1&autoplay=1`
    : `${video.link}?enablejsapi=1`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col">
      {/* Video Embed */}
      <div className="relative w-full pb-[56.25%] mb-4">
        <iframe
          ref={iframeRef}
          src={videoUrl}
          title={video.title}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{video.title}</h2>

      {/* Category Badge */}
      <span
        className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
          categoryColors[video.category] || "bg-gray-100 text-gray-700"
        }`}
      >
        {video.category}
      </span>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-2 flex-grow">{video.description}</p>

      {/* Transcript toggle */}
      {video.transcript && (
        <div>
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-blue-600 text-sm hover:underline"
          >
            {showTranscript ? "Hide Transcript" : "Show Transcript"}
          </button>
          {showTranscript && (
            <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
              {video.transcript}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
