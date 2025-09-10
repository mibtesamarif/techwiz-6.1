const getBookmarks = () => {
  try {
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (e) {
    console.error("Failed to get bookmarks from localStorage:", e);
    return [];
  }
};

const addBookmark = (bookmark) => {
  try {
    const bookmarks = getBookmarks();
    if (!bookmarks.some((b) => b.id === bookmark.id)) {
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      console.log("Bookmark already exists.");
    }
  } catch (e) {
    console.error("Failed to add bookmark to localStorage:", e);
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

export { getBookmarks, addBookmark, removeBookmark, clearBookmarks, updateBookmarkNote };
