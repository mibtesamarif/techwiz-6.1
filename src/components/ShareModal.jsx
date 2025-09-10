import { motion, AnimatePresence } from "framer-motion";

const ShareModal = ({ onCancel, title, link, showMessage }) => {
  const handleCopy = async () => {
   try {
     await navigator.clipboard.writeText(link);
     showMessage("Link copied!");
     } catch (e) {
     showMessage("Failed to copy link.");
     }
     onCancel();
     };

     const socialLinks = [
    { name: "LinkedIn", icon: <LinkedinIcon />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}` },
     { name: "Twitter", icon: <TwitterIcon />, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(`Check out this resource: ${title}`)}` },
     ];

     return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]"
    onClick={onCancel}
    >
    <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     exit={{ scale: 0.9, opacity: 0 }}
     className="bg-gray-800 p-8 rounded-2xl shadow-xl ring-1 ring-gray-700 w-full max-w-sm"
     onClick={e => e.stopPropagation()}
     >
     <h3 className="text-xl font-semibold text-white mb-4">Share Resource</h3>
     <p className="text-gray-400 mb-6 truncate">{title}</p>
     <div className="flex justify-center gap-4">
     {socialLinks.map(platform => (
     <a
            key={platform.name}
     href={platform.href}
     target="_blank"
     rel="noopener noreferrer"
     className="p-4 rounded-full bg-gray-700 hover:bg-purple-600 transition"
     >
     {platform.icon}
     </a>
     ))}
     <button
     onClick={handleCopy}
     className="p-4 rounded-full bg-gray-700 hover:bg-purple-600 transition"
     >
     <CopyIcon />
     </button>
     </div>
     </motion.div>
     </motion.div>
  );
};
export default ShareModal;