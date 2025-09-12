import React from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { UserIcon, MissionIcon } from "../components/icons";

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Project Lead",
      image: "https://placehold.co/150x150/FFD700/004D40?text=Priya"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      role: "UI/UX Designer",
      image: "https://placehold.co/150x150/F48FB1/004D40?text=Arjun"
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Frontend Developer",
      image: "https://placehold.co/150x150/FFD700/004D40?text=Sophia"
    }
  ];

  return (
    <div className="min-h-screen p-4 font-sans sm:p-8" style={{
      background: 'linear-gradient(135deg, #004D40 0%, #00332A 50%, #001A14 100%)'
    }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center text-amber-50">
          <Breadcrumbs />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center p-8 overflow-hidden text-center border shadow-xl rounded-3xl md:p-12"
          style={{
            backgroundColor: 'rgba(255, 248, 225, 0.95)',
            borderColor: 'rgba(255, 215, 0, 0.3)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.1)'
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full" style={{ backgroundColor: '#004D40' }}></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full" style={{ backgroundColor: '#FFD700' }}></div>
          </div>
          
          <MissionIcon />
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: '#004D40' }}>
            Our Mission
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed" style={{ color: '#002A1F' }}>
            NextStep Navigator is a career guidance portal designed to help
            students, graduates, and working professionals explore career options,
            access resources, and prepare for their future. Our goal is to provide
            clear, reliable, and accessible information, empowering individuals
            to make informed decisions about their career paths.
          </p>
        </motion.section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 text-3xl font-bold text-center md:text-4xl"
            style={{ color: '#FFF8E1' }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative flex flex-col items-center p-8 overflow-hidden text-center transition-all duration-300 border shadow-xl cursor-pointer rounded-3xl hover:scale-105 group"
                style={{
                  backgroundColor: 'rgba(255, 248, 225, 0.9)',
                  borderColor: 'rgba(255, 215, 0, 0.2)',
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.3)';
                }}
              >
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-10"
                  style={{ background: 'linear-gradient(135deg, #FFD700, #F48FB1)' }}
                ></div>
                
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-32 h-32 mx-auto mb-4 transition-all duration-300 rounded-full ring-4 group-hover:ring-6"
                      style={{ 
                        ringColor: 'rgba(255, 215, 0, 0.6)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 group-hover:opacity-30"
                      style={{ 
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
                        transform: 'scale(1.2)'
                      }}
                    ></div>
                  </div>
                  
                  <UserIcon />
                  <h3 className="mt-3 mb-1 text-xl font-semibold" style={{ color: '#004D40' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: '#F48FB1' }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="py-8 text-center border-t"
          style={{ borderColor: 'rgba(255, 248, 225, 0.2)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255, 248, 225, 0.7)' }}>
            © 2025 NextStep Navigator. Empowering careers, one step at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;