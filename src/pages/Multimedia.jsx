import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { PlayIcon } from "../components/icons";
import media from "../data/media.json";
import VideoCard from "../components/VideoCard";

const videoCategories = ["All", ...new Set(media.map((m) => m.category))];


const categoryColors = {
  Tutorial: "bg-green-500",
  Seminar: "bg-purple-500",
  Webinar: "bg-blue-500",
  Workshop: "bg-orange-500"
};

const Multimedia = () => {
  const [selectedUserCategory, setSelectedUserCategory] = useState("All");
  const [selectedVideoCategory, setSelectedVideoCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const userTypeFromLocalStorage = localStorage.getItem("userType");
    if (userTypeFromLocalStorage) {
      setSelectedUserCategory(userTypeFromLocalStorage);
    }
  }, []);

  const filteredMedia = media.filter(vid =>
    (selectedUserCategory === "All" || vid.targetAudience.includes(selectedUserCategory.toLowerCase().replace(" ", ""))) &&
    (selectedVideoCategory === "All" || vid.category === selectedVideoCategory)
  );

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setShowTranscript(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>
        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Multimedia Hub
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore a curated collection of videos related to career development, tutorials, and more.
          </p>
        </div>

        {/* Video Category Filter */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Filter by Video Category:</h3>
          <div className="flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
            {videoCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVideoCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all
                  ${selectedVideoCategory === cat
                    ? `${categoryColors[cat] || "bg-purple-600"} text-white shadow-lg`
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredMedia.length > 0 ? (
              filteredMedia.map((vid) => (
                <VideoCard key={vid.id} video={vid} onClick={() => setSelectedVideo(vid)} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No videos found with these filters.</p>
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