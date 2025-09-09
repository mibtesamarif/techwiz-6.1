// // src/pages/Bookmarks.jsx
// import { useState, useEffect } from "react";
// import {
//   getBookmarks,
//   removeBookmark,
//   clearBookmarks,
//   updateBookmarkNote
// } from "../utils/storage";
// import Breadcrumbs from "../components/Breadcrumbs";

// const Bookmarks = () => {
//   const [bookmarks, setBookmarks] = useState([]);

//   useEffect(() => {
//     setBookmarks(getBookmarks());
//   }, []);

//   const handleRemove = (id) => {
//     removeBookmark(id);
//     setBookmarks(getBookmarks());
//   };

//   const handleClearAll = () => {
//     if (window.confirm("Clear all bookmarks?")) {
//       clearBookmarks();
//       setBookmarks([]);
//     }
//   };

//   const handleNoteChange = (id, newNote) => {
//     updateBookmarkNote(id, newNote);
//     setBookmarks(getBookmarks()); // refresh
//   };

//   const handleExportJSON = () => {
//     const dataStr =
//       "data:text/json;charset=utf-8," +
//       encodeURIComponent(JSON.stringify(bookmarks, null, 2));
//     const a = document.createElement("a");
//     a.href = dataStr;
//     a.download = "bookmarks.json";
//     a.click();
//   };

//   const handleExportTXT = () => {
//     const text = bookmarks
//       .map(
//         (b, idx) =>
//           `${idx + 1}. ${b.title} (${b.type})${
//             b.note ? " - Note: " + b.note : ""
//           }`
//       )
//       .join("\n");
//     const blob = new Blob([text], { type: "text/plain" });
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "bookmarks.txt";
//     a.click();
//   };

//   return (
//     <div>
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>

//       {/* Export & Clear All */}
//       {bookmarks.length > 0 && (
//         <div className="flex gap-2 mb-6">
//           <button
//             onClick={handleExportJSON}
//             className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//           >
//             Export JSON
//           </button>
//           <button
//             onClick={handleExportTXT}
//             className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
//           >
//             Export TXT
//           </button>
//           <button
//             onClick={handleClearAll}
//             className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
//           >
//             Clear All
//           </button>
//         </div>
//       )}

//       {/* Bookmark list */}
//       {bookmarks.length > 0 ? (
//         <ul className="space-y-4">
//           {bookmarks.map((b) => (
//             <li
//               key={b.id}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <div>
//                   <h2 className="font-semibold">{b.title}</h2>
//                   <p className="text-xs text-gray-500">{b.type}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(b.id)}
//                   className="text-red-600 hover:underline text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>

//               {/* Notes Editor */}
//               <textarea
//                 value={b.note || ""}
//                 onChange={(e) => handleNoteChange(b.id, e.target.value)}
//                 placeholder="Add a personal note..."
//                 className="w-full border rounded p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows={2}
//               ></textarea>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-600">No bookmarks yet.</p>
//       )}
//     </div>
//   );
// };

// export default Bookmarks;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons & Components ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

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

const Breadcrumbs = ({ page }) => {
  const pathnames = [page];
  return (
    <nav className="text-sm my-4">
      <motion.ol
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10"
      >
        <motion.li
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Home
        </motion.li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <motion.li key={index} className="flex items-center space-x-2">
              <ChevronRight />
              {isLast ? (
                <span className="capitalize text-white font-semibold">{value}</span>
              ) : (
                <span className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value}
                </span>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

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

// --- Local Storage Utility Functions ---
const getBookmarks = () => {
  try {
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (e) {
    console.error("Failed to get bookmarks from localStorage:", e);
    return [];
  }
};

const removeBookmark = (id) => {
  try {
    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter((b) => b.id !== id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } catch (e) {
    console.error("Failed to remove bookmark from localStorage:", e);
  }
};

const clearBookmarks = () => {
  try {
    localStorage.removeItem("bookmarks");
  } catch (e) {
    console.error("Failed to clear bookmarks from localStorage:", e);
  }
};

const updateBookmarkNote = (id, note) => {
  try {
    const bookmarks = getBookmarks();
    const updated = bookmarks.map((b) =>
      b.id === id ? { ...b, note } : b
    );
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update bookmark note in localStorage:", e);
  }
};


// --- Main App Component ---
const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [message, setMessage] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, onConfirm: null, message: "" });

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

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <div className="flex justify-between items-center">
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
                                    <button
                                        onClick={() => handleRemoveBookmark(b.id)}
                                        className="text-red-500 hover:text-red-400 text-sm font-semibold transition"
                                    >
                                        Remove
                                    </button>
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
      </div>
    </div>
  );
};

export default Bookmarks;
