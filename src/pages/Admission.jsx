// // src/pages/Admission.jsx

// import Breadcrumbs from "../components/Breadcrumbs";

// const Admission = () => {
//   return (
//     <div className="space-y-8">
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Admission & Study Abroad</h1>

//       {/* Stream Selection */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Stream Selection (Post 10th)</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>Science → Engineering, Medicine, Research careers</li>
//           <li>Commerce → Business, Finance, Economics, Management</li>
//           <li>Arts → Humanities, Design, Social Sciences, Journalism</li>
//           <li>Vocational Courses → Skill-based certifications</li>
//         </ul>
//       </section>

//       {/* Study Abroad Guidelines */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Study Abroad Guidelines</h2>
//         <p className="text-gray-700 mb-2">
//           Planning to study abroad? Follow these steps:
//         </p>
//         <ol className="list-decimal list-inside text-gray-700 space-y-2">
//           <li>Research universities and courses aligned with your interests.</li>
//           <li>Prepare for exams (IELTS, TOEFL, GRE, GMAT) as required.</li>
//           <li>Arrange financial documents and apply for scholarships if possible.</li>
//           <li>Apply for a student visa well in advance.</li>
//           <li>Join pre-departure sessions to understand culture and lifestyle abroad.</li>
//         </ol>
//       </section>
//     </div>
//   );
// };

// export default Admission;


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
        <span className="capitalize text-white font-semibold">admission</span>
      </li>
    </ol>
  </nav>
);

// Inline SVG Icons
const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20v2.5a2.5 2.5 0 01-2.5 2.5H6.5A2.5 2.5 0 014 19.5z" />
    <path d="M20 17V8l-8-4-8 4v9" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-fuchsia-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


// Main Admission App
const Admission = () => {
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
            Admission & Study Abroad
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate your path to higher education and international opportunities with our comprehensive guides.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold mb-8 text-center text-gray-200"
          >
            Essential Education Guidelines
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stream Selection Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <EducationIcon />
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white text-center">Stream Selection (Post 10th)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <StarIcon />
                  <span>Science → Engineering, Medicine, Research careers</span>
                </li>
                <li className="flex items-center">
                  <StarIcon />
                  <span>Commerce → Business, Finance, Economics, Management</span>
                </li>
                <li className="flex items-center">
                  <StarIcon />
                  <span>Arts → Humanities, Design, Social Sciences, Journalism</span>
                </li>
                <li className="flex items-center">
                  <StarIcon />
                  <span>Vocational Courses → Skill-based certifications</span>
                </li>
              </ul>
            </motion.div>

            {/* Study Abroad Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <GlobeIcon />
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white text-center">Study Abroad Guidelines</h3>
              <p className="text-gray-300 mb-4 text-center">
                Planning to study abroad? Follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-3 pl-4">
                <li>Research universities and courses aligned with your interests.</li>
                <li>Prepare for exams (IELTS, TOEFL, GRE, GMAT) as required.</li>
                <li>Arrange financial documents and apply for scholarships.</li>
                <li>Apply for a student visa well in advance.</li>
                <li>Join pre-departure sessions to understand culture and lifestyle abroad.</li>
              </ol>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admission;
