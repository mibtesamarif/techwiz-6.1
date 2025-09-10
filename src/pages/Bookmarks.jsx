import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import ConfirmationModal from "../components/ConfirmationModal";
import ShareModal from "../components/ShareModal";
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

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [message, setMessage] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, onConfirm: null, message: "" });
  const [shareModalState, setShareModalState] = useState({ isOpen: false, title: "", link: "" });

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

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
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <div className="flex justify-center">
          <Breadcrumbs page="Bookmarks" />
        </div>

        <div className="my-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Bookmarks
            </h1>
            <p className="text-gray-400 max-w-2xl mb-6">
                Your saved resources for future reference.
            </p>

            {/* Export & Clear All */}
            {bookmarks.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6 p-4 bg-white/5 backdrop-blur-lg rounded-2xl ring-1 ring-white/10">
                    <button
                        onClick={handleExportJSON}
                        className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 text-sm font-semibold transition"
                    >
                        Export JSON
                    </button>
                    <button
                        onClick={handleExportTXT}
                        className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 text-sm font-semibold transition"
                    >
                        Export TXT
                    </button>
                    <button
                        onClick={() => setModalState({ isOpen: true, onConfirm: handleClearAllBookmarks, message: "This will permanently delete all of your bookmarks." })}
                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-sm font-semibold transition"
                    >
                        Clear All
                    </button>
                </div>
            )}

            {/* Bookmark list */}
            {bookmarks.length > 0 ? (
                <AnimatePresence>
                    <ul className="space-y-4">
                        {bookmarks.map((b) => (
                            <motion.li
                                key={b.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 ring-1 ring-white/10 shadow-lg flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h2 className="font-semibold text-lg text-white">{b.title}</h2>
                                        <p className="text-xs text-gray-400">{b.type}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <button
                                            onClick={() => handleShare(b.title, b.link)}
                                            className="text-purple-400 hover:text-purple-300 transition-colors p-2 rounded-full"
                                        >
                                            <ShareIcon />
                                        </button>
                                        <button
                                            onClick={() => handleRemoveBookmark(b.id)}
                                            className="text-red-500 hover:text-red-400 text-sm font-semibold transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* Notes Editor */}
                                <textarea
                                    value={b.note || ""}
                                    onChange={(e) => handleUpdateNote(b.id, e.target.value)}
                                    placeholder="Add a personal note..."
                                    className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 rounded-lg p-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder-gray-500 mt-2"
                                    rows={2}
                                ></textarea>
                            </motion.li>
                        ))}
                    </ul>
                </AnimatePresence>
            ) : (
                <div className="text-gray-500 col-span-full text-center py-10">
                    <p>You don't have any bookmarks yet.</p>
                </div>
            )}
        </div>

        {/* Message Box */}
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="fixed bottom-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-50"
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>

        {/* Confirmation Modal */}
        <AnimatePresence>
            {modalState.isOpen && (
                <ConfirmationModal
                    onConfirm={modalState.onConfirm}
                    onCancel={() => setModalState({ isOpen: false })}
                    message={modalState.message}
                />
            )}
        </AnimatePresence>

        {/* Share Modal */}
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