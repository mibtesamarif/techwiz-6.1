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
      <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((opt, idx) => (
          <motion.button
            key={idx}
            onClick={() => onAnswer(opt.value)}
            className="block w-full px-6 py-4 text-lg text-left text-gray-200 transition-all duration-300 transform border-2 rounded-xl bg-white/10 border-white/20 hover:bg-teal-700 hover:text-white hover:border-teal-950 hover:scale-105"
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