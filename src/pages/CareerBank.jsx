// // src/pages/CareerBank.jsx
// import { useEffect, useState } from "react";
// import careersData from "../data/careers.json";
// import CareerCard from "../components/CareerCard";

// const CareerBank = () => {
//   const [careers, setCareers] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [sort, setSort] = useState("none");

//   useEffect(() => {
//     setCareers(careersData); // load JSON into state
//   }, []);

//   const industries = [
//     "all",
//     ...new Set(careersData.map((c) => c.industry)),
//   ];

//   // Filtering
//   const filteredCareers =
//     filter === "all"
//       ? careers
//       : careers.filter((career) => career.industry === filter);

//   // Sorting
//   const sortedCareers = [...filteredCareers].sort((a, b) => {
//     if (sort === "alpha") {
//       return a.title.localeCompare(b.title);
//     }
//     if (sort === "salary") {
//       return (a.salaryMin || 0) - (b.salaryMin || 0);
//     }
//     return 0;
//   });

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Career Bank</h1>

//       {/* Filters + Sorting */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <div>
//           <label className="block text-sm font-medium mb-1">Industry</label>
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="px-3 py-2 border rounded-md"
//           >
//             {industries.map((ind) => (
//               <option key={ind} value={ind}>
//                 {ind.charAt(0).toUpperCase() + ind.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Sort by</label>
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="px-3 py-2 border rounded-md"
//           >
//             <option value="none">-- None --</option>
//             <option value="alpha">Alphabetical</option>
//             <option value="salary">Salary (Low → High)</option>
//           </select>
//         </div>
//       </div>

//       {/* Career Cards */}
//       {sortedCareers.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sortedCareers.map((career) => (
//             <CareerCard key={career.id} career={career} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600">No careers found for this filter.</p>
//       )}
//     </div>
//   );
// };

// export default CareerBank;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Local Storage Utility Functions ---
const getBookmarks = () => {
  try {
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (e) {
    console.error("Failed to get bookmarks from localStorage:", e);
    return [];
  }
};

const addBookmark = (bookmark) => {
  try {
    const bookmarks = getBookmarks();
    if (!bookmarks.some((b) => b.id === bookmark.id)) {
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  } catch (e) {
    console.error("Failed to add bookmark to localStorage:", e);
  }
};

const removeBookmark = (id) => {
  try {
    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter((b) => b.id !== id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } catch (e) {
    console.error("Failed to remove bookmark from localStorage:", e);
  }
};

const clearBookmarks = () => {
  try {
    localStorage.removeItem("bookmarks");
  } catch (e) {
    console.error("Failed to clear bookmarks from localStorage:", e);
  }
};

const updateBookmarkNote = (id, note) => {
  try {
    const bookmarks = getBookmarks();
    const updated = bookmarks.map((b) =>
      b.id === id ? { ...b, note } : b
    );
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update bookmark note in localStorage:", e);
  }
};

// Data - Move this to ../data/careers.json in your project
const careers = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Designs and develops software applications and systems.",
    industry: "Technology",
    skills: ["JavaScript", "Python", "Problem Solving", "Teamwork"],
    education: "Bachelor's in Computer Science",
    salaryMin: 40000,
    salaryMax: 120000,
    image: "https://placehold.co/800x600/6d28d9/ffffff?text=Tech"
  },
  {
    id: 2,
    title: "Nurse",
    description: "Provides direct patient care in various medical settings.",
    industry: "Healthcare",
    skills: ["Compassion", "Medical Knowledge", "Patience"],
    education: "Nursing Degree",
    salaryMin: 30000,
    salaryMax: 70000,
    image: "https://placehold.co/800x600/f59e0b/ffffff?text=Health"
  },
  {
    id: 3,
    title: "Graphic Designer",
    description: "Creates visual concepts to communicate ideas and inspire consumers.",
    industry: "Creative Arts",
    skills: ["Photoshop", "Illustrator", "Creativity", "Typography"],
    education: "Bachelor's in Graphic Design",
    salaryMin: 35000,
    salaryMax: 85000,
    image: "https://placehold.co/800x600/22c55e/ffffff?text=Design"
  },
  {
    id: 4,
    title: "Data Scientist",
    description: "Analyzes large datasets to identify patterns and insights.",
    industry: "Technology",
    skills: ["Statistics", "Machine Learning", "R", "Python"],
    education: "Master's or Ph.D.",
    salaryMin: 90000,
    salaryMax: 180000,
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=Data"
  },
  {
    id: 5,
    title: "Marketing Manager",
    description: "Develops and executes marketing campaigns to promote products.",
    industry: "Business",
    skills: ["Market Analysis", "Communication", "Strategic Planning"],
    education: "Bachelor's in Marketing or Business",
    salaryMin: 60000,
    salaryMax: 130000,
    image: "https://placehold.co/800x600/ef4444/ffffff?text=Marketing"
  }
];

const industries = ["All", ...new Set(careers.map(c => c.industry))];

// Icons
const ChevronRight = () => (
  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const SearchIcon = () => (
  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    <rect width="20" height="14" x="2" y="6" rx="2"/>
  </svg>
);

// Toast Component
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="fixed bottom-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-50"
    >
      {message}
    </motion.div>
  );
};

