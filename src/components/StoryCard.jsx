import { motion } from "framer-motion";

const StoryCard = ({ story, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
    >
      <img
        src={story.image}
        alt={story.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-2 bg-purple-500 text-white`}>
        {story.domain}
      </span>
      <h2 className="text-xl font-bold text-white mb-1">{story.name}</h2>
      <p className="text-sm text-gray-400 mb-2">{story.title}</p>
      <blockquote className="mt-2 text-gray-300 italic border-l-4 border-purple-500 pl-3 leading-relaxed flex-grow">
        “{story.snippet}”
      </blockquote>
    </motion.div>
  );
};
export default StoryCard;
