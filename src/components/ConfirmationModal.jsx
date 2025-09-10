import { motion, AnimatePresence } from "framer-motion";


const ConfirmationModal = ({ onConfirm, onCancel, message }) => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]"
     >
     <motion.div
     initial={{ scale: 0.9, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     exit={{ scale: 0.9, opacity: 0 }}
     className="bg-gray-800 p-8 rounded-2xl shadow-xl ring-1 ring-gray-700 w-full max-w-sm text-center"
     >
     <h3 className="text-xl font-semibold text-white mb-4">Are you sure?</h3>
     <p className="text-gray-400 mb-6">{message}</p>
     <div className="flex justify-center gap-4">
     <button
     onClick={onCancel}
     className="px-6 py-2 rounded-full font-semibold text-gray-300 bg-gray-700 hover:bg-gray-600 transition"
     >
     Cancel
     </button>
     <button
     onClick={onConfirm}
     className="px-6 py-2 rounded-full font-semibold text-white bg-red-600 hover:bg-red-700 transition"
     >
     Confirm
     </button>
     </div>
     </motion.div>
   </motion.div>
  );
};

export default ConfirmationModal;
