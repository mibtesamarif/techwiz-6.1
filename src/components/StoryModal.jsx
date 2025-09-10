import { motion } from "framer-motion";
import { ChevronRight, LinkedInIcon, CloseIcon } from "../components/icons";

const StoryModal = ({ story, onClose }) => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white/10 text-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl w-full relative backdrop-blur-lg border border-white/10 my-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors p-2 rounded-full"
        >
          <CloseIcon />
        </button>

        <img
          src={story.image}
          alt={story.name}
          className="w-28 h-28 object-cover rounded-full shadow-lg mx-auto -mt-20 mb-6 border-4 border-purple-500"
        />

        <h2 className="text-3xl font-bold mb-1 text-purple-200 text-center">{story.name}</h2>
        <p className="text-sm text-gray-400 mb-4 text-center">{story.title}</p>
        <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-6 bg-purple-500 text-white mx-auto`}>
          {story.domain}
        </span>
        <p className="text-gray-300 leading-relaxed text-lg">{story.fullStory}</p>

        {story.linkedin && (
          <a
            href={story.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <LinkedInIcon /> View LinkedIn Profile
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};
export default StoryModal;