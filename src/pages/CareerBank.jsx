// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Breadcrumbs from "../components/Breadcrumbs";
// import { SearchIcon, BriefcaseIcon } from "../components/icons";
// import careers from "../data/careers.json";
// import { getBookmarks, addBookmark } from "../utils/storage";
// import Toast from "../components/Toast";
// import CareerCardSkeleton from "../components/CareerCardSkeleton";
// import CareerCard from "../components/CareerCard";
// import CareerModal from "../components/CareerModal";

// const industries = ["All", ...new Set(careers.map(c => c.industry))];

// const CareerBank = () => {
//   const [search, setSearch] = useState("");
//   const [industry, setIndustry] = useState("All");
//   const [sortBy, setSortBy] = useState("none");
//   const [selectedCareer, setSelectedCareer] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [username, setUsername] = useState("");
//   const [userCategory, setUserCategory] = useState("Student");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a network request
//     setTimeout(() => {
//       setIsLoading(false);
      
//       // Get saved category from local storage
//       const storedCategory = localStorage.getItem("selectedCategory");
//       if (storedCategory) {
//         setIndustry(storedCategory);
//       }

//       // Get saved user category (e.g., student, graduate)
//       const storedUserCategory = localStorage.getItem("userCategory");
//       if (storedUserCategory) {
//         setUserCategory(storedUserCategory);
//       } else {
//         // Fallback for new users or if data is missing
//         setUserCategory("Student"); 
//       }
      
//       const storedUsername = localStorage.getItem("username");
//       if (storedUsername) {
//         setUsername(storedUsername);
//       }
//     }, 1500);
//   }, []);

//   const handleBookmark = (career) => {
//     addBookmark({ id: career.id, title: career.title, type: "Career" });
//     setToastMessage(`Bookmarked "${career.title}"!`);
//     setShowToast(true);
//   };

//   // Filter and sort careers
//   const filteredCareers = careers
//     .filter(career => {
//       // Filter based on the user's category stored in local storage
//       const matchesCategory = career.roles.includes(userCategory);
      
//       const matchesIndustry = industry === "All" || career.industry === industry;
//       const matchesSearch = career.title.toLowerCase().includes(search.toLowerCase()) ||
//         career.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
      
//       return matchesCategory && matchesIndustry && matchesSearch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "title") return a.title.localeCompare(b.title);
//       if (sortBy === "salary") return b.salaryMax - a.salaryMax;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen p-4 font-sans text-gray-100 bg-gradient-to-br from-gray-900 to-gray-950 sm:p-8">
//       <AnimatePresence>
//         {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
//       </AnimatePresence>

//       <div className="py-10 mx-auto max-w-7xl">
//         <div className="flex justify-center">
//           <Breadcrumbs />
//         </div>

//         <div className="my-8">
//           <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
//             {username ? `Hey, ${username}!` : 'Career Bank'}
//           </h1>
//           <p className="max-w-2xl text-gray-400">
//             {username ? `Based on your profile, here are careers for: ${userCategory}` : 'Explore a world of possibilities and discover your next step.'}
//           </p>
//         </div>

//         <div className="flex flex-col gap-4 p-4 mb-10 md:flex-row md:items-center bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
//           <div className="relative w-full md:flex-1">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by title or skill..."
//               className="w-full px-4 py-3 pl-12 text-white placeholder-gray-400 transition-all border-none bg-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             />
//             <SearchIcon />
//           </div>

//           <div className="relative w-full md:w-auto">
//             <select
//               value={industry}
//               onChange={(e) => setIndustry(e.target.value)}
//               className="w-full px-4 py-3 pr-10 text-white transition-all border-none appearance-none bg-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             >
//               {industries.map(ind => (
//                 <option key={ind} value={ind} className="text-gray-200 bg-gray-800">
//                   {ind}
//                 </option>
//               ))}
//             </select>
//             <BriefcaseIcon />
//           </div>

//           <div className="relative w-full md:w-auto">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="w-full px-4 py-3 pr-10 text-white transition-all border-none appearance-none bg-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             >
//               <option value="none" className="text-gray-200 bg-gray-800">Sort by</option>
//               <option value="title" className="text-gray-200 bg-gray-800">Title (A–Z)</option>
//               <option value="salary" className="text-gray-200 bg-gray-800">Salary (High → Low)</option>
//             </select>
//           </div>
//         </div>

//         {isLoading ? (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <CareerCardSkeleton />
//             <CareerCardSkeleton />
//             <CareerCardSkeleton />
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredCareers.length > 0 ? (
//               filteredCareers.map(career => (
//                 <div key={career.id}>
//                   <CareerCard
//                     career={career}
//                     onClick={() => setSelectedCareer(career)}
//                     onBookmark={handleBookmark}
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="py-10 text-center text-gray-500 col-span-full">
//                 No careers found matching your criteria.
//               </p>
//             )}
//           </div>
//         )}

//         <AnimatePresence>
//           {selectedCareer && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <CareerModal
//                 career={selectedCareer}
//                 onClose={() => setSelectedCareer(null)}
//                 onBookmark={handleBookmark}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CareerBank;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CareerCardSkeleton from "../components/CareerCardSkeleton";
import careers from "../data/careers.json";
import { SearchIcon, BriefcaseIcon} from "../components/icons";
import { getBookmarks, addBookmark } from "../utils/storage";
import Breadcrumbs from "../components/Breadcrumbs";
import Toast from "../components/Toast";
import CareerCard from "../components/CareerCard";
import CareerModal from "../components/CareerModal";

// Mock data for demonstration
// const careers = [
//   {
//     id: 1,
//     title: "Senior Software Engineer",
//     industry: "Technology",
//     description: "Lead development of cutting-edge applications using modern frameworks and cloud technologies. Work with cross-functional teams to deliver scalable solutions.",
//     skills: ["React", "Node.js", "Python", "AWS", "Docker"],
//     salaryMin: 120000,
//     salaryMax: 180000,
//     education: "Bachelor's in Computer Science",
//     roles: ["Student", "Graduate", "Professional"],
//     image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
//   },
//   {
//     id: 2,
//     title: "Data Scientist",
//     industry: "Analytics",
//     description: "Analyze complex datasets to extract actionable insights and build predictive models that drive business decisions and innovation.",
//     skills: ["Python", "Machine Learning", "SQL", "Statistics", "Tableau"],
//     salaryMin: 100000,
//     salaryMax: 160000,
//     education: "Master's in Data Science",
//     roles: ["Graduate", "Professional"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
//   },
//   {
//     id: 3,
//     title: "UX Designer",
//     industry: "Design",
//     description: "Create intuitive and engaging user experiences through research, prototyping, and collaborative design processes.",
//     skills: ["Figma", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
//     salaryMin: 80000,
//     salaryMax: 140000,
//     education: "Bachelor's in Design",
//     roles: ["Student", "Graduate", "Professional"],
//     image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=300&fit=crop"
//   }
// ];

const industries = ["All", ...new Set(careers.map(c => c.industry))];

// Icons Components
// const SearchIcon = () => (
//   <svg className="absolute text-teal-300 -translate-y-1/2 left-4 top-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="11" cy="11" r="8"/>
//     <path d="m21 21-4.3-4.3"/>
//   </svg>
// );

// const BriefcaseIcon = () => (
//   <svg className="absolute text-teal-300 -translate-y-1/2 pointer-events-none right-4 top-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
//     <rect width="20" height="14" x="2" y="6" rx="2"/>
//   </svg>
// );

// const BookmarkIcon = () => (
//   <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
//   </svg>
// );

// const ChevronRight = () => (
//   <svg className="text-teal-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="9,18 15,12 9,6"/>
//   </svg>
// );

// Breadcrumbs Component
// const Breadcrumbs = () => {
//   return (
//     <nav className="my-4 text-sm">
//       <motion.ol className="flex items-center px-6 py-3 space-x-2 rounded-full shadow-lg bg-cream/10 backdrop-blur-md ring-1 ring-cream/20">
//         <motion.li className="text-teal-200 transition-colors duration-200 hover:text-cream">
//           <a href="/">Home</a>
//         </motion.li>
//         <motion.li className="flex items-center space-x-2">
//           <ChevronRight />
//           <span className="font-semibold capitalize text-cream">Career Bank</span>
//         </motion.li>
//       </motion.ol>
//     </nav>
//   );
// };

// Toast Component
// const Toast = ({ message, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: 50, opacity: 0 }}
//       className="fixed z-50 px-6 py-3 font-semibold rounded-full shadow-xl bottom-6 right-6 bg-gradient-to-r from-teal-600 to-teal-700 text-cream ring-2 ring-gold/30"
//     >
//       {message}
//     </motion.div>
//   );
// };

// Career Card Skeleton
// const CareerCardSkeleton = () => (
//   <div className="relative p-6 overflow-hidden border shadow-2xl bg-cream/5 border-cream/20 rounded-3xl backdrop-blur-sm animate-pulse">
//     <div className="h-48 mb-6 bg-teal-800/30 rounded-2xl"></div>
//     <div className="w-3/4 h-6 mb-3 rounded bg-teal-800/30"></div>
//     <div className="h-4 mb-4 rounded bg-teal-800/30"></div>
//     <div className="flex flex-wrap gap-2 mb-4">
//       <div className="w-20 h-6 rounded-full bg-teal-800/30"></div>
//       <div className="w-16 h-6 rounded-full bg-teal-800/30"></div>
//       <div className="w-24 h-6 rounded-full bg-teal-800/30"></div>
//     </div>
//     <div className="pt-4 border-t border-cream/20">
//       <div className="w-1/2 h-4 mb-2 rounded bg-teal-800/30"></div>
//       <div className="w-full h-4 rounded bg-teal-800/30"></div>
//     </div>
//   </div>
// );

// Career Card Component
// const CareerCard = ({ career, onClick, onBookmark }) => {
//   const salaryMid = (career.salaryMin + career.salaryMax) / 2;
//   const progress = Math.min((salaryMid / 200000) * 100, 100);

//   return (
//     <div
//       onClick={onClick}
//       className="relative flex flex-col p-6 overflow-hidden transition-all duration-300 transform border shadow-2xl cursor-pointer bg-cream/8 border-cream/25 text-cream rounded-3xl backdrop-blur-sm hover:scale-105 hover:bg-cream/12 hover:shadow-3xl hover:border-gold/40 group hover:ring-2 hover:ring-gold/20"
//     >
//       <div className="flex-grow">
//         <div className="relative mb-6">
//           <img
//             src={career.image}
//             alt={career.title}
//             className="object-cover w-full h-48 transition-shadow duration-300 shadow-lg rounded-2xl group-hover:shadow-xl"
//           />
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onBookmark(career);
//             }}
//             className="absolute p-3 transition-all duration-300 rounded-full top-3 right-3 bg-teal-900/80 backdrop-blur-md text-cream hover:bg-teal-800/90 hover:scale-110 hover:ring-2 hover:ring-gold/40"
//             title="Bookmark"
//           >
//             <BookmarkIcon />
//           </button>
          
//           <div className="absolute px-3 py-1 text-xs font-bold text-teal-900 rounded-full shadow-lg top-3 left-3 bg-gradient-to-r from-gold to-pink-400">
//             {career.industry}
//           </div>
//         </div>
        
//         <h2 className="mb-3 text-2xl font-bold transition-colors duration-300 text-cream group-hover:text-gold">
//           {career.title}
//         </h2>
//         <p className="mb-4 text-sm leading-relaxed text-teal-100">
//           {career.description}
//         </p>
        
//         <div className="mb-4">
//           <div className="flex flex-wrap gap-2">
//             {career.skills.slice(0, 3).map((skill, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 text-xs font-medium text-teal-200 transition-colors duration-200 border rounded-full bg-teal-800/30 border-teal-600/40 hover:border-gold/40"
//               >
//                 {skill}
//               </span>
//             ))}
//             {career.skills.length > 3 && (
//               <span className="self-center text-xs font-medium text-gold">
//                 +{career.skills.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="pt-4 mt-auto border-t border-cream/20">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-xs font-medium text-teal-200">Expected Salary</span>
//           <span className="px-2 py-1 text-xs font-semibold rounded-full text-gold bg-gold/10">
//             {Math.round(progress)}% of max
//           </span>
//         </div>
        
//         <p className="mb-2 text-lg font-bold text-gold">
//           ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
//         </p>
        
//         <div className="w-full h-3 rounded-full shadow-inner bg-teal-900/50">
//           <div
//             className="h-3 transition-all duration-500 rounded-full shadow-lg bg-gradient-to-r from-gold to-pink-400 hover:shadow-gold/50"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
        
//         <p className="mt-2 text-xs text-teal-300">
//           Education: {career.education}
//         </p>
//       </div>
      
//       <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-teal-900/10 to-transparent group-hover:opacity-100 rounded-3xl"></div>
//     </div>
//   );
// };

// Career Modal Component
// const CareerModal = ({ career, onClose, onBookmark }) => {
//   const salaryMid = (career.salaryMin + career.salaryMax) / 2;
//   const progress = Math.min((salaryMid / 200000) * 100, 100);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/80 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.9, y: 50 }}
//         transition={{ duration: 0.3 }}
//         className="bg-teal-900/30 border border-cream/30 text-cream rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative backdrop-blur-lg max-h-[90vh] overflow-y-auto ring-2 ring-gold/20"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute p-2 text-teal-200 transition-colors duration-200 rounded-full top-6 right-6 hover:text-cream hover:bg-cream/10"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M18 6L6 18M6 6l12 12"/>
//           </svg>
//         </button>

//         <div className="relative mb-8">
//           <img
//             src={career.image}
//             alt={career.title}
//             className="object-cover w-full h-64 shadow-lg rounded-2xl"
//           />
//           <div className="absolute px-4 py-2 text-sm font-bold text-teal-900 rounded-full shadow-lg top-4 left-4 bg-gradient-to-r from-gold to-pink-400">
//             {career.industry}
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <h2 className="mb-3 text-4xl font-bold text-gold">
//               {career.title}
//             </h2>
//             <p className="text-lg leading-relaxed text-teal-100">
//               {career.description}
//             </p>
//           </div>

//           <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20 ring-1 ring-gold/20">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-semibold text-cream">Salary Range</h3>
//               <span className="px-3 py-1 text-sm font-bold text-teal-900 rounded-full bg-gold">
//                 {Math.round(progress)}% of market max
//               </span>
//             </div>

//             <p className="mb-4 text-3xl font-bold text-gold">
//               ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
//             </p>

//             <div className="w-full h-4 rounded-full shadow-inner bg-teal-900/50">
//               <div
//                 className="h-4 rounded-full shadow-lg bg-gradient-to-r from-gold to-pink-400"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20">
//               <h3 className="flex items-center mb-4 text-lg font-semibold text-cream">
//                 <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//                 Required Skills
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {career.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm font-medium border rounded-full bg-gradient-to-r from-gold/20 to-pink-400/20 text-gold border-gold/40"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="p-6 border bg-cream/10 rounded-2xl border-cream/20">
//               <h3 className="flex items-center mb-4 text-lg font-semibold text-cream">
//                 <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                 </svg>
//                 Education Required
//               </h3>
//               <p className="text-lg font-medium text-teal-100">
//                 {career.education}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 pt-4">
//             <button
//               onClick={() => onBookmark(career)}
//               className="flex items-center justify-center flex-1 px-6 py-4 font-bold text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-gold to-pink-400 rounded-xl hover:from-gold/90 hover:to-pink-400/90 hover:scale-105"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
//               </svg>
//               Bookmark Career
//             </button>

//             <button
//               onClick={onClose}
//               className="px-6 py-4 font-semibold transition-all duration-300 border bg-cream/10 text-cream rounded-xl hover:bg-cream/20 border-cream/20 hover:border-gold/40"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// Main Career Bank Component
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
    setToastMessage(`Bookmarked "${career.title}"!`);
    setShowToast(true);
  };

  const filteredCareers = careers
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