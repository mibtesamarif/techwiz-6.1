import { motion, AnimatePresence } from "framer-motion";
import { LinkedinIcon, TwitterIcon, CopyIcon } from "./icons";

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
      className="fixed inset-0 bg-teal-900/70 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm p-8 border shadow-2xl rounded-2xl border-teal-200/30"
        style={{ backgroundColor: '#FFF8E1' }}
        onClick={e => e.stopPropagation()}
      >
        <h3 className="mb-4 text-xl font-semibold" style={{ color: '#004D40' }}>Share Resource</h3>
        <p className="mb-6 text-teal-700 truncate">{title}</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map(platform => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-all duration-200 rounded-full hover:scale-110"
              style={{ 
                backgroundColor: '#004D40',
                color: '#FFF8E1'
              }}
            >
              {platform.icon}
            </a>
          ))}
          <button
            onClick={handleCopy}
            className="p-4 transition-all duration-200 rounded-full hover:scale-110"
            style={{ 
              backgroundColor: '#FFD700',
              color: '#004D40'
            }}
          >
            <CopyIcon />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ShareModal;