import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { EducationIcon, GlobeIcon, StarIcon, MicrophoneIcon, DocumentIcon, LightbulbIcon } from "../components/icons";

const AdmissionAndCoaching = () => {
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType);
  }, []);

  const toggleUserType = () => {
    setUserType(prev => prev === "student" ? "graduate" : "student");
  };

  let heroTitle = "";
  let heroSubtitle = "";
  let contentHeading = "";
  let content = null;
  let pageName = "";

  if (userType === "student") {
    pageName = "admission";
    heroTitle = "Admission & Study Abroad";
    heroSubtitle = "Navigate your path to higher education and international opportunities with our comprehensive guides.";
    contentHeading = "Essential Education Guidelines";
    content = (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-900/20 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-teal-800/30">
          <EducationIcon />
          <h3 className="mt-6 mb-4 text-2xl font-bold text-center transition-colors duration-300 text-amber-100 group-hover:text-amber-200">
            Stream Selection (Post 10th)
          </h3>
          <ul className="space-y-4 text-teal-100/90">
            <li className="flex items-center transition-colors duration-300 group-hover:text-teal-50">
              <StarIcon />
              <span>Science → Engineering, Medicine, Research careers</span>
            </li>
            <li className="flex items-center transition-colors duration-300 group-hover:text-teal-50">
              <StarIcon />
              <span>Commerce → Business, Finance, Economics, Management</span>
            </li>
            <li className="flex items-center transition-colors duration-300 group-hover:text-teal-50">
              <StarIcon />
              <span>Arts → Humanities, Design, Social Sciences, Journalism</span>
            </li>
            <li className="flex items-center transition-colors duration-300 group-hover:text-teal-50">
              <StarIcon />
              <span>Vocational Courses → Skill-based certifications</span>
            </li>
          </ul>
        </div>

        <div className="group bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-900/20 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-teal-800/30">
          <GlobeIcon />
          <h3 className="mt-6 mb-4 text-2xl font-bold text-center transition-colors duration-300 text-amber-100 group-hover:text-amber-200">
            Study Abroad Guidelines
          </h3>
          <p className="mb-6 text-center transition-colors duration-300 text-teal-100/90 group-hover:text-teal-50">
            Planning to study abroad? Follow these steps:
          </p>
          <ol className="pl-4 space-y-3 list-decimal list-inside transition-colors duration-300 text-teal-100/90 group-hover:text-teal-50">
            <li>Research universities and courses aligned with your interests.</li>
            <li>Prepare for exams (IELTS, TOEFL, GRE, GMAT) as required.</li>
            <li>Arrange financial documents and apply for scholarships.</li>
            <li>Apply for a student visa well in advance.</li>
            <li>Join pre-departure sessions to understand culture and lifestyle abroad.</li>
          </ol>
        </div>
      </div>
    );
  } else if (userType === "graduate" || userType === "professional") {
    pageName = "coaching";
    heroTitle = "Coaching & Career Prep";
    heroSubtitle = "Prepare for your professional journey with our expert tips on interviews, resumes, and career mindset.";
    contentHeading = "Essential Career Tips";
    content = (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="group bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-900/20 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-teal-800/30">
          <MicrophoneIcon />
          <h3 className="mt-6 mb-4 text-2xl font-bold transition-colors duration-300 text-amber-100 group-hover:text-amber-200">
            Interview Tips
          </h3>
          <ul className="space-y-4 text-teal-100/90">
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-pink-300 rounded-full"></span>
              <span>Research the company and role thoroughly.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-pink-300 rounded-full"></span>
              <span>Practice common questions and mock interviews.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-pink-300 rounded-full"></span>
              <span>Dress professionally and maintain eye contact.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-pink-300 rounded-full"></span>
              <span>Prepare thoughtful questions for the interviewer.</span>
            </li>
          </ul>
        </div>

        <div className="group bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-900/20 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-teal-800/30">
          <DocumentIcon />
          <h3 className="mt-6 mb-4 text-2xl font-bold transition-colors duration-300 text-amber-100 group-hover:text-amber-200">
            Resume Guidelines
          </h3>
          <ul className="space-y-4 text-teal-100/90">
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-teal-300 rounded-full"></span>
              <span>Keep your resume concise and achievement-focused.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-teal-300 rounded-full"></span>
              <span>Use action verbs and quantify your results.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-teal-300 rounded-full"></span>
              <span>Tailor your resume for each specific job.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-teal-300 rounded-full"></span>
              <span>Ensure all contact details and links are up-to-date.</span>
            </li>
          </ul>
        </div>

        <div className="group bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-900/20 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-teal-800/30">
          <LightbulbIcon />
          <h3 className="mt-6 mb-4 text-2xl font-bold transition-colors duration-300 text-amber-100 group-hover:text-amber-200">
            Mindset & Networking
          </h3>
          <ul className="space-y-4 text-teal-100/90">
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-amber-300"></span>
              <span>Cultivate a growth mindset and embrace challenges.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-amber-300"></span>
              <span>Build your professional network consistently.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-amber-300"></span>
              <span>Seek mentorship and learn from others' experiences.</span>
            </li>
            <li className="flex items-start transition-colors duration-300 group-hover:text-teal-50">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-amber-300"></span>
              <span>Stay informed about industry trends.</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 font-sans bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-amber-50 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleUserType}
            className="px-6 py-3 font-semibold transition-all duration-300 shadow-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-teal-950 rounded-xl hover:shadow-amber-500/25"
          >
            Switch to {userType === "student" ? "Career Coaching" : "Admission"} View
          </button>
        </div>

        <div className="flex justify-center">
          {userType && <Breadcrumbs page={pageName} />}
        </div>

        <div className="relative flex flex-col items-center p-8 overflow-hidden text-center border shadow-2xl bg-gradient-to-r from-teal-900/40 via-teal-800/30 to-teal-900/40 backdrop-blur-md rounded-3xl md:p-12 border-teal-600/20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-pink-500/5 opacity-60"></div>
          <div className="relative z-10">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl text-amber-50">
              {heroTitle}
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-teal-100/90">
              {heroSubtitle}
            </p>
          </div>
        </div>

        <section className="relative">
          {contentHeading && (
            <h2 className="mb-12 text-3xl font-bold text-center text-amber-100">
              {contentHeading}
            </h2>
          )}
          {content}
        </section>

        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionAndCoaching;