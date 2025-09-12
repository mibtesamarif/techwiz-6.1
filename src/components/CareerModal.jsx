import { motion } from "framer-motion";

const CareerModal = ({ career, onClose, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-teal-900/30 border border-cream/30 text-cream rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative backdrop-blur-lg max-h-[90vh] overflow-y-auto ring-2 ring-gold/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute p-2 text-teal-200 transition-colors duration-200 rounded-full top-6 right-6 hover:text-cream hover:bg-cream/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="relative mb-8">
          <img
            src={career.image}
            alt={career.title}
            className="object-cover w-full h-64 shadow-lg rounded-2xl"
          />
          <div className="absolute px-4 py-2 text-sm font-bold rounded-full shadow-lg text-amber-50 top-4 left-4 bg-gradient-to-r from-gold to-pink-400">
            {career.industry}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-3 text-4xl font-bold text-gold">
              {career.title}
            </h2>
            <p className="text-lg leading-relaxed text-teal-100">
              {career.description}
            </p>
          </div>

          <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20 ring-1 ring-gold/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-cream">Salary Range</h3>
              <span className="px-3 py-1 text-sm font-bold text-teal-900 rounded-full bg-gold">
                {Math.round(progress)}% of market max
              </span>
            </div>

            <p className="mb-4 text-3xl font-bold text-gold">
              ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
            </p>

            <div className="w-full h-4 rounded-full shadow-inner bg-teal-900/50">
              <div
                className="h-4 rounded-full shadow-lg bg-gradient-to-r from-gold to-pink-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20">
              <h3 className="flex items-center mb-4 text-lg font-semibold text-cream">
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {career.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium border rounded-full bg-gradient-to-r from-gold/20 to-pink-400/20 text-gold border-gold/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20">
              <h3 className="flex items-center mb-4 text-lg font-semibold text-cream">
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education Required
              </h3>
              <p className="text-lg font-medium text-teal-100">
                {career.education}
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onBookmark(career)}
              className="flex items-center justify-center flex-1 px-6 py-4 font-bold transition-all duration-300 transform shadow-lg text-amber-50 bg-gradient-to-r from-gold to-pink-400 rounded-xl hover:from-gold/90 hover:to-pink-400/90 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
              Bookmark Career
            </button>

            <button
              onClick={onClose}
              className="px-6 py-4 font-semibold transition-all duration-300 border bg-cream/10 text-cream rounded-xl hover:bg-cream/20 border-cream/20 hover:border-gold/40"
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