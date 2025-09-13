import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "./icons";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="my-4 text-sm">
      <motion.ol className="flex items-center px-6 py-3 space-x-2 rounded-full shadow-lg bg-cream/10 backdrop-blur-md ring-1 ring-cream/20">
        <motion.li className="text-teal-200 transition-colors duration-200 hover:text-cream">
          <span>Home</span>
        </motion.li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
        <motion.li className="flex items-center space-x-2" key={value}>
          <ChevronRight />
          <span className="font-semibold capitalize text-cream">{value.replace(/-/g, ' ')}</span>
        </motion.li>
        )})}
      </motion.ol>
    </nav>
  );
};
export default Breadcrumbs;
