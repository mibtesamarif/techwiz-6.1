// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { User, Briefcase, CheckCircle, GraduationCap, TrendingUp, Network, Clock, List, Award, Lightbulb, BookOpen } from 'lucide-react';

// const StudentContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl border-cream md:p-12 rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 border-opacity-30 backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     style={{
//       background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
//       borderColor: 'rgba(255, 248, 225, 0.3)'
//     }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
//       <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Welcome back to your journey. Here's what's next.</p>
      
//       <div className="space-y-6">
//         <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="flex items-center gap-2 text-xl font-semibold text-cream">
//               <GraduationCap style={{ color: '#FFD700' }} /> Career Path Progress
//             </h3>
//             <span className="text-sm font-semibold" style={{ color: '#F48FB1' }}>65% Complete</span>
//           </div>
//           <div className="w-full rounded-full h-2.5" style={{ backgroundColor: 'rgba(0, 77, 64, 0.3)' }}>
//             <div className="h-2.5 rounded-full" style={{ width: '65%', backgroundColor: '#FFD700' }}></div>
//           </div>
//         </div>

//         <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
//             <List style={{ color: '#FFD700' }} /> Your Next Steps
//           </h3>
//           <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
//             <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Research college majors</li>
//             <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Update your resume for internships</li>
//             <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Schedule a meeting with your career advisor</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     <div className="mt-8">
//       <div className="p-4 border rounded-xl" style={{ 
//         backgroundColor: 'rgba(0, 77, 64, 0.4)',
//         borderColor: 'rgba(255, 215, 0, 0.4)'
//       }}>
//         <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Tip of the Day</h4>
//         <p className="text-sm" style={{ color: '#FFF8E1' }}>
//           Start building a portfolio of your school projects. It's a great way to showcase your skills to future employers and colleges.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const GraduateContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl md:p-12 rounded-3xl backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     style={{
//       background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
//       borderColor: 'rgba(255, 248, 225, 0.3)'
//     }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
//       <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Let's track your job hunt and career skills.</p>
      
//       <div className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
//               <Briefcase style={{ color: '#FFD700' }} /> 27
//             </h3>
//             <p className="text-sm" style={{ color: '#FFF8E1' }}>Applications Sent</p>
//           </div>
//           <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
//               <CheckCircle style={{ color: '#4CAF50' }} /> 3
//             </h3>
//             <p className="text-sm" style={{ color: '#FFF8E1' }}>Interviews Scheduled</p>
//           </div>
//         </div>

//         <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
//             <BookOpen style={{ color: '#FFD700' }} /> Skill Building
//           </h3>
//           <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
//             <li className="flex items-center gap-2"><TrendingUp size={16} style={{ color: '#4CAF50' }} /> Complete 'Advanced React' course on Coursera</li>
//             <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Prepare for technical interviews</li>
//             <li className="flex items-center gap-2"><TrendingUp size={16} style={{ color: '#4CAF50' }} /> Earn 'Project Management Professional' certificate</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     <div className="mt-8">
//       <div className="p-4 border rounded-xl" style={{ 
//         backgroundColor: 'rgba(0, 77, 64, 0.4)',
//         borderColor: 'rgba(255, 215, 0, 0.4)'
//       }}>
//         <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Networking Tip</h4>
//         <p className="text-sm" style={{ color: '#FFF8E1' }}>
//           Connect with at least two alumni from your university who work in your target industry this week.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProfessionalContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl md:p-12 rounded-3xl backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     style={{
//       background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
//       borderColor: 'rgba(255, 248, 225, 0.3)'
//     }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
//       <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Track your growth and expand your network.</p>

//       <div className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
//               <TrendingUp style={{ color: '#4CAF50' }} /> 15%
//             </h3>
//             <p className="text-sm" style={{ color: '#FFF8E1' }}>Yearly Growth</p>
//           </div>
//           <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
//               <Network style={{ color: '#F48FB1' }} /> 84
//             </h3>
//             <p className="text-sm" style={{ color: '#FFF8E1' }}>Connections Made</p>
//           </div>
//         </div>

//         <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
//             <Award style={{ color: '#FFD700' }} /> Recent Milestones
//           </h3>
//           <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
//             <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Completed 'Advanced Leadership' training</li>
//             <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Led project "Phoenix" to successful launch</li>
//             <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Prepare for Q3 performance review</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     <div className="mt-8">
//       <div className="p-4 border rounded-xl" style={{ 
//         backgroundColor: 'rgba(0, 77, 64, 0.4)',
//         borderColor: 'rgba(255, 215, 0, 0.4)'
//       }}>
//         <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Mentorship Tip</h4>
//         <p className="text-sm" style={{ color: '#FFF8E1' }}>
//           Seek out a mentor in your field who is 5-10 years ahead of you. Their insights can be invaluable for long-term growth.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const Home = () => {
//   const [name, setName] = useState(localStorage.getItem("username"));
//   const [userType, setUserType] = useState(localStorage.getItem("userType"));
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setClearColor(0x000000, 0);
//     containerRef.current.appendChild(renderer.domElement);

//     const geometry = new THREE.DodecahedronGeometry(1.5, 0);
//     const material = new THREE.MeshPhysicalMaterial({
//       color: 0x004D40,
//       metalness: 0.7,
//       roughness: 0.3,
//       clearcoat: 1,
//       clearcoatRoughness: 0.1,
//       ior: 1.5,
//       specularIntensity: 0.8,
//       specularColor: new THREE.Color(0xFFD700)
//     });
//     const shape = new THREE.Mesh(geometry, material);
//     scene.add(shape);

//     const ambientLight = new THREE.AmbientLight(0x004D40, 0.4);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xFFD700, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     const rimLight = new THREE.DirectionalLight(0xF48FB1, 0.5);
//     rimLight.position.set(-1, -1, -1);
//     scene.add(rimLight);

//     camera.position.z = 5;

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.3;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     const handleResize = () => {
//       if (containerRef.current) {
//         camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     animate();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (containerRef.current && renderer.domElement) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   const renderContent = () => {
//     switch (userType) {
//       case "student":
//         return <StudentContent name={name} />;
//       case "graduate":
//         return <GraduateContent name={name} />;
//       case "professional":
//         return <ProfessionalContent name={name} />;
//       default:
//         return <StudentContent name={name} />;
//     }
//   };

//   return (
//     <div 
//       className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #001B16 0%, #004D40 50%, #00695C 100%)',
//         color: '#FFF8E1'
//       }}
//     >
//       <div ref={containerRef} className="absolute inset-0 z-0"></div>

//       <div 
//         className="absolute inset-0 z-10 backdrop-filter backdrop-blur-sm"
//         style={{ backgroundColor: 'rgba(0, 29, 22, 0.3)' }}
//       ></div>

//       <div className="relative z-20 grid items-center justify-center w-full min-h-screen grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-24">
//         <div className="flex flex-col items-start px-10 py-12 text-left lg:py-0">
//           <motion.h1
//             className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl drop-shadow-lg"
//             style={{ color: '#FFF8E1' }}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Your Journey, <br />
//             <span style={{ color: '#FFD700' }}>Our Navigation.</span>
//           </motion.h1>
//           <motion.p
//             className="max-w-md mb-8 text-lg md:text-xl drop-shadow-lg"
//             style={{ color: '#FFF8E1', opacity: 0.9 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             NextStep Navigator helps you chart a clear path to your dream career, from high school to professional life.
//           </motion.p>
          
//           <motion.div
//             className="w-24 h-1 mb-6 rounded-full"
//             style={{ backgroundColor: '#F48FB1' }}
//             initial={{ width: 0 }}
//             animate={{ width: 96 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           />
//         </div>

//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { 
  User, Briefcase, CheckCircle, GraduationCap, TrendingUp, Network, Clock, List, Award, Lightbulb, BookOpen,
  Compass, Target, Users, ArrowRight, Star, Quote, ChevronLeft, ChevronRight, FileText, Video, 
  Download, ExternalLink, MapPin, Zap, Globe
} from 'lucide-react';
import mockStories from "../data/stories.json"; 
import mockResources from "../data/resources.json";
import { useNavigate } from "react-router-dom";


