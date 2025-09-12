import { motion } from "framer-motion";
import { ChevronRight, LinkedinIcon, CloseIcon } from "../components/icons";

const StoryModal = ({ story, onClose }) => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-gradient-to-br from-teal-950/95 to-teal-900/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-3xl p-6 my-8 border shadow-2xl bg-gradient-to-br from-cream/15 to-teal-100/10 text-cream rounded-3xl md:p-8 backdrop-blur-xl border-cream/20"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute p-2 transition-all duration-300 rounded-full top-4 right-4 text-cream/70 hover:text-cream hover:bg-cream/10 group"
        >
          <motion.svg 
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        </button>

        <div className="relative mb-6">
          <img
            src={story.image}
            alt={story.name}
            className="object-cover w-32 h-32 mx-auto mb-6 -mt-20 border-4 rounded-full shadow-2xl border-gold ring-4 ring-gold/20"
          />
        </div>

        <div className="mb-6 text-center">
          <h2 className="mb-2 text-3xl font-bold text-amber-50 bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
            {story.name}
          </h2>
          <p className="mb-3 text-sm text-cream/70">{story.title}</p>
          <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full text-amber-50 bg-gradient-to-r from-gold to-pink">
            {story.domain}
          </span>
        </div>

        <div className="space-y-6">
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-gold to-pink"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-center text-cream/90">
            {story.fullStory}
          </p>

          {story.linkedin && (
            <div className="text-center">
              <a
                href={story.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 border rounded-full bg-gradient-to-r from-gold/20 to-pink/20 text-gold hover:from-gold/30 hover:to-pink/30 border-gold/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryModal;