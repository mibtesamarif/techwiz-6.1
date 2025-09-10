import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stories from "../data/stories.json";
import Breadcrumbs from "../components/Breadcrumbs";
import StoryCard from "../components/StoryCard";
import StoryModal from "../components/StoryModal";


const SuccessStories = () => {
  const [domain, setDomain] = useState("All");
  const [selectedStory, setSelectedStory] = useState(null);

  const domains = ["All", ...new Set(stories.map((s) => s.domain))];

  const filtered =
    domain === "All" ? stories : stories.filter((s) => s.domain === domain);

  const featuredStory = filtered.length > 0 ? filtered[0] : null;
  const restStories = featuredStory ? filtered.slice(1) : [];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Success Stories
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Read inspiring stories from individuals who have achieved their career goals.
          </p>
        </div>

        {/* Domain filter */}
        <div className="mb-10 flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          {domains.map((d, idx) => (
            <button
              key={idx}
              onClick={() => setDomain(d)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${domain === d
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        <AnimatePresence mode="wait">
          {featuredStory && (
            <motion.div
              key={featuredStory.id + "-featured"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedStory(featuredStory)}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-10 mb-8 flex flex-col lg:flex-row items-center gap-6 cursor-pointer hover:shadow-2xl transition-all duration-300 ring-1 ring-white/10"
            >
              <img
                src={featuredStory.image}
                alt={featuredStory.name}
                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-purple-500"
              />
              <div className="flex-1 text-center lg:text-left">
                <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-2 bg-purple-500 text-white`}>
                  Featured Story
                </span>
                <h2 className="text-3xl font-extrabold text-white">{featuredStory.name}</h2>
                <p className="text-gray-400 mb-2">{featuredStory.title}</p>
                <blockquote className="italic text-gray-300 border-l-4 border-purple-500 pl-4 mt-4 leading-relaxed">
                  “{featuredStory.snippet}”
                </blockquote>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remaining Stories Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {restStories.length > 0 ? (
              restStories.map((story) => (
                <StoryCard key={story.id} story={story} onClick={() => setSelectedStory(story)} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No stories found in this domain.</p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStory && (
            <StoryModal
              story={selectedStory}
              onClose={() => setSelectedStory(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuccessStories;