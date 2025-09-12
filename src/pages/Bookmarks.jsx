import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import ConfirmationModal from "../components/ConfirmationModal";
import ShareModal from "../components/ShareModal";
import { LinkedinIcon, ShareIcon, TwitterIcon, CopyIcon } from "../components/icons";
import { getBookmarks, updateBookmarkNote, clearBookmarks, removeBookmark } from "../utils/storage";

const typeIcons = {
  Article: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
  ),
  eBook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  ),
  Checklist: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
  ),
  Webinar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  ),
};

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [message, setMessage] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, onConfirm: null, message: "" });
  const [shareModalState, setShareModalState] = useState({ isOpen: false, title: "", link: "" });

  const handleRemoveBookmark = (id) => {
    removeBookmark(id);
    setBookmarks(getBookmarks());
    showMessage("Bookmark removed!");
  };

  const handleClearAllBookmarks = () => {
    setModalState({
      isOpen: true,
      onConfirm: () => {
        clearBookmarks();
        setBookmarks([]);
        setModalState({ isOpen: false });
        showMessage("All bookmarks cleared!");
      },
      message: "This will permanently delete all of your bookmarks."
    });
  };

  const handleUpdateNote = (id, newNote) => {
    updateBookmarkNote(id, newNote);
    setBookmarks(getBookmarks());
  };

  const handleExportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(bookmarks, null, 2));
    const a = document.createElement("a");
    a.href = dataStr;
    a.download = "bookmarks.json";
    a.click();
    showMessage("Bookmarks exported as JSON!");
  };

  const handleExportTXT = () => {
    const text = bookmarks
      .map(
        (b, idx) =>
          `${idx + 1}. ${b.title} (${b.type})${
            b.note ? " - Note: " + b.note : ""
          }`
      )
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bookmarks.txt";
    a.click();
    showMessage("Bookmarks exported as TXT!");
  };

  const showMessage = (msg) => {
    setMessage(msg);
    const timer = setTimeout(() => {
      setMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };
  
  const handleShare = (title, link) => {
    setShareModalState({ isOpen: true, title, link });
  };

  return (
    <div 
      className="relative flex flex-col items-center min-h-screen p-4 overflow-hidden font-sans sm:p-8"
      style={{ 
        background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 rounded-full w-96 h-96 blur-3xl" style={{ backgroundColor: '#FFD700' }}></div>
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 blur-3xl" style={{ backgroundColor: '#F48FB1' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex justify-center text-amber-50">
          <Breadcrumbs page="Bookmarks" />
        </div>

        <div className="my-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 text-4xl font-extrabold tracking-tight text-center md:text-5xl"
            style={{ color: '#FFF8E1' }}
          >
            Your Curated Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-lg text-center"
            style={{ color: '#B2DFDB' }}
          >
            Thoughtfully organized resources for your continuous growth and inspiration.
          </motion.p>

          {bookmarks.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 p-6 mb-8 border shadow-2xl rounded-3xl backdrop-blur-lg"
              style={{ 
                backgroundColor: 'rgba(255, 248, 225, 0.1)',
                borderColor: 'rgba(255, 215, 0, 0.2)'
              }}
            >
              <button
                onClick={handleExportJSON}
                className="px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-full hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#FFD700',
                  color: '#004D40'
                }}
              >
                Export JSON
              </button>
              <button
                onClick={handleExportTXT}
                className="px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-full hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#FFD700',
                  color: '#004D40'
                }}
              >
                Export TXT
              </button>
              <button
                onClick={handleClearAllBookmarks}
                className="px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-full hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#F48FB1',
                  color: '#FFF8E1'
                }}
              >
                Clear All
              </button>
            </motion.div>
          )}

          {bookmarks.length > 0 ? (
            <AnimatePresence>
              <ul className="space-y-6">
                {bookmarks.map((b, index) => (
                  <motion.li
                    key={b.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-3xl p-6 backdrop-blur-lg border shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: 'rgba(255, 248, 225, 0.95)',
                      borderColor: 'rgba(255, 215, 0, 0.3)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-3 rounded-2xl"
                          style={{ 
                            backgroundColor: 'rgba(0, 77, 64, 0.1)',
                            color: '#004D40'
                          }}
                        >
                          {typeIcons[b.type]}
                        </div>
                        <div>
                          <h2 
                            className="mb-1 text-xl font-semibold"
                            style={{ color: '#004D40' }}
                          >
                            {b.title}
                          </h2>
                          <span 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                            style={{ 
                              backgroundColor: 'rgba(255, 215, 0, 0.2)',
                              color: '#00695C'
                            }}
                          >
                            {b.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleShare(b.title, b.link)}
                          className="p-2 transition-all duration-200 rounded-full hover:scale-110"
                          style={{ 
                            color: '#FFD700',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)'
                          }}
                        >
                          <ShareIcon />
                        </button>
                        <button
                          onClick={() => handleRemoveBookmark(b.id)}
                          className="px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full hover:scale-105"
                          style={{ 
                            color: '#F48FB1',
                            backgroundColor: 'rgba(244, 143, 177, 0.1)'
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <textarea
                      value={b.note || ""}
                      onChange={(e) => handleUpdateNote(b.id, e.target.value)}
                      placeholder="Add your personal insights and notes..."
                      className="w-full p-4 text-sm transition-all duration-200 bg-transparent border-2 resize-none rounded-2xl focus:outline-none"
                      style={{ 
                        borderColor: 'rgba(0, 77, 64, 0.2)',
                        color: '#00695C'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FFD700';
                        e.target.style.boxShadow = '0 0 0 3px rgba(255, 215, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(0, 77, 64, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                      rows={3}
                    />
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <div 
                className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full"
                style={{ backgroundColor: 'rgba(255, 248, 225, 0.1)' }}
              >
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#B2DFDB" 
                  strokeWidth="1.5"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <p className="text-xl" style={{ color: '#B2DFDB' }}>
                Your bookmark collection awaits
              </p>
              <p className="mt-2 text-sm" style={{ color: 'rgba(178, 223, 219, 0.7)' }}>
                Start curating your favorite resources
              </p>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="fixed z-50 px-8 py-4 font-semibold border rounded-full shadow-2xl bottom-6 right-6"
              style={{ 
                backgroundColor: '#FFD700',
                color: '#004D40',
                borderColor: 'rgba(255, 215, 0, 0.3)'
              }}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {modalState.isOpen && (
            <ConfirmationModal
              onConfirm={modalState.onConfirm}
              onCancel={() => setModalState({ isOpen: false })}
              message={modalState.message}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {shareModalState.isOpen && (
            <ShareModal
              onCancel={() => setShareModalState({ isOpen: false, title: "", link: "" })}
              title={shareModalState.title}
              link={shareModalState.link}
              showMessage={showMessage}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Bookmarks;