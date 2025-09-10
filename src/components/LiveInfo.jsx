import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClockIcon, GlobeIcon, MapPinIcon } from "./icons";

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

export default LiveInfo;