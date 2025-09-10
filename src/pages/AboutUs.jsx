import React from "react";
import { motion } from "framer-motion";
import { UserIcon, MissionIcon } from "../components/icons";
import Breadcrumbs from "../components/Breadcrumbs";


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
