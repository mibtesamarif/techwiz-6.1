// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { User, Briefcase, CheckCircle, GraduationCap, TrendingUp, Network, Clock, List, Award, Lightbulb, TrendingDown, BookOpen } from 'lucide-react';

// const StudentContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border border-white shadow-2xl md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 border-opacity-20 backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
//       <p className="mb-6 text-lg text-gray-200">Welcome back to your journey. Here's what's next.</p>
      
//       {/* Dynamic Data Section */}
//       <div className="space-y-6">
//         {/* Progress Card */}
//         <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
//               <GraduationCap className="text-purple-400" /> Career Path Progress
//             </h3>
//             <span className="text-sm font-semibold text-purple-200">65% Complete</span>
//           </div>
//           <div className="w-full bg-gray-700 rounded-full h-2.5">
//             <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
//           </div>
//         </div>

//         {/* Next Steps Card */}
//         <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-white">
//             <List className="text-purple-400" /> Your Next Steps
//           </h3>
//           <ul className="space-y-2 text-gray-200 list-disc list-inside">
//             <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Research college majors</li>
//             <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Update your resume for internships</li>
//             <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Schedule a meeting with your career advisor</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     {/* Tip of the Day */}
//     <div className="mt-8">
//       <div className="p-4 bg-purple-800 border border-purple-500 bg-opacity-30 rounded-xl border-opacity-40">
//         <h4 className="flex items-center gap-2 mb-1 font-bold text-purple-200"><Lightbulb size={20} className="text-purple-400" /> Tip of the Day</h4>
//         <p className="text-sm text-gray-300">
//           Start building a portfolio of your school projects. It's a great way to showcase your skills to future employers and colleges.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const GraduateContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border border-white shadow-2xl md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 border-opacity-20 backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
//       <p className="mb-6 text-lg text-gray-200">Let's track your job hunt and career skills.</p>
      
//       {/* Job Search Stats */}
//       <div className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-white">
//               <Briefcase className="text-purple-400" /> 27
//             </h3>
//             <p className="text-sm text-gray-200">Applications Sent</p>
//           </div>
//           <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-white">
//               <CheckCircle className="text-green-400" /> 3
//             </h3>
//             <p className="text-sm text-gray-200">Interviews Scheduled</p>
//           </div>
//         </div>

//         {/* Skill Building Section */}
//         <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-white">
//             <BookOpen className="text-purple-400" /> Skill Building
//           </h3>
//           <ul className="space-y-2 text-gray-200 list-disc list-inside">
//             <li className="flex items-center gap-2"><TrendingUp size={16} className="text-green-400" /> Complete 'Advanced React' course on Coursera</li>
//             <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Prepare for technical interviews</li>
//             <li className="flex items-center gap-2"><TrendingUp size={16} className="text-green-400" /> Earn 'Project Management Professional' certificate</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     {/* Networking Tip */}
//     <div className="mt-8">
//       <div className="p-4 bg-purple-800 border border-purple-500 bg-opacity-30 rounded-xl border-opacity-40">
//         <h4 className="flex items-center gap-2 mb-1 font-bold text-purple-200"><Lightbulb size={20} className="text-purple-400" /> Networking Tip</h4>
//         <p className="text-sm text-gray-300">
//           Connect with at least two alumni from your university who work in your target industry this week.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProfessionalContent = ({ name }) => (
//   <motion.div
//     className="flex flex-col justify-between w-full h-full p-8 border border-white shadow-2xl md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 border-opacity-20 backdrop-blur-sm"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//   >
//     <div>
//       <h2 className="mb-4 text-3xl font-bold text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
//       <p className="mb-6 text-lg text-gray-200">Track your growth and expand your network.</p>

//       {/* Career Stats */}
//       <div className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-white">
//               <TrendingUp className="text-green-400" /> 15%
//             </h3>
//             <p className="text-sm text-gray-200">Yearly Growth</p>
//           </div>
//           <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//             <h3 className="flex items-center gap-2 mb-1 text-2xl font-bold text-white">
//               <Network className="text-blue-400" /> 84
//             </h3>
//             <p className="text-sm text-gray-200">Connections Made</p>
//           </div>
//         </div>

//         {/* Milestones Section */}
//         <div className="p-4 bg-white shadow-md bg-opacity-10 rounded-xl backdrop-blur-md">
//           <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-white">
//             <Award className="text-purple-400" /> Recent Milestones
//           </h3>
//           <ul className="space-y-2 text-gray-200 list-disc list-inside">
//             <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Completed 'Advanced Leadership' training</li>
//             <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Led project "Phoenix" to successful launch</li>
//             <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Prepare for Q3 performance review</li>
//           </ul>
//         </div>
//       </div>
//     </div>
    
