import { motion } from "framer-motion";
import { useEffect } from "react";

// const Toast = ({ message, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: 50, opacity: 0 }}
//       className="fixed z-50 px-6 py-3 font-semibold text-white bg-purple-600 rounded-full shadow-lg bottom-6 right-6"
//     >
//       {message}
//     </motion.div>
//   );
// };

// export default Toast;
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="fixed z-50 px-6 py-3 font-semibold rounded-full shadow-xl bottom-6 right-6 bg-gradient-to-r from-teal-600 to-teal-700 text-cream ring-2 ring-gold/30"
    >
      {message}
    </motion.div>
  );
};

export default Toast;