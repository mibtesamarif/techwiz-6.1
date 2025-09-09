// // src/pages/Resources.jsx
// import { useState } from "react";
// import resources from "../data/resources.json";
// import ResourceCard from "../components/ResourceCard";
// import Breadcrumbs from "../components/Breadcrumbs";

// const Resources = () => {
//   const [tab, setTab] = useState("All");

//   const types = ["All", "Article", "eBook", "Checklist", "Webinar"];

//   const filtered =
//     tab === "All" ? resources : resources.filter((r) => r.type === tab);

//   return (
//     <div>
//       <Breadcrumbs />

//       <h1 className="text-3xl font-bold mb-6">Resource Library</h1>

//       {/* Tabs */}
//       <div className="mb-6 flex gap-2 flex-wrap">
//         {types.map((t, idx) => (
//           <button
//             key={idx}
//             onClick={() => setTab(t)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               tab === t
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Resources grid */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {filtered.length > 0 ? (
//           filtered.map((res) => <ResourceCard key={res.id} resource={res} />)
//         ) : (
//           <p className="text-gray-600">No resources found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Resources;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const resources = [
  {
    "id": 1,
    "title": "Resume Writing Guide",
    "type": "Article",
    "description": "Learn how to create a professional resume that gets noticed and lands you the interview.",
    "link": "https://placehold.co/800x600/1e293b/f8fafc?text=Resume+Guide"
  },
  {
    "id": 2,
    "title": "Career Planning eBook",
    "type": "eBook",
    "description": "A comprehensive eBook on planning your career path, setting goals, and achieving long-term success.",
    "link": "https://placehold.co/800x600/1e293b/f8fafc?text=eBook"
  },
  {
    "id": 3,
    "title": "Interview Checklist",
    "type": "Checklist",
    "description": "A step-by-step checklist to prepare for your next interview and make a great first impression.",
    "link": "https://placehold.co/800x600/1e293b/f8fafc?text=Checklist"
  },
  {
    "id": 4,
    "title": "Career Growth Webinar",
    "type": "Webinar",
    "description": "Watch our expert panel discuss strategies for long-term career growth and professional development.",
    "link": "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    "id": 5,
    "title": "Networking Best Practices",
    "type": "Article",
    "description": "Discover the art of professional networking and how to build meaningful connections for career opportunities.",
    "link": "https://placehold.co/800x600/1e293b/f8fafc?text=Networking+Article"
  },
  {
    "id": 6,
    "title": "Salary Negotiation Guide",
    "type": "eBook",
    "description": "Learn powerful negotiation techniques to secure the salary you deserve in your next role.",
    "link": "https://placehold.co/800x600/1e293b/f8fafc?text=Salary+eBook"
  }
];

// --- Icons & Components ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const typeIcons = {
  Article: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
  ),
  eBook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  ),
  Checklist: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
  ),
  Webinar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  ),
};

const Breadcrumbs = () => {
  const pathnames = ["resources"];
  return (
    <nav className="text-sm my-4">
      <motion.ol
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10"
      >
        <motion.li
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          <a href="/">Home</a>
        </motion.li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <motion.li key={index} className="flex items-center space-x-2">
              <ChevronRight />
              {isLast ? (
                <span className="capitalize text-white font-semibold">{value}</span>
              ) : (
                <a href={`/${value}`} className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

const ResourceCard = ({ resource, onBookmark, showMessage }) => {
  const handleBookmark = (e) => {
    e.stopPropagation();
    onBookmark(resource);
    showMessage("Bookmarked!");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4 text-purple-400">
        <span className="text-3xl">{typeIcons[resource.type] || "📁"}</span>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white">{resource.title}</h2>
          <span className="text-xs font-semibold text-purple-300">{resource.type}</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-4 flex-grow">
        {resource.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 text-sm font-semibold hover:underline"
        >
          View Resource
        </a>
        <button
          onClick={handleBookmark}
          className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition"
        >
          Bookmark
        </button>
      </div>
    </motion.div>
  );
};

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
    } else {
      console.log("Bookmark already exists.");
    }
  } catch (e) {
    console.error("Failed to add bookmark to localStorage:", e);
  }
};

// --- Main App Component ---
const Resources = () => {
  const [tab, setTab] = useState("All");
  const [message, setMessage] = useState(null);

  const types = ["All", ...new Set(resources.map((r) => r.type))];

  const filtered =
    tab === "All" ? resources : resources.filter((r) => r.type === tab);

  const handleAddBookmark = (resource) => {
    addBookmark({
      id: `resource-${resource.id}`,
      title: resource.title,
      type: "Resource",
      note: "",
      link: resource.link,
      createdAt: new Date().toISOString(),
    });
  };

  const showMessage = (msg) => {
    setMessage(msg);
    const timer = setTimeout(() => {
      setMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <Breadcrumbs />

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Resource Library
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our curated collection of articles, eBooks, and webinars to boost your career.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          {types.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${tab === t
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((res) => <ResourceCard key={res.id} resource={res} onBookmark={handleAddBookmark} showMessage={showMessage} />)
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No resources found for this category.</p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Box */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="fixed bottom-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-50"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resources;
