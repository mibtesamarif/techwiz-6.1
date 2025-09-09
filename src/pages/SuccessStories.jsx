// // src/pages/SuccessStories.jsx
// import { useState } from "react";
// import stories from "../data/stories.json";
// import StoryCard from "../components/StoryCard";
// import StoryModal from "../components/StoryModal";
// import Breadcrumbs from "../components/Breadcrumbs";

// const SuccessStories = () => {
//   const [domain, setDomain] = useState("All");
//   const [selectedStory, setSelectedStory] = useState(null);

//   const domains = ["All", ...new Set(stories.map((s) => s.domain))];

//   const filtered =
//     domain === "All" ? stories : stories.filter((s) => s.domain === domain);

//   // Pick first story as featured (you can adjust logic later)
//   const featuredStory = filtered.length > 0 ? filtered[0] : null;
//   const restStories = featuredStory ? filtered.slice(1) : [];

//   return (
//     <div>
//       <Breadcrumbs />

//       <h1 className="text-3xl font-bold mb-6">Success Stories</h1>

//       {/* Domain filter */}
//       <div className="mb-6 flex gap-2 flex-wrap">
//         {domains.map((d, idx) => (
//           <button
//             key={idx}
//             onClick={() => setDomain(d)}
//             className={`px-3 py-1 rounded-full text-sm font-medium ${
//               domain === d
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {d}
//           </button>
//         ))}
//       </div>

//       {/* Featured Story */}
//       {featuredStory && (
//         <div
//           onClick={() => setSelectedStory(featuredStory)}
//           className="bg-white shadow-lg rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:shadow-2xl transition"
//         >
//           <img
//             src={featuredStory.image || "/vite.svg"}
//             alt={featuredStory.name}
//             className="w-40 h-40 object-cover rounded-full shadow-md"
//           />
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold">{featuredStory.name}</h2>
//             <p className="text-gray-600 mb-2">{featuredStory.title}</p>
//             <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-3">
//               “{featuredStory.snippet}”
//             </blockquote>
//             <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
//               {featuredStory.domain}
//             </span>
//           </div>
//         </div>
//       )}

//       {/* Remaining Stories Grid */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {restStories.length > 0 ? (
//           restStories.map((story) => (
//             <StoryCard
//               key={story.id}
//               story={story}
//               onClick={() => setSelectedStory(story)}
//             />
//           ))
//         ) : (
//           <p className="text-gray-600">No stories found.</p>
//         )}
//       </div>

//       {/* Modal */}
//       {selectedStory && (
//         <StoryModal
//           story={selectedStory}
//           onClose={() => setSelectedStory(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default SuccessStories;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const stories = [
  {
    "id": 1,
    "name": "Aarav Patel",
    "title": "Software Engineer at Google",
    "domain": "Technology",
    "image": "https://placehold.co/400x400/3b82f6/ffffff?text=Aarav",
    "snippet": "From small town to Silicon Valley, Aarav’s journey proves that dedication and a passion for coding can overcome any obstacle.",
    "fullStory": "Aarav grew up in a small town with a single dream: to build technology that changes lives. He spent countless hours learning to code online, building small projects, and contributing to open-source communities. His relentless dedication eventually caught the eye of a Google recruiter, leading to an interview and ultimately, a position as a Software Engineer. Today, he works on products used by millions, inspiring a new generation of aspiring developers.",
    "linkedin": "https://linkedin.com/in/aaravpatel"
  },
  {
    "id": 2,
    "name": "Meera Sharma",
    "title": "UX Designer at Adobe",
    "domain": "Design",
    "image": "https://placehold.co/400x400/8b5cf6/ffffff?text=Meera",
    "snippet": "Meera's unique approach to user-centric design has earned her recognition as a leader in the field, creating intuitive and beautiful digital experiences.",
    "fullStory": "Design was always her passion. Meera studied visual design and worked on freelance projects to build her portfolio. She specialized in creating user interfaces that were not only visually appealing but also incredibly easy to use. Her meticulous attention to detail and ability to empathize with users made her an invaluable asset to any team. Now at Adobe, she's shaping the future of creative tools, making them accessible to a global audience.",
    "linkedin": "https://linkedin.com/in/meerasharma"
  },
  {
    "id": 3,
    "name": "Sanjay Singh",
    "title": "Data Scientist at Amazon",
    "domain": "Technology",
    "image": "https://placehold.co/400x400/f87171/ffffff?text=Sanjay",
    "snippet": "Sanjay's ability to extract meaningful insights from massive datasets is transforming how companies make decisions and understand their customers.",
    "fullStory": "Sanjay always loved numbers and patterns. After earning a Master's degree in Data Science, he began his career at a startup where he built the company's first data analytics pipeline from scratch. His groundbreaking work in predictive modeling led to a significant increase in customer engagement and revenue. He was quickly recruited by Amazon, where he now leads a team of data scientists focused on optimizing logistics and improving the customer experience.",
    "linkedin": "https://linkedin.com/in/sanajaysingh"
  },
  {
    "id": 4,
    "name": "Ananya Reddy",
    "title": "Marketing Manager at Spotify",
    "domain": "Business",
    "image": "https://placehold.co/400x400/4ade80/ffffff?text=Ananya",
    "snippet": "Through innovative campaigns and a deep understanding of consumer behavior, Ananya has successfully launched products and driven exponential brand growth.",
    "fullStory": "Ananya started her career as a social media intern, where she discovered her knack for connecting with audiences. She honed her skills in content strategy, digital advertising, and brand management. Her viral campaigns for small businesses led to her being noticed by larger corporations. At Spotify, she's at the forefront of music marketing, creating memorable campaigns that resonate with millions of music lovers around the world.",
    "linkedin": "https://linkedin.com/in/ananyareddy"
  },
  {
    "id": 5,
    "name": "Rajesh Kumar",
    "title": "Founder of EcoTech Solutions",
    "domain": "Entrepreneurship",
    "image": "https://placehold.co/400x400/22d3ee/ffffff?text=Rajesh",
    "snippet": "Rajesh turned his passion for sustainability into a thriving business, developing eco-friendly products that are making a real difference for the planet.",
    "fullStory": "Motivated by environmental concerns, Rajesh founded EcoTech Solutions from his garage with a mission to combat plastic waste. He developed a line of biodegradable packaging materials that are now used by major corporations. His company has won numerous awards for innovation and sustainability. Rajesh proves that a great idea, coupled with unwavering determination, can lead to both commercial success and positive global impact.",
    "linkedin": "https://linkedin.com/in/rajeshkumar"
  }
];

