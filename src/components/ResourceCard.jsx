import { motion } from "framer-motion";
import { ChevronRight } from "../components/icons";

const typeIcons = {
  Article: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
  ),
  eBook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  ),
  Checklist: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
  ),
  Webinar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
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
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4 text-purple-400">
        <span className="text-3xl">{typeIcons[resource.type] || "📁"}</span>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white">{resource.title}</h2>
          <span className="text-xs font-semibold text-purple-300">{resource.type}</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-4 flex-grow">
        {resource.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 text-sm font-semibold hover:underline"
        >
          View Resource
        </a>
        <button
          onClick={handleBookmark}
          className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition"
        >
          Bookmark
        </button>
      </div>
    </motion.div>
  );
};
export default ResourceCard;