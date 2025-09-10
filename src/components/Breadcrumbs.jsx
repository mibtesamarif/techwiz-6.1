// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "./icons";

const Breadcrumbs = () => {
   const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="text-sm my-4">
      <motion.ol
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10"
      >
        <motion.li className="text-gray-300 transition-colors duration-200 hover:text-white">
          <a href="/">Home</a>
        </motion.li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <motion.li key={index} className="flex items-center space-x-2">
              <ChevronRight />
              {isLast ? (
                <span className="capitalize text-white font-semibold">{value.replace(/-/g, ' ')}</span>
              ) : (
                <a href={`/${value}`} className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value.replace(/-/g, ' ')}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

export default Breadcrumbs;
