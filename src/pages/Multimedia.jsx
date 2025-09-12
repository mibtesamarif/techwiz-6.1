import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import media from "../data/media.json";
import VideoCard from "../components/VideoCard";

const videoCategories = ["All", ...new Set(media.map((m) => m.category))];

const Multimedia = () => {
  const [selectedUserCategory, setSelectedUserCategory] = useState("All");
  const [selectedVideoCategory, setSelectedVideoCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    setSelectedUserCategory("All");
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
    <div className="flex flex-col items-center min-h-screen p-4 font-sans bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-amber-50 sm:p-8">
      <div className="w-full max-w-7xl">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-12 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-amber-50 md:text-7xl bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-200">
            Multimedia Hub
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-amber-50">
            Explore a curated collection of premium videos featuring career development insights, comprehensive tutorials, and expert-led sessions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-bold text-center text-amber-50">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-3 p-6 border shadow-2xl bg-gradient-to-r from-amber-50/5 to-teal-100/5 backdrop-blur-xl rounded-3xl border-amber-100/20">
            {videoCategories.map((cat, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideoCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedVideoCategory === cat
                    ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-teal-900 shadow-xl border-2 border-amber-300"
                    : "bg-gradient-to-r from-teal-800/50 to-teal-700/50  text-amber-50 hover:from-teal-700/60 hover:to-teal-600/60 border border-amber-200/20"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredMedia.length > 0 ? (
              filteredMedia.map((vid) => (
                <VideoCard key={vid.id} video={vid} onClick={() => setSelectedVideo(vid)} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center col-span-full"
              >
                <div className="p-8 border bg-gradient-to-r from-amber-50/10 to-teal-100/10 rounded-3xl border-amber-100/20">
                  <p className="text-lg text-amber-50">No videos found with the selected filters.</p>
                  <p className="mt-2 text-sm text-amber-50">Try adjusting your category selection.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-gradient-to-br from-teal-950/95 to-emerald-950/95 backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl p-8 my-8 border shadow-2xl bg-gradient-to-br from-amber-50/10 to-teal-100/5 backdrop-blur-xl rounded-3xl border-amber-100/20"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute p-3 transition-all duration-300 rounded-full top-6 right-6 text-amber-50 hover:text-amber-100 hover:bg-amber-100/10 group"
              >
                <motion.svg 
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"/>
                </motion.svg>
              </button>
              
              <div className="w-full mb-8 overflow-hidden border shadow-2xl aspect-video rounded-2xl border-amber-100/20">
                <iframe
                  src={`${selectedVideo.link}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 text-3xl font-bold text-amber-50 md:text-4xl bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">
                    {selectedVideo.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-amber-50">{selectedVideo.description}</p>
                </div>
                
                {selectedVideo.transcript && (
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowTranscript(!showTranscript)}
                      className="px-6 py-3 font-bold transition-all duration-300 border rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-50 hover:from-amber-500/30 hover:to-yellow-500/30 border-amber-300/30"
                    >
                      {showTranscript ? "Hide Transcript" : "Show Transcript"}
                    </motion.button>
                    
                    <AnimatePresence>
                      {showTranscript && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 border bg-gradient-to-r from-teal-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border-amber-100/10">
                            <p className="text-sm leading-relaxed text-amber-50">
                              {selectedVideo.transcript}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Multimedia;