const StudentContent = ({ name }) => (
  <motion.div
    className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl border-cream md:p-12 rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 border-opacity-30 backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    style={{
      background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
      borderColor: 'rgba(255, 248, 225, 0.3)'
    }}
  >
    <div>
      <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
      <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Welcome back to your journey. Here's what's next.</p>
      
      <div className="space-y-6">
        <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-cream">
              <GraduationCap style={{ color: '#FFD700' }} /> Career Path Progress
            </h3>
            <span className="text-sm font-semibold" style={{ color: '#F48FB1' }}>65% Complete</span>
          </div>
          <div className="w-full rounded-full h-2.5" style={{ backgroundColor: 'rgba(0, 77, 64, 0.3)' }}>
            <div className="h-2.5 rounded-full" style={{ width: '65%', backgroundColor: '#FFD700' }}></div>
          </div>
        </div>

        <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
          <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
            <List style={{ color: '#FFD700' }} /> Your Next Steps
          </h3>
          <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
            <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Research college majors</li>
            <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Update your resume for internships</li>
            <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Schedule a meeting with your career advisor</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <div className="p-4 border rounded-xl" style={{ 
        backgroundColor: 'rgba(0, 77, 64, 0.4)',
        borderColor: 'rgba(255, 215, 0, 0.4)'
      }}>
        <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Tip of the Day</h4>
        <p className="text-sm" style={{ color: '#FFF8E1' }}>
          Start building a portfolio of your school projects. It's a great way to showcase your skills to future employers and colleges.
        </p>
      </div>
    </div>
  </motion.div>
);

const GraduateContent = ({ name }) => (
  <motion.div
    className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl md:p-12 rounded-3xl backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    style={{
      background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
      borderColor: 'rgba(255, 248, 225, 0.3)'
    }}
  >
    <div>
      <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
      <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Let's track your job hunt and career skills.</p>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
            <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
              <Briefcase style={{ color: '#FFD700' }} /> 27
            </h3>
            <p className="text-sm" style={{ color: '#FFF8E1' }}>Applications Sent</p>
          </div>
          <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
            <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
              <CheckCircle style={{ color: '#4CAF50' }} /> 3
            </h3>
            <p className="text-sm" style={{ color: '#FFF8E1' }}>Interviews Scheduled</p>
          </div>
        </div>

        <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
          <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
            <BookOpen style={{ color: '#FFD700' }} /> Skill Building
          </h3>
          <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
            <li className="flex items-center gap-2"><TrendingUp size={16} style={{ color: '#4CAF50' }} /> Complete 'Advanced React' course on Coursera</li>
            <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Prepare for technical interviews</li>
            <li className="flex items-center gap-2"><TrendingUp size={16} style={{ color: '#4CAF50' }} /> Earn 'Project Management Professional' certificate</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <div className="p-4 border rounded-xl" style={{ 
        backgroundColor: 'rgba(0, 77, 64, 0.4)',
        borderColor: 'rgba(255, 215, 0, 0.4)'
      }}>
        <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Networking Tip</h4>
        <p className="text-sm" style={{ color: '#FFF8E1' }}>
          Connect with at least two alumni from your university who work in your target industry this week.
        </p>
      </div>
    </div>
  </motion.div>
);

const ProfessionalContent = ({ name }) => (
  <motion.div
    className="flex flex-col justify-between w-full h-full p-8 border shadow-2xl md:p-12 rounded-3xl backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    style={{
      background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
      borderColor: 'rgba(255, 248, 225, 0.3)'
    }}
  >
    <div>
      <h2 className="mb-4 text-3xl font-bold text-cream">Hello, <span style={{ color: '#FFD700' }}>{name}!</span></h2>
      <p className="mb-6 text-lg" style={{ color: '#FFF8E1' }}>Track your growth and expand your network.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
            <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
              <TrendingUp style={{ color: '#4CAF50' }} /> 15%
            </h3>
            <p className="text-sm" style={{ color: '#FFF8E1' }}>Yearly Growth</p>
          </div>
          <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
            <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-cream">
              <Network style={{ color: '#F48FB1' }} /> 84
            </h3>
            <p className="text-sm" style={{ color: '#FFF8E1' }}>Connections Made</p>
          </div>
        </div>

        <div className="p-4 shadow-md rounded-xl backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 248, 225, 0.15)' }}>
          <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-cream">
            <Award style={{ color: '#FFD700' }} /> Recent Milestones
          </h3>
          <ul className="space-y-2 list-disc list-inside" style={{ color: '#FFF8E1' }}>
            <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Completed 'Advanced Leadership' training</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} style={{ color: '#4CAF50' }} /> Led project "Phoenix" to successful launch</li>
            <li className="flex items-center gap-2"><Clock size={16} style={{ color: '#FFD700' }} /> Prepare for Q3 performance review</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <div className="p-4 border rounded-xl" style={{ 
        backgroundColor: 'rgba(0, 77, 64, 0.4)',
        borderColor: 'rgba(255, 215, 0, 0.4)'
      }}>
        <h4 className="flex items-center gap-2 mb-1 font-bold" style={{ color: '#F48FB1' }}><Lightbulb size={20} style={{ color: '#FFD700' }} /> Mentorship Tip</h4>
        <p className="text-sm" style={{ color: '#FFF8E1' }}>
          Seek out a mentor in your field who is 5-10 years ahead of you. Their insights can be invaluable for long-term growth.
        </p>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [name, setName] = useState(localStorage.getItem("username"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x004D40,
      metalness: 0.7,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.5,
      specularIntensity: 0.8,
      specularColor: new THREE.Color(0xFFD700)
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    const ambientLight = new THREE.AmbientLight(0x004D40, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFD700, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0xF48FB1, 0.5);
    rimLight.position.set(-1, -1, -1);
    scene.add(rimLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.005;
      shape.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (containerRef.current) {
        camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const renderContent = () => {
    switch (userType) {
      case "student":
        return <StudentContent name={name} />;
      case "graduate":
        return <GraduateContent name={name} />;
      case "professional":
        return <ProfessionalContent name={name} />;
      default:
        return <StudentContent name={name} />;
    }
  };

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % mockStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + mockStories.length) % mockStories.length);
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001B16 0%, #004D40 50%, #00695C 100%)',
        color: '#FFF8E1'
      }}
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <div ref={containerRef} className="absolute inset-0 z-0"></div>
        <div 
          className="absolute inset-0 z-10 backdrop-filter backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0, 29, 22, 0.3)' }}
        ></div>

        <div className="relative z-20 grid items-center justify-center w-full min-h-screen grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-start px-10 py-12 text-left lg:py-0">
            <motion.h1
              className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl drop-shadow-lg"
              style={{ color: '#FFF8E1' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Journey, <br />
              <span style={{ color: '#FFD700' }}>Our Navigation.</span>
            </motion.h1>
            <motion.p
              className="max-w-md mb-8 text-lg md:text-xl drop-shadow-lg"
              style={{ color: '#FFF8E1', opacity: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              NextStep Navigator helps you chart a clear path to your dream career, from high school to professional life.
            </motion.p>
            
            <motion.div
              className="w-24 h-1 mb-6 rounded-full"
              style={{ backgroundColor: '#F48FB1' }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>

          {renderContent()}
        </div>
      </div>

      <section className="relative z-30 px-4 py-20" style={{ backgroundColor: 'rgba(0, 29, 22, 0.8)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              Everything You Need to <span style={{ color: '#FFD700' }}>Succeed</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Discover our comprehensive suite of tools designed to guide you through every stage of your career journey.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Compass size={48} style={{ color: '#FFD700' }} />,
                title: "Career Compass",
                description: "Get personalized guidance with our interactive career assessment tools and roadmaps."
              },
              {
                icon: <Target size={48} style={{ color: '#FFD700' }} />,
                title: "Skill Targeting",
                description: "Identify and develop the exact skills you need for your dream career path."
              },
              {
                icon: <Users size={48} style={{ color: '#FFD700' }} />,
                title: "Success Stories",
                description: "Learn from real professionals who transformed their careers with NextStep."
              },
              {
                icon: <BookOpen size={48} style={{ color: '#FFD700' }} />,
                title: "Resource Library",
                description: "Access curated guides, templates, and learning materials for career growth."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 border rounded-2xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.1) 0%, rgba(0, 77, 64, 0.2) 100%)',
                  borderColor: 'rgba(255, 248, 225, 0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-center" style={{ color: '#FFF8E1' }}>
                  {feature.title}
                </h3>
                <p className="text-center" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 77, 64, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              Your Career <span style={{ color: '#FFD700' }}>Journey</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Follow a structured path from student to professional, with guidance at every step.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {[
              {
                icon: <GraduationCap size={48} style={{ color: '#FFD700' }} />,
                title: "Student",
                description: "Explore majors, build skills, and plan your academic journey",
                stage: "Discovery Phase"
              },
              {
                icon: <Briefcase size={48} style={{ color: '#FFD700' }} />,
                title: "Graduate",
                description: "Land your first job, develop professional skills, and build networks",
                stage: "Launch Phase"
              },
              {
                icon: <TrendingUp size={48} style={{ color: '#FFD700' }} />,
                title: "Professional",
                description: "Advance your career, lead teams, and achieve your goals",
                stage: "Growth Phase"
              }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex-1 max-w-xs text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-6 border-4 rounded-full" style={{ borderColor: '#FFD700', backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-2 text-sm font-semibold" style={{ color: '#F48FB1' }}>
                    {step.stage}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold" style={{ color: '#FFF8E1' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                    {step.description}
                  </p>
                </motion.div>
                {index < 2 && (
                  <div className="hidden md:block">
                    <ArrowRight size={32} style={{ color: '#F48FB1' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 29, 22, 0.6)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              See How Others Found Their <span style={{ color: '#FFD700' }}>Next Step</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Real stories from real people who transformed their careers with NextStep Navigator.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="p-8 border bg-gradient-to-r from-cream/10 to-teal-100/5 backdrop-blur-xl rounded-3xl md:p-12 border-cream/20"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={currentStoryIndex}
            >
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-shrink-0">
                  <img
                    src={mockStories[currentStoryIndex].image}
                    alt={mockStories[currentStoryIndex].name}
                    className="object-cover w-32 h-32 border-4 rounded-full"
                    style={{ borderColor: '#FFD700' }}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center mb-4 md:justify-start">
                    <Quote size={32} style={{ color: '#F48FB1' }} />
                  </div>
                  <blockquote className="mb-6 text-xl italic md:text-2xl" style={{ color: '#FFF8E1' }}>
                    "{mockStories[currentStoryIndex].snippet}"
                  </blockquote>
                  <div className="mb-2">
                    <h4 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
                      {mockStories[currentStoryIndex].name}
                    </h4>
                    <p className="text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                      {mockStories[currentStoryIndex].title}
                    </p>
                  </div>
                  <div className="inline-block px-4 py-2 text-sm font-semibold rounded-full" 
                       style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)', color: '#FFD700' }}>
                    {mockStories[currentStoryIndex].domain}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevStory}
                className="p-3 transition-all duration-300 border rounded-full hover:scale-110"
                style={{ 
                  backgroundColor: 'rgba(255, 248, 225, 0.1)',
                  borderColor: 'rgba(255, 248, 225, 0.3)',
                  color: '#FFD700'
                }}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {mockStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className="w-3 h-3 transition-all duration-300 rounded-full"
                    style={{
                      backgroundColor: index === currentStoryIndex ? '#FFD700' : 'rgba(255, 248, 225, 0.3)'
                    }}
                  />
                ))}
              </div>
              
              <button
                onClick={nextStory}
                className="p-3 transition-all duration-300 border rounded-full hover:scale-110"
                style={{ 
                  backgroundColor: 'rgba(255, 248, 225, 0.1)',
                  borderColor: 'rgba(255, 248, 225, 0.3)',
                  color: '#FFD700'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="mt-8 text-center">
              <button 
                className="px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #F48FB1 100%)',
                  color: '#004D40'
                }}
              >
                View All Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 77, 64, 0.4)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              Powerful <span style={{ color: '#FFD700' }}>Resources</span> at Your Fingertips
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Access our curated collection of career-building resources designed to accelerate your professional growth.
            </p>
          </motion.div>

          <div className="grid gap-8 mb-12 md:grid-cols-3">
            {mockResources.slice(0, 3).map((resource, index) => (
              <motion.div
                key={resource.id}
                className="p-6 border cursor-pointer rounded-2xl backdrop-blur-md group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.1) 0%, rgba(0, 77, 64, 0.2) 100%)',
                  borderColor: 'rgba(255, 248, 225, 0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-4">
                  {resource.type === 'eBook' && <FileText size={48} style={{ color: '#FFD700' }} />}
                  {resource.type === 'Video' && <Video size={48} style={{ color: '#FFD700' }} />}
                  {resource.type === 'Article' && <BookOpen size={48} style={{ color: '#FFD700' }} />}
                </div>
                <div className="inline-block px-3 py-1 mb-2 text-sm font-semibold rounded-full"
                     style={{ backgroundColor: 'rgba(244, 143, 177, 0.2)', color: '#F48FB1' }}>
                  {resource.type}
                </div>
                <h3 className="mb-3 text-xl font-bold" style={{ color: '#FFF8E1' }}>
                  {resource.title}
                </h3>
                <p className="mb-4" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: '#FFD700' }}>
                    Learn More
                  </span>
                  <ExternalLink size={16} style={{ color: '#FFD700' }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button 
              className="px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #F48FB1 100%)',
                color: '#004D40'
              }}
            >
              Explore Full Resource Library
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 29, 22, 0.8)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              Join Our <span style={{ color: '#FFD700' }}>Thriving Community</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Connect with mentors, peers, and industry professionals who share your ambitions and can guide your journey.
            </p>
          </motion.div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users size={32} style={{ color: '#FFD700' }} />, number: "10K+", label: "Active Members" },
                  { icon: <Network size={32} style={{ color: '#FFD700' }} />, number: "500+", label: "Industry Mentors" },
                  { icon: <Globe size={32} style={{ color: '#FFD700' }} />, number: "50+", label: "Countries" },
                  { icon: <Zap size={32} style={{ color: '#FFD700' }} />, number: "95%", label: "Success Rate" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 text-center rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.1) 0%, rgba(0, 77, 64, 0.2) 100%)',
                      border: '1px solid rgba(255, 248, 225, 0.2)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="mb-1 text-2xl font-bold" style={{ color: '#FFD700' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold" style={{ color: '#FFF8E1' }}>
                  Find Your Perfect Mentor
                </h3>
                <p className="mb-6" style={{ color: '#FFF8E1', opacity: 0.8 }}>
                  Get matched with experienced professionals in your field who can provide personalized guidance, 
                  industry insights, and career advice tailored to your goals.
                </p>
                <ul className="space-y-3">
                  {[
                    "1-on-1 mentorship sessions",
                    "Industry-specific guidance",
                    "Resume and interview coaching",
                    "Network expansion opportunities"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} style={{ color: '#4CAF50' }} />
                      <span style={{ color: '#FFF8E1' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 77, 64, 0.3)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#FFF8E1' }}>
              Frequently Asked <span style={{ color: '#FFD700' }}>Questions</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F48FB1' }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Get answers to common questions about NextStep Navigator and how it can help your career journey.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do I choose my career path?",
                answer: "Our Career Compass feature includes comprehensive assessments that analyze your interests, skills, and values to suggest personalized career paths. You'll also get access to detailed career profiles and growth projections."
              },
              {
                question: "Is NextStep Navigator free to use?",
                answer: "We offer both free and premium tiers. The free tier includes basic career assessments and limited resources, while our premium membership provides full access to mentorship, advanced tools, and exclusive content."
              },
              {
                question: "How does the mentorship program work?",
                answer: "Our AI-powered matching system connects you with industry professionals based on your career goals, experience level, and preferred communication style. You can schedule regular sessions and receive ongoing support throughout your journey."
              },
              {
                question: "Can I use NextStep at any career stage?",
                answer: "Absolutely! Whether you're a high school student exploring options, a recent graduate job hunting, or a professional looking to pivot or advance, our platform adapts to your current stage and goals."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-2xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.1) 0%, rgba(0, 77, 64, 0.2) 100%)',
                  borderColor: 'rgba(255, 248, 225, 0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="mb-3 text-xl font-bold" style={{ color: '#FFD700' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#FFF8E1', opacity: 0.8 }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: 'rgba(0, 29, 22, 1)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-6xl" style={{ color: '#FFF8E1' }}>
              Ready to Take Your <span style={{ color: '#FFD700' }}>Next Step?</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-xl" style={{ color: '#FFF8E1', opacity: 0.8 }}>
              Join thousands of ambitious individuals who've transformed their careers with NextStep Navigator. 
              Your dream career is just one step away.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button 
                className="px-12 py-5 text-xl font-bold transition-all duration-300 rounded-full shadow-2xl hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #F48FB1 100%)',
                  color: '#004D40'
                }}
              >
                Start Your Journey Now
              </button>
              <button 
                className="px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-full hover:scale-105"
                style={{
                  color: '#FFD700',
                  borderColor: '#FFD700',
                  backgroundColor: 'transparent'
                }}
              >
                Explore Career Bank
              </button>
            </div>

            <div className="flex items-center justify-center mt-12 space-x-8 text-sm" style={{ color: '#FFF8E1', opacity: 0.6 }}>
              <div className="flex items-center gap-2">
                <Star size={16} style={{ color: '#FFD700' }} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} style={{ color: '#4CAF50' }} />
                <span>Free to get started</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: '#F48FB1' }} />
                <span>Join 10K+ members</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;