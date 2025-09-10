import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { EducationIcon, GlobeIcon, StarIcon, MicrophoneIcon, DocumentIcon, LightbulbIcon } from "../components/icons";


const AdmissionAndCoaching = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Read the userType from local storage on component mount
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType);
  }, []);

  // Conditional content based on user type
  let heroTitle = "";
  let heroSubtitle = "";
  let contentHeading = "";
  let content = null;
  let pageName = "";

  // Check for 'student' user type
  if (userType === "student") {
    pageName = "admission";
    heroTitle = "Admission & Study Abroad";
    heroSubtitle = "Navigate your path to higher education and international opportunities with our comprehensive guides.";
    contentHeading = "Essential Education Guidelines";
    content = (
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
    );
  } if (userType === "graduate" || userType === "professional") {
    // Check for 'graduate' or 'working professional' user types
    pageName = "coaching";
    heroTitle = "Coaching & Career Prep";
    heroSubtitle = "Prepare for your professional journey with our expert tips on interviews, resumes, and career mindset.";
    contentHeading = "Essential Career Tips";
    content = (
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
    );
   }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-gray-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center">
          {userType && <Breadcrumbs page={pageName} />}
          </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {heroTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
        </motion.div>

        {/* Dynamic Content Grid */}
        <section>
          {contentHeading && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold mb-8 text-center text-gray-200"
            >
              {contentHeading}
            </motion.h2>
          )}
          {content}
        </section>
      </div>
    </div>
  );
};

export default AdmissionAndCoaching;
