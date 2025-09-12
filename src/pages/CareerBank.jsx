import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { SearchIcon, BriefcaseIcon } from "../components/icons";
import career from "../data/careers.json";
import { getBookmarks, addBookmark } from "../utils/storage";
import Toast from "../components/Toast";
import CareerCardSkeleton from "../components/CareerCardSkeleton";
import CareerCard from "../components/CareerCard";
import CareerModal from "../components/CareerModal";

const industries = ["All", ...new Set(career.map(c => c.industry))];

const CareerBank = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [username, setUsername] = useState((localStorage.getItem("username")));
  const [userCategory, setUserCategory] = useState((localStorage.getItem("userType")));


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleBookmark = (career) => {
    addBookmark({ id: career.id, title: career.title, type: "Career" });
    setToastMessage(`Bookmarked "${career.title}"!`);
    setShowToast(true);
  };

  const filteredCareer = career
    .filter(career => {
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
    <div className="min-h-screen p-4 font-sans bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-cream sm:p-8">
      <style jsx>{`
        .text-cream { color: #FFF8E1; }
        .bg-cream { background-color: #FFF8E1; }
        .text-gold { color: #FFD700; }
        .bg-gold { background-color: #FFD700; }
        .text-pink-400 { color: #F48FB1; }
        .bg-pink-400 { background-color: #F48FB1; }
        .from-gold { --tw-gradient-from: #FFD700; }
        .to-pink-400 { --tw-gradient-to: #F48FB1; }
        .from-teal-600 { --tw-gradient-from: #0d9488; }
        .to-teal-700 { --tw-gradient-to: #0f766e; }
        .ring-gold { --tw-ring-color: #FFD700; }
        .border-gold { border-color: #FFD700; }
        .hover\\:border-gold\\/40:hover { border-color: rgba(255, 215, 0, 0.4); }
        .hover\\:ring-gold\\/40:hover { --tw-ring-color: rgba(255, 215, 0, 0.4); }
        .bg-teal-950 { background-color: #042f2e; }
        .bg-teal-900 { background-color: #134e4a; }
        .bg-teal-800 { background-color: #115e59; }
        .text-teal-100 { color: #ccfbf1; }
        .text-teal-200 { color: #99f6e4; }
        .text-teal-300 { color: #5eead4; }
      `}</style>

      <AnimatePresence>
        {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
      </AnimatePresence>

      <div className="py-10 mx-auto max-w-7xl">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="my-8">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight md:text-5xl text-cream">
            {username ? `Hey, ${username}!` : 'Career Bank'}
          </h1>
          <p className="max-w-2xl text-teal-200">
            {username ? `Based on your profile, here are careers for: ${userCategory}` : 'Explore a world of possibilities and discover your next step.'}
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 mb-10 border shadow-2xl md:flex-row md:items-center bg-cream/8 backdrop-blur-lg rounded-2xl ring-1 ring-cream/20 border-cream/10">
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or skill..."
              className="w-full px-4 py-3 pl-12 placeholder-teal-300 transition-all border bg-teal-900/30 border-teal-600/40 rounded-xl text-cream focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none backdrop-blur-sm"
            />
            <SearchIcon />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 pr-10 transition-all border appearance-none bg-teal-900/30 border-teal-600/40 rounded-xl text-cream focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none backdrop-blur-sm"
            >
              {industries.map(ind => (
                <option key={ind} value={ind} className="bg-teal-900 text-cream">
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
              className="w-full px-4 py-3 pr-10 transition-all border appearance-none bg-teal-900/30 border-teal-600/40 rounded-xl text-cream focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none backdrop-blur-sm"
            >
              <option value="none" className="bg-teal-900 text-cream">Sort by</option>
              <option value="title" className="bg-teal-900 text-cream">Title (A–Z)</option>
              <option value="salary" className="bg-teal-900 text-cream">Salary (High → Low)</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <CareerCardSkeleton />
            <CareerCardSkeleton />
            <CareerCardSkeleton />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCareer.length > 0 ? (
              filteredCareer.map(career => (
                <div key={career.id}>
                  <CareerCard
                    career={career}
                    onClick={() => setSelectedCareer(career)}
                    onBookmark={handleBookmark}
                  />
                </div>
              ))
            ) : (
              <p className="py-10 text-lg text-center text-teal-300 col-span-full">
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