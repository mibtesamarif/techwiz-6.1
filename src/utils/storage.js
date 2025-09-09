// src/utils/storage.js

export const getBookmarks = () => {
  return JSON.parse(localStorage.getItem("bookmarks") || "[]");
};

export const addBookmark = (bookmark) => {
  const bookmarks = getBookmarks();
  if (!bookmarks.some((b) => b.id === bookmark.id)) {
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (id) => {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter((b) => b.id !== id);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const clearBookmarks = () => {
  localStorage.removeItem("bookmarks");
};

export const updateBookmarkNote = (id, note) => {
  const bookmarks = getBookmarks();
  const updated = bookmarks.map((b) =>
    b.id === id ? { ...b, note } : b
  );
  localStorage.setItem("bookmarks", JSON.stringify(updated));
};
