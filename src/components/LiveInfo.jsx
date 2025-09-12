import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClockIcon, GlobeIcon, MapPinIcon } from "./icons";

const LiveInfo = () => {
  const [time, setTime] = useState(new Date());
  const [visits, setVisits] = useState(157);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLocation({
        lat: "40.7128",
        lon: "-74.0060"
      });
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
    >
      <motion.div
        className="flex items-center p-6 transition-shadow duration-300 border shadow-lg bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl border-teal-700/30 hover:shadow-xl"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 p-3 mr-4 rounded-full bg-amber-400/10">
          <ClockIcon />
        </div>
        <div>
          <h3 className="mb-1 text-xl font-bold text-yellow-100">Current Time</h3>
          <p className="font-mono text-lg tracking-wide text-amber-200">{time.toLocaleTimeString()}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center p-6 transition-shadow duration-300 border shadow-lg bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl border-teal-700/30 hover:shadow-xl"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 p-3 mr-4 rounded-full bg-pink-400/10">
          <GlobeIcon />
        </div>
        <div>
          <h3 className="mb-1 text-xl font-bold text-yellow-100">Visitor Count</h3>
          <p className="font-mono text-lg tracking-wide text-pink-200">{visits.toLocaleString()}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center col-span-2 p-6 transition-shadow duration-300 border shadow-lg bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-sm rounded-2xl border-teal-700/30 hover:shadow-xl"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex-shrink-0 p-3 mr-4 rounded-full bg-pink-400/10">
          <MapPinIcon />
        </div>
        <div>
          <h3 className="mb-1 text-xl font-bold text-yellow-100">Your Location</h3>
          <AnimatePresence mode="wait">
            {location ? (
              location.error ? (
                <motion.p key="error" className="font-mono text-lg text-red-300">{location.error}</motion.p>
              ) : (
                <motion.p key="location" className="font-mono text-lg tracking-wide text-pink-200">
                  Lat: {location.lat}, Lon: {location.lon}
                </motion.p>
              )
            ) : (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center text-yellow-200">
                <div className="w-4 h-4 mr-3 border-2 rounded-full animate-spin border-amber-400 border-t-transparent"></div>
                <span>Fetching location...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LiveInfo;