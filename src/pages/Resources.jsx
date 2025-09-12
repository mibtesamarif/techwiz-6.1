import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resources from "../data/resources.json";
import Breadcrumbs from "../components/Breadcrumbs";
import ResourceCard from "../components/ResourceCard";
import { addBookmark, getBookmarks } from "../utils/storage";

const Resources = () => {
  const [tab, setTab] = useState("All");
  const [message, setMessage] = useState(null);

  const types = ["All", ...new Set(resources.map((r) => r.type))];

  const filtered =
    tab === "All" ? resources : resources.filter((r) => r.type === tab);

  const handleAddBookmark = (resource) => {
    addBookmark({
      id: `resource-${resource.id}`,
      title: resource.title,
      type: "Resource",
      note: "",
      link: resource.link,
      createdAt: new Date().toISOString(),
    });
  };

  const showMessage = (msg) => {
    setMessage(msg);
    const timer = setTimeout(() => {
      setMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 font-sans bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-amber-50 sm:p-8">
      <div className="w-full max-w-7xl">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="my-8">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight md:text-5xl text-amber-50 drop-shadow-lg">
            Resource Library
          </h1>
          <p className="max-w-2xl text-teal-100 opacity-90">
            Explore our curated collection of articles, eBooks, and webinars to boost your career.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 p-4 mb-10 shadow-xl bg-amber-50/10 backdrop-blur-lg rounded-2xl ring-1 ring-amber-100/20">
          {types.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setTab(t)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${tab === t
                  ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-teal-900 shadow-lg font-semibold"
                  : "bg-teal-700/50 text-amber-50 hover:bg-teal-600/60 border border-teal-500/30"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((res) => <ResourceCard key={res.id} resource={res} onBookmark={handleAddBookmark} showMessage={showMessage} />)
            ) : (
              <p className="py-10 text-lg text-center text-teal-200 col-span-full">No resources found for this category.</p>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.8 }}
              className="fixed z-50 px-8 py-4 font-bold text-teal-900 border-2 rounded-full shadow-2xl bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-400 border-amber-300"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resources;