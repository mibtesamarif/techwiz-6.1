import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "./icons";

const categoryColors = {
  Tutorial: "bg-gradient-to-r from-teal-600 to-teal-700",
  Seminar: "bg-gradient-to-r from-rose-400 to-pink-400",
  Webinar: "bg-gradient-to-r from-yellow-500 to-amber-500",
  Workshop: "bg-gradient-to-r from-teal-500 to-emerald-500"
};

const VideoCard = ({ video, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gradient-to-br from-amber-50/10 to-teal-900/20 backdrop-blur-xl rounded-3xl p-6 border border-amber-100/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative w-full mb-5 overflow-hidden transition-all duration-500 aspect-video rounded-2xl group-hover:shadow-2xl">
        <img
          // src={`https://img.youtube.com/vi/${video.link.split('/').pop()}/maxresdefault.jpg`}
            // src={`https://img.youtube.com/vi/${video.link}/maxresdefault.jpg`}
            src={`https://img.youtube.com/vi/${video.link.split('/').pop().split('?')[0]}/maxresdefault.jpg`}

          alt={video.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent group-hover:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center w-20 h-20 border rounded-full shadow-2xl bg-gradient-to-r from-amber-400/30 to-yellow-500/30 backdrop-blur-sm text-amber-50 border-amber-200/30"
            >
              <PlayIcon />
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <span className={`inline-flex items-center px-4 py-2 text-xs font-bold rounded-full ${categoryColors[video.category]} text-amber-50 shadow-lg`}>
          {video.category}
        </span>
        <h2 className="text-xl font-bold leading-tight transition-colors duration-300 text-amber-50 group-hover:text-amber-100">
          {video.title}
        </h2>
        <p className="text-sm leading-relaxed transition-colors duration-300 text-amber-50 group-hover:text-amber-100/90">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;