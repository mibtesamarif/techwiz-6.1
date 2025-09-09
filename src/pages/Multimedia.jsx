// // src/pages/Multimedia.jsx
// import { useState } from "react";
// import media from "../data/media.json";
// import VideoCard from "../components/VideoCard";
// import Breadcrumbs from "../components/Breadcrumbs";

// const Multimedia = () => {
//   const [category, setCategory] = useState("All");
//   const [playlistMode, setPlaylistMode] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const categories = ["All", ...new Set(media.map((m) => m.category))];

//   const filtered =
//     category === "All"
//       ? media
//       : media.filter((m) => m.category === category);

//   // when playlist mode is ON, only show one video at a time
//   const videosToShow = playlistMode
//     ? [filtered[currentIndex]].filter(Boolean)
//     : filtered;

//   const handleVideoEnd = () => {
//     if (playlistMode && currentIndex < filtered.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <div>
//       <Breadcrumbs />

//       <h1 className="text-3xl font-bold mb-6">Multimedia</h1>

//       {/* Category filter */}
//       <div className="mb-6 flex gap-2 flex-wrap">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               setCategory(cat);
//               setCurrentIndex(0); // reset playlist
//             }}
//             className={`px-3 py-1 rounded-full text-sm font-medium ${
//               category === cat
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}

//         {/* Playlist toggle */}
//         <button
//           onClick={() => {
//             setPlaylistMode(!playlistMode);
//             setCurrentIndex(0);
//           }}
//           className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
//             playlistMode
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {playlistMode ? "Playlist Mode: ON" : "Playlist Mode: OFF"}
//         </button>
//       </div>

//       {/* Videos */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {videosToShow.length > 0 ? (
//           videosToShow.map((vid) => (
//             <VideoCard
//               key={vid.id}
//               video={vid}
//               playlistMode={playlistMode}
//               onEnd={handleVideoEnd}
//             />
//           ))
//         ) : (
//           <p className="text-gray-600">No videos found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Multimedia;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const media = [
  {
    "id": 1,
    "title": "Introduction to AI",
    "category": "Tutorial",
    "link": "https://www.youtube.com/embed/F6B5y6f225M",
    "description": "A beginner-friendly overview of Artificial Intelligence.",
    "transcript": "In this video, we explore the basics of AI and its impact on the modern world. We cover key concepts like machine learning, neural networks, and the different types of AI. This tutorial is perfect for anyone looking to start their journey into the world of artificial intelligence."
  },
  {
    "id": 2,
    "title": "Career Guidance Webinar",
    "category": "Webinar",
    "link": "https://www.youtube.com/embed/n4d8L62d294",
    "description": "Experts share insights on choosing the right career path.",
    "transcript": "Join us for this exclusive webinar where a panel of career experts discusses how to identify your strengths and passions. We'll cover topics like resume building, networking, and interview preparation. Discover tips and tricks to land your dream job."
  },
  {
    "id": 3,
    "title": "Data Science for Beginners",
    "category": "Tutorial",
    "link": "https://www.youtube.com/embed/ua-CiDNNj3o",
    "description": "Learn the fundamentals of data science in this comprehensive tutorial.",
    "transcript": "This video breaks down the complex field of data science into simple, understandable concepts. We'll walk you through the data analysis lifecycle, from data collection and cleaning to visualization and model building. No prior experience is necessary to follow along."
  },
  {
    "id": 4,
    "title": "Digital Marketing Masterclass",
    "category": "Seminar",
    "link": "https://www.youtube.com/embed/1kYgVv1-h8w",
    "description": "A deep dive into strategies for effective online marketing.",
    "transcript": "In this masterclass, we explore the core pillars of a successful digital marketing strategy. Learn about SEO, content marketing, social media advertising, and email campaigns. We'll provide actionable tips you can use to grow your online presence immediately."
  },
  {
    "id": 5,
    "title": "Building a Portfolio",
    "category": "Workshop",
    "link": "https://www.youtube.com/embed/qVvF5hXh4uU",
    "description": "Practical steps to create a standout portfolio.",
    "transcript": "A strong portfolio is essential for showcasing your skills. This workshop provides a step-by-step guide to building a professional portfolio that will get you noticed by recruiters and clients. We cover how to select your best work, present your projects, and use storytelling to highlight your achievements."
  }
];

// --- Components ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Breadcrumbs = () => {
  const pathnames = ["multimedia"];

  return (
    <nav className="text-sm my-4">
      <motion.ol
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10"
      >
        <motion.li
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          <a href="/">Home</a>
        </motion.li>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <motion.li key={index} className="flex items-center space-x-2">
              <ChevronRight />
              {isLast ? (
                <span className="capitalize text-white font-semibold">{value.replace(/-/g, ' ')}</span>
              ) : (
                <a href={`/${value}`} className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value.replace(/-/g, ' ')}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

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

// --- Main App Component ---
const Multimedia = () => {
  const [category, setCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);

  const categories = ["All", ...new Set(media.map((m) => m.category))];

  const filtered =
    category === "All"
      ? media
      : media.filter((m) => m.category === category);

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setShowTranscript(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <Breadcrumbs />

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Multimedia Hub
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore a curated collection of videos related to career development, tutorials, and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${category === cat
                  ? `${categoryColors[cat] || "bg-purple-600"} text-white shadow-lg`
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((vid) => (
                <VideoCard key={vid.id} video={vid} onClick={() => setSelectedVideo(vid)} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No videos found in this category.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/10 text-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl w-full relative backdrop-blur-lg border border-white/10 my-8"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors p-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6">
                <iframe
                  src={`${selectedVideo.link}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <h2 className="text-3xl font-bold mb-2 text-purple-200">{selectedVideo.title}</h2>
              <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
              
              {selectedVideo.transcript && (
                <div>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-purple-400 text-sm font-semibold hover:underline"
                  >
                    {showTranscript ? "Hide Transcript" : "Show Transcript"}
                  </button>
                  <AnimatePresence>
                    {showTranscript && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-sm text-gray-300 bg-white/5 p-4 rounded-xl leading-relaxed overflow-hidden"
                      >
                        {selectedVideo.transcript}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Multimedia;
