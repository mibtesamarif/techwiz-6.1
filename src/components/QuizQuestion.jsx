import { motion } from "framer-motion";

const QuizQuestion = ({ question, onAnswer }) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((opt, idx) => (
          <motion.button
            key={idx}
            onClick={() => onAnswer(opt.value)}
            className="block w-full text-left px-6 py-4 rounded-xl text-lg
                       bg-white/10 text-gray-200 border-2 border-white/20
                       hover:bg-purple-600 hover:text-white hover:border-purple-600
                       transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
export default QuizQuestion;