// --- Icons & Components ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const Breadcrumbs = () => {
  const pathnames = ["success-stories"];
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
                <span className="capitalize text-white font-semibold">{value.replace(/-/g, ' ')}</span>
              ) : (
                <a href={`/${value}`} className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value.replace(/-/g, ' ')}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

const StoryCard = ({ story, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
    >
      <img
        src={story.image}
        alt={story.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-2 bg-purple-500 text-white`}>
        {story.domain}
      </span>
      <h2 className="text-xl font-bold text-white mb-1">{story.name}</h2>
      <p className="text-sm text-gray-400 mb-2">{story.title}</p>
      <blockquote className="mt-2 text-gray-300 italic border-l-4 border-purple-500 pl-3 leading-relaxed flex-grow">
        “{story.snippet}”
      </blockquote>
    </motion.div>
  );
};

const StoryModal = ({ story, onClose }) => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white/10 text-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl w-full relative backdrop-blur-lg border border-white/10 my-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors p-2 rounded-full"
        >
          <CloseIcon />
        </button>

        <img
          src={story.image}
          alt={story.name}
          className="w-28 h-28 object-cover rounded-full shadow-lg mx-auto -mt-20 mb-6 border-4 border-purple-500"
        />

        <h2 className="text-3xl font-bold mb-1 text-purple-200 text-center">{story.name}</h2>
        <p className="text-sm text-gray-400 mb-4 text-center">{story.title}</p>
        <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-6 bg-purple-500 text-white mx-auto`}>
          {story.domain}
        </span>
        <p className="text-gray-300 leading-relaxed text-lg">{story.fullStory}</p>

        {story.linkedin && (
          <a
            href={story.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <LinkedInIcon /> View LinkedIn Profile
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Main App Component ---
const SuccessStories = () => {
  const [domain, setDomain] = useState("All");
  const [selectedStory, setSelectedStory] = useState(null);

  const domains = ["All", ...new Set(stories.map((s) => s.domain))];

  const filtered =
    domain === "All" ? stories : stories.filter((s) => s.domain === domain);

  const featuredStory = filtered.length > 0 ? filtered[0] : null;
  const restStories = featuredStory ? filtered.slice(1) : [];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <Breadcrumbs />

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Success Stories
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Read inspiring stories from individuals who have achieved their career goals.
          </p>
        </div>

        {/* Domain filter */}
        <div className="mb-10 flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
          {domains.map((d, idx) => (
            <button
              key={idx}
              onClick={() => setDomain(d)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${domain === d
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        <AnimatePresence mode="wait">
          {featuredStory && (
            <motion.div
              key={featuredStory.id + "-featured"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedStory(featuredStory)}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-10 mb-8 flex flex-col lg:flex-row items-center gap-6 cursor-pointer hover:shadow-2xl transition-all duration-300 ring-1 ring-white/10"
            >
              <img
                src={featuredStory.image}
                alt={featuredStory.name}
                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-purple-500"
              />
              <div className="flex-1 text-center lg:text-left">
                <span className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-2 bg-purple-500 text-white`}>
                  Featured Story
                </span>
                <h2 className="text-3xl font-extrabold text-white">{featuredStory.name}</h2>
                <p className="text-gray-400 mb-2">{featuredStory.title}</p>
                <blockquote className="italic text-gray-300 border-l-4 border-purple-500 pl-4 mt-4 leading-relaxed">
                  “{featuredStory.snippet}”
                </blockquote>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remaining Stories Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {restStories.length > 0 ? (
              restStories.map((story) => (
                <StoryCard key={story.id} story={story} onClick={() => setSelectedStory(story)} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No stories found in this domain.</p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStory && (
            <StoryModal
              story={selectedStory}
              onClose={() => setSelectedStory(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuccessStories;
