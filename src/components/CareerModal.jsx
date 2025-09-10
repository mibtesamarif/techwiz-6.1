import { motion } from "framer-motion";

const CareerModal = ({ career, onClose, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-white/25 border border-white/30 text-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative backdrop-blur-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="relative mb-8">
          <img
            src={career.image}
            alt={career.title}
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {career.industry}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-3 text-purple-200">
              {career.title}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {career.description}
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Salary Range</h3>
              <span className="text-sm text-purple-300 font-semibold bg-purple-500/20 px-3 py-1 rounded-full">
                {Math.round(progress)}% of market max
              </span>
            </div>

            <p className="text-3xl font-bold text-green-300 mb-4">
              ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
            </p>

            <div className="w-full bg-gray-700/50 rounded-full h-4 shadow-inner">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {career.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education Required
              </h3>
              <p className="text-gray-200 text-lg font-medium">
                {career.education}
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onBookmark(career)}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
              Bookmark Career
            </button>

            <button
              onClick={onClose}
              className="px-6 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default CareerModal;