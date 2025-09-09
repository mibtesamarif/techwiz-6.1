// // src/pages/Coaching.jsx

// import Breadcrumbs from "../components/Breadcrumbs";

// const Coaching = () => {
//   return (
//     <div className="space-y-8">
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Coaching & Career Prep</h1>

//       {/* Interview Tips */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Interview Tips</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>Research the company and role before the interview.</li>
//           <li>Practice common interview questions and answers.</li>
//           <li>Dress professionally and maintain confident body language.</li>
//           <li>Listen carefully and answer concisely.</li>
//           <li>Prepare thoughtful questions to ask the interviewer.</li>
//         </ul>
//       </section>

//       {/* Resume Guidelines */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Resume Guidelines</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>Keep your resume concise (1–2 pages).</li>
//           <li>Highlight achievements, not just responsibilities.</li>
//           <li>Use action verbs like “Led”, “Created”, “Achieved”.</li>
//           <li>Tailor your resume to match each job application.</li>
//           <li>Include updated contact details and LinkedIn profile.</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Coaching;



import React from "react";
import { motion } from "framer-motion";

// Helper function for a static breadcrumb to avoid react-router-dom dependency
const Breadcrumbs = () => (
  <nav className="text-sm my-4">
    <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10">
      <li className="text-gray-300 hover:text-white transition-colors duration-200">
        <a href="/">Home</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="h-4 w-4 text-gray-400">/</span>
        <span className="capitalize text-white font-semibold">coaching</span>
      </li>
    </ol>
  </nav>
);

// Inline SVG Icons
const MicrophoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 18a6 6 0 000-12v0a6 6 0 00-6 6h12a6 6 0 00-6-6v0a6 6 0 000 12z" />
    <path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2z" />
  </svg>
);


// Main Coaching App
const Coaching = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-gray-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Coaching & Career Prep
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Prepare for your professional journey with our expert tips on interviews, resumes, and career mindset.
          </p>
        </motion.div>

        {/* Coaching Tips Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold mb-8 text-center text-gray-200"
          >
            Essential Career Tips
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interview Tips Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MicrophoneIcon />
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white">Interview Tips</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3"></span>
                  <span>Research the company and role thoroughly.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3"></span>
                  <span>Practice common questions and mock interviews.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3"></span>
                  <span>Dress professionally and maintain eye contact.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3"></span>
                  <span>Prepare thoughtful questions for the interviewer.</span>
                </li>
              </ul>
            </motion.div>

            {/* Resume Guidelines Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <DocumentIcon />
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white">Resume Guidelines</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></span>
                  <span>Keep your resume concise and achievement-focused.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></span>
                  <span>Use action verbs and quantify your results.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></span>
                  <span>Tailor your resume for each specific job.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></span>
                  <span>Ensure all contact details and links are up-to-date.</span>
                </li>
              </ul>
            </motion.div>

            {/* Mindset & Networking Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <LightbulbIcon />
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white">Mindset & Networking</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></span>
                  <span>Cultivate a growth mindset and embrace challenges.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></span>
                  <span>Build your professional network consistently.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></span>
                  <span>Seek mentorship and learn from others' experiences.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></span>
                  <span>Stay informed about industry trends.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Coaching;

