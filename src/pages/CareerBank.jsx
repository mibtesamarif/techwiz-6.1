import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { SearchIcon, BriefcaseIcon, ChevronRight } from "../components/icons";
import careers from "../data/careers.json";
import { getBookmarks, addBookmark } from "../utils/storage";
import Toast from "../components/Toast";
import CareerCardSkeleton from "../components/CareerCardSkeleton";
import CareerCard from "../components/CareerCard";
import CareerModal from "../components/CareerModal";

const industries = ["All", ...new Set(careers.map(c => c.industry))];

const CareerBank = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [username, setUsername] = useState("");
  const [userCategory, setUserCategory] = useState("Student");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      
      // Get saved category from local storage
      const storedCategory = localStorage.getItem("selectedCategory");
      if (storedCategory) {
        setIndustry(storedCategory);
      }

      // Get saved user category (e.g., student, graduate)
      const storedUserCategory = localStorage.getItem("userCategory");
      if (storedUserCategory) {
        setUserCategory(storedUserCategory);
      } else {
        // Fallback for new users or if data is missing
        setUserCategory("Student"); 
      }
      
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, 1500);
  }, []);

  const handleBookmark = (career) => {
    addBookmark({ id: career.id, title: career.title, type: "Career" });
    setToastMessage(`Bookmarked "${career.title}"!`);
    setShowToast(true);
  };

  // Filter and sort careers
  const filteredCareers = careers
    .filter(career => {
      // Filter based on the user's category stored in local storage
      const matchesCategory = career.roles.includes(userCategory);
      
      const matchesIndustry = industry === "All" || career.industry === industry;
      const matchesSearch = career.title.toLowerCase().includes(search.toLowerCase()) ||
        career.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
      
      return matchesCategory && matchesIndustry && matchesSearch;
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
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            {username ? `Hey, ${username}!` : 'Career Bank'}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            {username ? `Based on your profile, here are careers for: ${userCategory}` : 'Explore a world of possibilities and discover your next step.'}
          </p>
        </div>

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

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CareerCardSkeleton />
            <CareerCardSkeleton />
            <CareerCardSkeleton />
          </div>
        ) : (
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
        )}

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