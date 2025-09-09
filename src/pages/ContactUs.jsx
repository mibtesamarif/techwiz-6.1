// // src/pages/ContactUs.jsx
// import CounterClock from "../components/CounterClock";
// import LocationWidget from "../components/LocationWidget";
// import Breadcrumbs from "../components/Breadcrumbs";

// const ContactUs = () => {
//   return (
//     <div className="space-y-8">
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

//       {/* Contact Info */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Our Office</h2>
//         <p className="text-gray-700">NextStep Navigator Team</p>
//         <p className="text-gray-700">123 Career Street, Knowledge City</p>
//         <p className="text-gray-700">Email: support@nextstepnavigator.com</p>
//         <p className="text-gray-700">Phone: +1 (234) 567-890</p>
//       </section>

//       {/* Google Map */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-3">Find Us</h2>
//         <div className="w-full h-64">
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257570403728!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77a1b5b9%3A0x4a9b0d0c9a0d6b7b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618354978321!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>

//       {/* Widgets */}
//       <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
//         <h2 className="text-xl font-semibold mb-3">Live Info</h2>
//         <CounterClock />
//         <LocationWidget />
//       </section>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function for a static breadcrumb to avoid react-router-dom dependency
const Breadcrumbs = () => (
  <nav className="text-sm my-4">
    <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10">
      <li className="text-gray-300 hover:text-white transition-colors duration-200">
        <a href="/">Home</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="h-4 w-4 text-gray-400">/</span>
        <span className="capitalize text-white font-semibold">contact us</span>
      </li>
    </ol>
  </nav>
);

// Inline SVG Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2h3.4l1-1H16l1 1h3.4a2 2 0 012 2z" />
    <path d="M12 16v-6" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

// Counter and Location Widgets (re-factored into a single component)
const LiveInfo = () => {
  const [time, setTime] = useState(new Date());
  const [visits, setVisits] = useState(() => {
    // Get initial value from localStorage
    return parseInt(localStorage.getItem("visits") || "0", 10);
  });
  const [location, setLocation] = useState(null);

  // Update visitor count on component mount
  useEffect(() => {
    const newVisits = visits + 1;
    setVisits(newVisits);
    localStorage.setItem("visits", newVisits);
  }, []);

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Location effect
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude.toFixed(4),
            lon: pos.coords.longitude.toFixed(4)
          });
        },
        (err) => {
          setLocation({ error: "Location permission denied." });
        }
      );
    } else {
      setLocation({ error: "Geolocation not supported." });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
    >
      {/* Current Time Widget */}
      <motion.div
        className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 mr-4">
          <ClockIcon />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-300">Current Time</h3>
          <p className="text-white font-mono text-lg">{time.toLocaleTimeString()}</p>
        </div>
      </motion.div>

      {/* Visitor Count Widget */}
      <motion.div
        className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 mr-4">
          <GlobeIcon />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-300">Visitor Count</h3>
          <p className="text-white font-mono text-lg">{visits}</p>
        </div>
      </motion.div>

      {/* Location Widget */}
      <motion.div
        className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center shadow-lg col-span-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 mr-4">
          <MapPinIcon />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-300">Your Location</h3>
          <AnimatePresence mode="wait">
            {location ? (
              location.error ? (
                <motion.p key="error" className="text-red-400 font-mono text-lg">{location.error}</motion.p>
              ) : (
                <motion.p key="location" className="text-white font-mono text-lg">
                  Lat: {location.lat}, Lon: {location.lon}
                </motion.p>
              )
            ) : (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center text-gray-400">
                <span>Fetching location...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main ContactUs App
const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-gray-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Connect With Our Team
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
            We are here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Email Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <MailIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Email Us</h2>
            <p className="text-gray-400">
              <a href="mailto:support@nextstepnavigator.com" className="hover:underline transition-colors duration-200">
                support@nextstepnavigator.com
              </a>
            </p>
          </div>
          {/* Phone Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <PhoneIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Call Us</h2>
            <p className="text-gray-400">
              <a href="tel:+1234567890" className="hover:underline transition-colors duration-200">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          {/* Address Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <MapPinIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Our Office</h2>
            <p className="text-gray-400">123 Career Street, Knowledge City</p>
          </div>
        </motion.section>

        {/* Live Info Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            Real-Time Information
          </h2>
          <LiveInfo />
        </section>

        {/* Google Map Section */}
        <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            Find Us on the Map
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257570403728!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77a1b5b9%3A0x4a9b0d0c9a0d6b7b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618354978321!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
