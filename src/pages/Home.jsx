import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


// Icon for the form
const User = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Briefcase = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect x="2" y="6" width="20" height="14" rx="2" ry="2" />
  </svg>
);

const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.56" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const Home = () => {
  const [name, setName] = useState(sessionStorage.getItem("username") || "");
  const [userType, setUserType] = useState(sessionStorage.getItem("userType") || "");
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
      camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      // Check if containerRef.current is not null before trying to remove the child
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && userType) {
      sessionStorage.setItem("username", name);
      sessionStorage.setItem("userType", userType);
      window.location.reload();
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

        {/* Right Section: Form / Greeting */}
        <motion.div
          className="w-full bg-white bg-opacity-10 p-8 md:p-12 rounded-3xl shadow-2xl border border-white border-opacity-20 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {name && userType ? (
            <motion.div
              className="flex flex-col items-center justify-center text-center p-6 bg-green-500 bg-opacity-20 text-green-100 rounded-2xl border-2 border-green-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-12 h-12 mb-4 text-green-400" />
              <p className="text-xl font-semibold drop-shadow">
                Hello <span className="font-bold">{name}</span>, you're all set!
              </p>
              <p className="text-sm mt-2 text-gray-200">
                Welcome, future <span className="capitalize">{userType}</span>. Let's begin exploring.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6">
                Let's Get Started
              </h2>
              {/* Name input */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all pl-10"
                    placeholder="Enter your name"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
                </div>
              </div>

              {/* User type selection */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Your Category
                </label>
                <div className="relative">
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white appearance-none focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all cursor-pointer pl-10"
                    required
                  >
                    <option value="" className="bg-gray-800 text-gray-200">-- Choose --</option>
                    <option value="student" className="bg-gray-800 text-gray-200">Student (Grades 8–12)</option>
                    <option value="graduate" className="bg-gray-800 text-gray-200">Graduate (UG/PG)</option>
                    <option value="professional" className="bg-gray-800 text-gray-200">Working Professional</option>
                  </select>
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all"
              >
                Continue <span className="ml-2">→</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