//     {/* Mentorship Tip */}
//     <div className="mt-8">
//       <div className="p-4 bg-purple-800 border border-purple-500 bg-opacity-30 rounded-xl border-opacity-40">
//         <h4 className="flex items-center gap-2 mb-1 font-bold text-purple-200"><Lightbulb size={20} className="text-purple-400" /> Mentorship Tip</h4>
//         <p className="text-sm text-gray-300">
//           Seek out a mentor in your field who is 5-10 years ahead of you. Their insights can be invaluable for long-term growth.
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const Home = () => {
//   const [name, setName] = useState(localStorage.getItem("username") || "");
//   const [userType, setUserType] = useState(localStorage.getItem("userType") || "");
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Set up the scene, camera, and renderer for the dynamic background
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setClearColor(0x000000, 0); // Transparent background
//     containerRef.current.appendChild(renderer.domElement);

//     // Create a background shape with a gradient-like color
//     const geometry = new THREE.DodecahedronGeometry(1.5, 0);
//     const material = new THREE.MeshPhysicalMaterial({
//       color: 0x6d28d9, // A deep purple color
//       metalness: 0.5,
//       roughness: 0.5,
//       clearcoat: 1,
//       clearcoatRoughness: 0.2,
//       ior: 1.5,
//       specularIntensity: 0.5,
//       specularColor: new THREE.Color(0xffffff)
//     });
//     const shape = new THREE.Mesh(geometry, material);
//     scene.add(shape);

//     // Add subtle ambient light
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     // Add a directional light for highlights
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     camera.position.z = 5;

//     // Use OrbitControls to make it interactive (optional, but a nice touch)
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update(); // only required if controls.enableDamping = true
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
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden text-white">
//       {/* Three.js animated background container */}
//       <div ref={containerRef} className="absolute inset-0 z-0"></div>

//       {/* Frosted glass overlay */}
//       <div className="absolute inset-0 z-10 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"></div>

//       {/* Main content container */}
//       <div className="relative z-20 grid items-center justify-center w-full min-h-screen grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-24">
//         {/* Left Section: Hero Text */}
//         <div className="flex flex-col items-start py-12 text-left lg:py-0">
//           <motion.h1
//             className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl drop-shadow-lg"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Your Journey, <br />
//             Our Navigation.
//           </motion.h1>
//           <motion.p
//             className="max-w-md mb-8 text-lg text-gray-200 md:text-xl drop-shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             NextStep Navigator helps you chart a clear path to your dream career, from high school to professional life.
//           </motion.p>
//         </div>

//         {/* Right Section: Form / Dynamic Content */}
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { User, Briefcase, CheckCircle, GraduationCap, TrendingUp, Network, Clock, List, Award, Lightbulb, TrendingDown, BookOpen } from 'lucide-react';

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
      
      {/* Dynamic Data Section */}
      <div className="space-y-6">
        {/* Progress Card */}
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

        {/* Next Steps Card */}
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
    
    {/* Tip of the Day */}
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
      
      {/* Job Search Stats */}
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

        {/* Skill Building Section */}
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
    
    {/* Networking Tip */}
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

      {/* Career Stats */}
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

        {/* Milestones Section */}
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
    
    {/* Mentorship Tip */}
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
  const [name, setName] = useState(localStorage.getItem("username")); // Default for demo
  const [userType, setUserType] = useState(localStorage.getItem("userType")); // Default for demo
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up the scene, camera, and renderer for the dynamic background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Create a background shape with sophisticated teal color
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x004D40, // Deep teal color
      metalness: 0.7,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.5,
      specularIntensity: 0.8,
      specularColor: new THREE.Color(0xFFD700) // Gold highlights
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Add sophisticated lighting
    const ambientLight = new THREE.AmbientLight(0x004D40, 0.4);
    scene.add(ambientLight);

    // Add a directional light with warm tones
    const directionalLight = new THREE.DirectionalLight(0xFFD700, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add a subtle rim light
    const rimLight = new THREE.DirectionalLight(0xF48FB1, 0.5);
    rimLight.position.set(-1, -1, -1);
    scene.add(rimLight);

    camera.position.z = 5;

    // Use OrbitControls to make it interactive
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
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

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001B16 0%, #004D40 50%, #00695C 100%)',
        color: '#FFF8E1'
      }}
    >
      {/* Three.js animated background container */}
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      {/* Sophisticated overlay */}
      <div 
        className="absolute inset-0 z-10 backdrop-filter backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 29, 22, 0.3)' }}
      ></div>

      {/* Main content container */}
      <div className="relative z-20 grid items-center justify-center w-full min-h-screen grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-24">
        {/* Left Section: Hero Text */}
        <div className="flex flex-col items-start py-12 text-left lg:py-0">
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
          
          {/* Elegant accent element */}
          <motion.div
            className="w-24 h-1 mb-6 rounded-full"
            style={{ backgroundColor: '#F48FB1' }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>

        {/* Right Section: Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;