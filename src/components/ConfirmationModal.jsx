import { motion, AnimatePresence } from "framer-motion";

const ConfirmationModal = ({ onConfirm, onCancel, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-teal-900/70 backdrop-blur-sm flex items-center justify-center z-[100]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm p-8 text-center border shadow-2xl bg-cream-50 rounded-2xl border-teal-200/30"
        style={{ backgroundColor: '#FFF8E1' }}
      >
        <h3 className="mb-4 text-xl font-semibold" style={{ color: '#004D40' }}>Are you sure?</h3>
        <p className="mb-6 text-teal-700">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 font-semibold transition-all duration-200 rounded-full hover:scale-105"
            style={{ 
              color: '#004D40', 
              backgroundColor: '#E0F2F1',
              border: '2px solid #B2DFDB'
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 font-semibold transition-all duration-200 rounded-full text-cream-50 hover:scale-105"
            style={{ backgroundColor: '#F48FB1' }}
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationModal;