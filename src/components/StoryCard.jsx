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
      className="flex flex-col p-6 transition-all duration-300 shadow-lg cursor-pointer bg-gradient-to-br from-cream/10 to-teal-100/5 backdrop-blur-lg rounded-3xl ring-1 ring-cream/20 hover:shadow-2xl group hover:ring-gold/30"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={story.image}
          alt={story.name}
          className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
      </div>
      <span className="inline-block px-4 py-1 mb-2 text-xs font-semibold rounded-full text-amber-50 bg-gradient-to-r from-gold to-pink w-fit">
        {story.domain}
      </span>
      <h2 className="mb-1 text-xl font-bold transition-colors text-cream group-hover:text-gold">{story.name}</h2>
      <p className="mb-2 text-sm text-cream/70">{story.title}</p>
      <blockquote className="flex-grow pl-3 mt-2 italic leading-relaxed border-l-4 text-cream/80 border-gold">
        "{story.snippet}"
      </blockquote>
    </motion.div>
  );
};

export default StoryCard;
