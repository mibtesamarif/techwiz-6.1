import { motion } from "framer-motion";
import { ChevronRight } from "../components/icons";

const typeIcons = {
  Article: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  ),
  eBook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  ),
  Checklist: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  ),
  Webinar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <rect x="2" y="3" width="20" height="15" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
};

const ResourceCard = ({ resource, onBookmark, showMessage }) => {
  const handleBookmark = (e) => {
    e.stopPropagation();
    onBookmark(resource);
    showMessage("Bookmarked!");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex flex-col p-6 transition-all duration-500 border shadow-xl bg-gradient-to-br from-amber-50/15 to-amber-50/5 backdrop-blur-lg rounded-3xl ring-1 ring-amber-100/20 hover:shadow-2xl hover:ring-amber-200/30 group border-teal-500/10"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 transition-all duration-300 bg-teal-700/30 rounded-2xl ring-1 ring-amber-400/30 group-hover:bg-teal-600/40">
          {typeIcons[resource.type] || (
            <span className="text-2xl text-amber-400">📁</span>
          )}
        </div>
        <div className="flex-1">
          <h2 className="mb-1 text-lg font-bold transition-colors duration-300 text-amber-50 group-hover:text-amber-100">
            {resource.title}
          </h2>
          <span className="px-3 py-1 text-xs font-semibold rounded-full text-amber-400 bg-teal-800/50">
            {resource.type}
          </span>
        </div>
      </div>

      <p className="flex-grow mb-6 text-sm leading-relaxed text-teal-100 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        {resource.description}
      </p>

      <div className="flex items-center justify-between pt-4 mt-auto border-t border-teal-500/20">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-semibold transition-colors duration-300 text-amber-400 hover:text-amber-300 group/link"
        >
          View Resource
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
        <button
          onClick={handleBookmark}
          className="px-5 py-2 text-sm font-bold text-teal-900 transition-all duration-300 transform border rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-400 hover:shadow-xl hover:scale-105 border-amber-300/50"
        >
          Bookmark
        </button>
      </div>
    </motion.div>
  );
};

export default ResourceCard;