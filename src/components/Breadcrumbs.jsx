// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "./icons";

// const Breadcrumbs = () => {
//    const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   return (
//     <nav className="my-4 text-sm">
//       <motion.ol
//         className="flex items-center px-4 py-2 space-x-2 rounded-full shadow-lg bg-white/10 backdrop-blur-md ring-1 ring-white/10"
//       >
//         <motion.li className="text-gray-300 transition-colors duration-200 hover:text-white">
//           <a href="/">Home</a>
//         </motion.li>
//         {pathnames.map((value, index) => {
//           const isLast = index === pathnames.length - 1;
//           return (
//             <motion.li key={index} className="flex items-center space-x-2">
//               <ChevronRight />
//               {isLast ? (
//                 <span className="font-semibold text-white capitalize">{value.replace(/-/g, ' ')}</span>
//               ) : (
//                 <a href={`/${value}`} className="text-gray-300 capitalize transition-colors duration-200 hover:text-white">
//                   {value.replace(/-/g, ' ')}
//                 </a>
//               )}
//             </motion.li>
//           );
//         })}
//       </motion.ol>
//     </nav>
//   );
// };

// export default Breadcrumbs;

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
        <motion.li className="flex items-center space-x-2">
          <ChevronRight />
          <span className="font-semibold capitalize text-cream">{value.replace(/-/g, ' ')}</span>
        </motion.li>
        )})}
      </motion.ol>
    </nav>
  );
};
export default Breadcrumbs;