// Breadcrumbs Component
const Breadcrumbs = () => (
  <nav className="text-sm my-4">
    <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10">
      <li className="text-gray-300 hover:text-white transition-colors duration-200">
        <a href="/">Home</a>
      </li>
      <li className="flex items-center space-x-2">
        <ChevronRight />
        <span className="capitalize text-white font-semibold">career bank</span>
      </li>
    </ol>
  </nav>
);

// Career Card Component - Enhanced visibility
const CareerCard = ({ career, onClick, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <div
      onClick={onClick}
      className="bg-white/20 border border-white/20 text-white rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-3xl hover:border-white/40 group"
    >
      <div className="flex-grow">
        <div className="relative mb-6">
          <img
            src={career.image}
            alt={career.title}
            className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(career);
            }}
            className="absolute top-3 right-3 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
            title="Bookmark"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>

          {/* Industry Badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {career.industry}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
          {career.title}
        </h2>
        <p className="text-sm text-gray-200 leading-relaxed mb-4">
          {career.description}
        </p>

        {/* Skills Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {career.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 text-purple-200 px-2 py-1 rounded-full text-xs font-medium border border-white/20"
              >
                {skill}
              </span>
            ))}
            {career.skills.length > 3 && (
              <span className="text-purple-300 text-xs font-medium self-center">
                +{career.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-white/20 pt-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-300 font-medium">Expected Salary</span>
          <span className="text-xs text-purple-300 font-semibold">
            {Math.round(progress)}% of max
          </span>
        </div>

        <p className="text-lg font-bold text-green-300 mb-2">
          ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
        </p>

        <div className="w-full bg-gray-700/50 rounded-full h-3 shadow-inner">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg transition-all duration-500 hover:shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Education: {career.education}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
    </div>
  );
};

// Career Modal Component - Enhanced design
const CareerModal = ({ career, onClose, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/25 border border-white/30 text-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative backdrop-blur-lg transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Header Image */}
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

        {/* Content */}
        <div className="space-y-6">
          {/* Title and Description */}
          <div>
            <h2 className="text-4xl font-bold mb-3 text-purple-200">
              {career.title}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {career.description}
            </p>
          </div>

          {/* Salary Section */}
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

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills */}
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

            {/* Education */}
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

          {/* Action Buttons */}
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
      </div>
    </div>
  );
};

// Main App Component
const CareerBank = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleBookmark = (career) => {
    addBookmark({ id: career.id, title: career.title, type: "Career" });
    setToastMessage(`Bookmarked "${career.title}"!`);
    setShowToast(true);
  };

  // Filter and sort careers
  const filteredCareers = careers
    .filter(career => {
      const matchesIndustry = industry === "All" || career.industry === industry;
      const matchesSearch = career.title.toLowerCase().includes(search.toLowerCase()) ||
        career.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
      return matchesIndustry && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "salary") return b.salaryMax - a.salaryMax;
      return 0;
    });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8">
      <AnimatePresence>
        {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto py-10">
        <Breadcrumbs />

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Career Bank
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore a world of possibilities. Filter by industry, search for skills, and discover the perfect career path for you.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or skill..."
              className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all pl-12"
            />
            <SearchIcon />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all appearance-none pr-10"
            >
              {industries.map(ind => (
                <option key={ind} value={ind} className="bg-gray-800 text-gray-200">
                  {ind}
                </option>
              ))}
            </select>
            <BriefcaseIcon />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all appearance-none pr-10"
            >
              <option value="none" className="bg-gray-800 text-gray-200">Sort by</option>
              <option value="title" className="bg-gray-800 text-gray-200">Title (A–Z)</option>
              <option value="salary" className="bg-gray-800 text-gray-200">Salary (High → Low)</option>
            </select>
          </div>
        </div>

        {/* Careers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCareers.length > 0 ? (
            filteredCareers.map(career => (
              <div key={career.id}>
                <CareerCard
                  career={career}
                  onClick={() => setSelectedCareer(career)}
                  onBookmark={handleBookmark}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-10">
              No careers found matching your criteria.
            </p>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCareer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CareerModal
                career={selectedCareer}
                onClose={() => setSelectedCareer(null)}
                onBookmark={handleBookmark}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerBank;
