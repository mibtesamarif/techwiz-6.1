// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


// // Icon for the form
// const User = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );

// const Briefcase = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//     <rect x="2" y="6" width="20" height="14" rx="2" ry="2" />
//   </svg>
// );

// const CheckCircle = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M22 11.08V12a10 10 0 1 1-5.93-8.56" />
//     <path d="M22 4 12 14.01l-3-3" />
//   </svg>
// );

// const Home = () => {
//   const [name, setName] = useState(sessionStorage.getItem("username") || "");
//   const [userType, setUserType] = useState(sessionStorage.getItem("userType") || "");
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
//       camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     animate();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       // Check if containerRef.current is not null before trying to remove the child
//       if (containerRef.current) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && userType) {
//       sessionStorage.setItem("username", name);
//       sessionStorage.setItem("userType", userType);
//       window.location.reload();
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
//       {/* Three.js animated background container */}
//       <div ref={containerRef} className="absolute inset-0 z-0"></div>
      
//       {/* Frosted glass overlay */}
//       <div className="absolute inset-0 z-10 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"></div>

//       {/* Main content container */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-center min-h-screen">
//         {/* Left Section: Hero Text */}
//         <div className="flex flex-col items-start text-left py-12 lg:py-0">
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Your Journey, <br />
//             Our Navigation.
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-200 drop-shadow-lg max-w-md mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             NextStep Navigator helps you chart a clear path to your dream career, from high school to professional life.
//           </motion.p>
//         </div>

//         {/* Right Section: Form / Greeting */}
//         <motion.div
//           className="w-full bg-white bg-opacity-10 p-8 md:p-12 rounded-3xl shadow-2xl border border-white border-opacity-20 backdrop-blur-md"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           {name && userType ? (
//             <motion.div
//               className="flex flex-col items-center justify-center text-center p-6 bg-green-500 bg-opacity-20 text-green-100 rounded-2xl border-2 border-green-500"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <CheckCircle className="w-12 h-12 mb-4 text-green-400" />
//               <p className="text-xl font-semibold drop-shadow">
//                 Hello <span className="font-bold">{name}</span>, you're all set!
//               </p>
//               <p className="text-sm mt-2 text-gray-200">
//                 Welcome, future <span className="capitalize">{userType}</span>. Let's begin exploring.
//               </p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <h2 className="text-2xl font-bold text-center mb-6">
//                 Let's Get Started
//               </h2>
//               {/* Name input */}
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-2 text-gray-200">
//                   Your Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all pl-10"
//                     placeholder="Enter your name"
//                     required
//                   />
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
//                 </div>
//               </div>

//               {/* User type selection */}
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-2 text-gray-200">
//                   Your Category
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={userType}
//                     onChange={(e) => setUserType(e.target.value)}
//                     className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white appearance-none focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all cursor-pointer pl-10"
//                     required
//                   >
//                     <option value="" className="bg-gray-800 text-gray-200">-- Choose --</option>
//                     <option value="student" className="bg-gray-800 text-gray-200">Student (Grades 8–12)</option>
//                     <option value="graduate" className="bg-gray-800 text-gray-200">Graduate (UG/PG)</option>
//                     <option value="professional" className="bg-gray-800 text-gray-200">Working Professional</option>
//                   </select>
//                   <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all"
//               >
//                 Continue <span className="ml-2">→</span>
//               </button>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// 


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { User, Briefcase, CheckCircle, GraduationCap, TrendingUp, Network, Clock, List, Award, Lightbulb, TrendingDown, BookOpen } from 'lucide-react';

const StudentContent = ({ name }) => (
  <motion.div
    className="w-full h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 shadow-2xl border border-white border-opacity-20 backdrop-blur-sm flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
      <p className="text-lg text-gray-200 mb-6">Welcome back to your journey. Here's what's next.</p>
      
      {/* Dynamic Data Section */}
      <div className="space-y-6">
        {/* Progress Card */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="text-purple-400" /> Career Path Progress
            </h3>
            <span className="text-sm font-semibold text-purple-200">65% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
            <List className="text-purple-400" /> Your Next Steps
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Research college majors</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Update your resume for internships</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Schedule a meeting with your career advisor</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Tip of the Day */}
    <div className="mt-8">
      <div className="bg-purple-800 bg-opacity-30 p-4 rounded-xl border border-purple-500 border-opacity-40">
        <h4 className="flex items-center gap-2 text-purple-200 font-bold mb-1"><Lightbulb size={20} className="text-purple-400" /> Tip of the Day</h4>
        <p className="text-sm text-gray-300">
          Start building a portfolio of your school projects. It's a great way to showcase your skills to future employers and colleges.
        </p>
      </div>
    </div>
  </motion.div>
);

