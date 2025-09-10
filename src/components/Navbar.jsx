import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getBookmarks } from "../utils/storage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [bookmarkCount, setBookmarkCount] = useState(0);

  // Get the navigation function from react-router-dom
  const navigate = useNavigate();

  useEffect(() => {
    const updateBookmarks = () => {
      setBookmarkCount(getBookmarks().length);
    };
    updateBookmarks();

    // Listen for storage changes to update the count
    window.addEventListener("storage", updateBookmarks);
    return () => window.removeEventListener("storage", updateBookmarks);
  }, []);

  useEffect(() => {
    // Retrieve username from localStorage to be consistent
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  // Handle logout and redirection
  const handleBack = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userContact");
    localStorage.removeItem("userType");
    localStorage.removeItem("bookmarks");
    
    
    // Navigate back to the landing page
    navigate("/");

    // Reload the page to reset the app state and show the landing page
    window.location.reload(); 
  };

  const linkClasses = "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClasses = "text-white bg-blue-700";
  const inactiveClasses = "text-gray-200 hover:bg-blue-600 hover:text-white";

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50 transition-shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <svg
            className="w-8 h-8 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
          </svg>
          NextStep Navigator
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/career-bank"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Career Bank
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Quiz
          </NavLink>
          <NavLink
            to="/multimedia"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Multimedia
          </NavLink>
          <NavLink
            to="/success-stories"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            Resources
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center gap-1`}
          >
            Bookmarks
            {bookmarkCount > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                {bookmarkCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Right side - User info + Back button */}
        <div className="hidden md:flex items-center space-x-4">
          {username && (
            <span className="text-sm font-semibold text-white px-3 py-1 rounded-full bg-blue-700">
              Welcome, {username} 👋
            </span>
          )}
          {/* Back button */}
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 hover:scale-105 transform transition text-sm shadow-md"
          >
            Back
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-blue-700"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2 transition-all duration-300 ease-in-out" id="mobile-menu">
          <NavLink to="/" end className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/career-bank" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Career Bank
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Quiz
          </NavLink>
          <NavLink to="/multimedia" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Multimedia
          </NavLink>
          <NavLink to="/success-stories" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Success Stories
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Resources
          </NavLink>
          <NavLink to="/admission" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Admission
          </NavLink>
          <NavLink to="/coaching" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Coaching
          </NavLink>
          <NavLink to="/bookmarks" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center gap-1`} onClick={() => setIsOpen(false)}>
            Bookmarks
            {bookmarkCount > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                {bookmarkCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/feedback" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Feedback
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
          <div className="flex flex-col space-y-2 pt-4">
            {username && (
              <p className="text-sm font-semibold text-white">Welcome, {username} 👋</p>
            )}
            {/* Back button */}
            <button 
              onClick={handleBack}
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold text-sm shadow-md"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;