import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stories from "../data/stories.json"
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
    <div className="flex flex-col items-center min-h-screen p-4 font-sans bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-cream sm:p-8 text-amber-50">
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
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 text-amber-50">
            Success Stories
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-gold to-pink"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-cream/80">
            Discover inspiring journeys from individuals who have transformed their careers and achieved remarkable success.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-bold text-center text-cream">Filter by Domain</h3>
          <div className="flex flex-wrap justify-center gap-3 p-6 shadow-2xl bg-gradient-to-r from-cream/5 to-teal-100/5 backdrop-blur-xl rounded-3xl ring-1 ring-cream/20">
            {domains.map((d, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDomain(d)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  domain === d
                    ? "bg-gradient-to-r from-gold to-pink shadow-xl border-2 border-gold"
                    : "bg-gradient-to-r from-teal-800/50 to-teal-700/50 text-cream hover:from-teal-700/60 hover:to-teal-600/60 border border-cream/20"
                }`}
              >
                {d}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {featuredStory && (
            <motion.div
              key={featuredStory.id + "-featured"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedStory(featuredStory)}
              className="flex flex-col items-center gap-8 p-6 mb-12 transition-all duration-300 border shadow-2xl cursor-pointer bg-gradient-to-br from-cream/10 to-teal-100/5 backdrop-blur-xl rounded-3xl sm:p-10 lg:flex-row hover:shadow-2xl ring-1 ring-cream/20 group hover:ring-gold/30"
            >
              <div className="relative">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.name}
                  className="object-cover w-56 h-56 transition-transform duration-300 border-4 rounded-full shadow-2xl border-gold ring-4 ring-gold/20 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent"></div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-6 py-2 mb-4 text-sm font-bold text-teal-900 rounded-full shadow-lg bg-gradient-to-r from-yellow-100 via-amber-200">
                  ✨ Featured Story
                </span>
                <h2 className="mb-3 text-4xl font-bold text-amber-50 bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200">
                  {featuredStory.name}
                </h2>
                <p className="mb-4 text-lg text-cream/70">{featuredStory.title}</p>
                <blockquote className="pl-6 mt-6 text-lg italic leading-relaxed border-l-4 text-cream/90 border-gold">
                  "{featuredStory.snippet}"
                </blockquote>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          layout 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence>
            {restStories.length > 0 ? (
              restStories.map((story) => (
                <StoryCard key={story.id} story={story} onClick={() => setSelectedStory(story)} />
              ))
            ) : filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center col-span-full"
              >
                <div className="p-8 border bg-gradient-to-r from-cream/10 to-teal-100/5 rounded-3xl border-cream/20">
                  <p className="text-lg text-cream/70">No stories found in this domain.</p>
                  <p className="mt-2 text-sm text-cream/50">Try selecting a different domain filter.</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

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