const GraduateContent = ({ name }) => (
  <motion.div
    className="w-full h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 shadow-2xl border border-white border-opacity-20 backdrop-blur-sm flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
      <p className="text-lg text-gray-200 mb-6">Let's track your job hunt and career skills.</p>
      
      {/* Job Search Stats */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <Briefcase className="text-purple-400" /> 27
            </h3>
            <p className="text-sm text-gray-200">Applications Sent</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <CheckCircle className="text-green-400" /> 3
            </h3>
            <p className="text-sm text-gray-200">Interviews Scheduled</p>
          </div>
        </div>

        {/* Skill Building Section */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
            <BookOpen className="text-purple-400" /> Skill Building
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li className="flex items-center gap-2"><TrendingUp size={16} className="text-green-400" /> Complete 'Advanced React' course on Coursera</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Prepare for technical interviews</li>
            <li className="flex items-center gap-2"><TrendingUp size={16} className="text-green-400" /> Earn 'Project Management Professional' certificate</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Networking Tip */}
    <div className="mt-8">
      <div className="bg-purple-800 bg-opacity-30 p-4 rounded-xl border border-purple-500 border-opacity-40">
        <h4 className="flex items-center gap-2 text-purple-200 font-bold mb-1"><Lightbulb size={20} className="text-purple-400" /> Networking Tip</h4>
        <p className="text-sm text-gray-300">
          Connect with at least two alumni from your university who work in your target industry this week.
        </p>
      </div>
    </div>
  </motion.div>
);

const ProfessionalContent = ({ name }) => (
  <motion.div
    className="w-full h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-950 to-purple-900 shadow-2xl border border-white border-opacity-20 backdrop-blur-sm flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">Hello, <span className="text-purple-300">{name}!</span></h2>
      <p className="text-lg text-gray-200 mb-6">Track your growth and expand your network.</p>

      {/* Career Stats */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <TrendingUp className="text-green-400" /> 15%
            </h3>
            <p className="text-sm text-gray-200">Yearly Growth</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <Network className="text-blue-400" /> 84
            </h3>
            <p className="text-sm text-gray-200">Connections Made</p>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
            <Award className="text-purple-400" /> Recent Milestones
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Completed 'Advanced Leadership' training</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Led project "Phoenix" to successful launch</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> Prepare for Q3 performance review</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Mentorship Tip */}
    <div className="mt-8">
      <div className="bg-purple-800 bg-opacity-30 p-4 rounded-xl border border-purple-500 border-opacity-40">
        <h4 className="flex items-center gap-2 text-purple-200 font-bold mb-1"><Lightbulb size={20} className="text-purple-400" /> Mentorship Tip</h4>
        <p className="text-sm text-gray-300">
          Seek out a mentor in your field who is 5-10 years ahead of you. Their insights can be invaluable for long-term growth.
        </p>
      </div>
    </div>
  </motion.div>
);

const InitialForm = ({ onUserTypeSelect, setName }) => {
  const [localName, setLocalName] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localName && selectedType) {
      localStorage.setItem("username", localName);
      localStorage.setItem("userType", selectedType);
      setName(localName); // Update parent state
      onUserTypeSelect(selectedType); // Update parent state
    }
  };

  return (
    <motion.div
      className="w-full bg-white bg-opacity-10 p-8 md:p-12 rounded-3xl shadow-2xl border border-white border-opacity-20 backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center text-center p-6 text-white rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Welcome to NextStep Navigator!</h2>
        <p className="text-md mb-6 text-gray-200">
          Let's get started. Tell us a little about yourself to personalize your experience.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Your Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="e.g., Alex"
              className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <label htmlFor="userType" className="block text-white text-sm font-medium mb-2">
            Your current status
          </label>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <button
              type="button"
              onClick={() => setSelectedType("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 ease-in-out ${selectedType === "student" ? "bg-purple-600 text-white shadow-lg" : "bg-white bg-opacity-10 text-gray-200 hover:bg-opacity-20"}`}
            >
              <GraduationCap className="h-6 w-6" /> Student
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("graduate")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 ease-in-out ${selectedType === "graduate" ? "bg-purple-600 text-white shadow-lg" : "bg-white bg-opacity-10 text-gray-200 hover:bg-opacity-20"}`}
            >
              <Briefcase className="h-6 w-6" /> Graduate
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("professional")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 ease-in-out ${selectedType === "professional" ? "bg-purple-600 text-white shadow-lg" : "bg-white bg-opacity-10 text-gray-200 hover:bg-opacity-20"}`}
            >
              <TrendingUp className="h-6 w-6" /> Professional
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!localName || !selectedType}
          className="w-full py-3 bg-purple-500 text-white font-bold rounded-xl shadow-lg hover:bg-purple-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Begin Your Journey
        </button>
      </form>
    </motion.div>
  );
};

const Home = () => {
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [userType, setUserType] = useState(localStorage.getItem("userType") || "");
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

    // Create a background shape with a gradient-like color
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x6d28d9, // A deep purple color
      metalness: 0.5,
      roughness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
      ior: 1.5,
      specularIntensity: 0.5,
      specularColor: new THREE.Color(0xffffff)
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add a directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Use OrbitControls to make it interactive (optional, but a nice touch)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // only required if controls.enableDamping = true
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
        return <InitialForm onUserTypeSelect={setUserType} setName={setName} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
      {/* Three.js animated background container */}
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      {/* Frosted glass overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"></div>

      {/* Main content container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-center min-h-screen">
        {/* Left Section: Hero Text */}
        <div className="flex flex-col items-start text-left py-12 lg:py-0">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Journey, <br />
            Our Navigation.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 drop-shadow-lg max-w-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            NextStep Navigator helps you chart a clear path to your dream career, from high school to professional life.
          </motion.p>
        </div>

        {/* Right Section: Form / Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
