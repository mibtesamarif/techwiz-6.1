import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "./icons";

const categoryColors = {
  Tutorial: "bg-green-500",
  Seminar: "bg-purple-500",
  Webinar: "bg-blue-500",
  Workshop: "bg-orange-500"
};

const VideoCard = ({ video, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
      onClick={onClick}
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 group">
        <img
          src={`https://img.youtube.com/vi/${video.link.split('/').pop()}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            <PlayIcon />
          </motion.div>
        </div>
      </div>
      <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-2 ${categoryColors[video.category]} text-white`}>
        {video.category}
      </span>
      <h2 className="text-xl font-bold mb-2 text-white">{video.title}</h2>
      <p className="text-sm text-gray-300 flex-grow">{video.description}</p>
    </motion.div>
  );
};

export default VideoCard;
