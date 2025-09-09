// // src/pages/AboutUs.jsx
// import Breadcrumbs from "../components/Breadcrumbs";
// const AboutUs = () => {
//   const team = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       role: "Project Lead",
//       image: "/assets/priya.jpg"
//     },
//     {
//       id: 2,
//       name: "Arjun Mehta",
//       role: "UI/UX Designer",
//       image: "/assets/arjun.jpg"
//     },
//     {
//       id: 3,
//       name: "Sophia Lee",
//       role: "Frontend Developer",
//       image: "/assets/sophia.jpg"
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">About Us</h1>

//       {/* Portal Info */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
//         <p className="text-gray-700 leading-relaxed">
//           NextStep Navigator is a career guidance portal designed to help
//           students, graduates, and working professionals explore career options,
//           access resources, and prepare for their future. Our goal is to provide
//           clear, reliable, and accessible information — empowering individuals
//           to make informed decisions about their career paths.
//         </p>
//       </section>

//       {/* Team Section */}
//       <section>
//         <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
//             >
//               <img
//                 src={member.image || "/vite.svg"}
//                 alt={member.name}
//                 className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
//               />
//               <h3 className="text-lg font-semibold">{member.name}</h3>
//               <p className="text-gray-600 text-sm">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import React from "react";
import { motion } from "framer-motion";

// Inline SVG Icons
const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Helper function for a static breadcrumb to avoid react-router-dom dependency
const Breadcrumbs = () => (
  <nav className="text-sm my-4">
    <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10">
      <li className="text-gray-300 hover:text-white transition-colors duration-200">
        <a href="/">Home</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="h-4 w-4 text-gray-400">/</span>
        <span className="capitalize text-white font-semibold">about us</span>
      </li>
    </ol>
  </nav>
);

// Main AboutUs App
const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Project Lead",
      image: "https://placehold.co/150x150/5C6BC0/FFFFFF?text=Priya"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      role: "UI/UX Designer",
      image: "https://placehold.co/150x150/4DD0E1/FFFFFF?text=Arjun"
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Frontend Developer",
      image: "https://placehold.co/150x150/AED581/FFFFFF?text=Sophia"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-gray-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        {/* Hero Section with Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl flex flex-col items-center text-center"
        >
          <MissionIcon />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-white leading-tight">Our Mission</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            NextStep Navigator is a career guidance portal designed to help
            students, graduates, and working professionals explore career options,
            access resources, and prepare for their future. Our goal is to provide
            clear, reliable, and accessible information, empowering individuals
            to make informed decisions about their career paths.
          </p>
        </motion.section>

        {/* Team Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold mb-8 text-center text-gray-200"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 ring-2 ring-white/20 transition-transform duration-300"
                />
                <UserIcon />
                <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
