import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resources from "../data/resources.json";
import { ChevronRight } from "../components/icons";
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
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Resource Library
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our curated collection of articles, eBooks, and webinars to boost your career.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          {types.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${tab === t
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((res) => <ResourceCard key={res.id} resource={res} onBookmark={handleAddBookmark} showMessage={showMessage} />)
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No resources found for this category.</p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Box */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="fixed bottom-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-50"
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
