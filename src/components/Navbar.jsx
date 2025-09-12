import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getBookmarks } from "../utils/storage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const updateBookmarks = () => {
       setBookmarkCount(getBookmarks().length);
    };
    updateBookmarks();

    const handleStorageChange = () => updateBookmarks();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const storedName = localStorage.getItem("username");
  useEffect(() => {
    setUsername(storedName);
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    console.log("Clearing user data and navigating to landing page");
    setUsername("");
    setBookmarkCount(0);
    setActiveLink("home");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userContact");
    localStorage.removeItem("userType");
    localStorage.removeItem("bookmarks");
    navigate("/");
    window.location.reload(); 
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsOpen(false);
    console.log(`Navigating to: ${linkId}`);
  };

  const linkClasses = "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer select-none";
  const activeClasses = "text-teal-900 bg-amber-200 shadow-md transform scale-105";
  const inactiveClasses = "text-amber-100 hover:bg-amber-50 hover:bg-opacity-10 hover:text-amber-50 hover:scale-105 transform";

  const desktopMenuItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "career-bank", label: "Career Bank", to: "/career-bank" },
    { id: "quiz", label: "Quiz", to: "/quiz" },
    { id: "multimedia", label: "Multimedia", to: "/multimedia" },
    { id: "success-stories", label: "Success Stories", to: "/success-stories" },
    { id: "resources", label: "Resources", to: "/resources" },
    { id: "admission&coaching", label: "Admission & Coaching", to: "/admission&coaching" },
    { id: "bookmarks", label: "Bookmarks", hasCount: true, to: "/bookmarks" }
  ];

  const mobileMenuItems = [
    ...desktopMenuItems,
    { id: "about", label: "About Us", to: "/about" },
    { id: "feedback", label: "Feedback", to: "/feedback" },
    { id: "contact", label: "Contact Us", to: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b shadow-xl bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-amber-50 backdrop-blur-sm border-amber-300 border-opacity-20">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto md:px-6 md:py-4">
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 text-lg font-bold transition-all duration-300 cursor-pointer group hover:scale-105 md:gap-3 md:text-xl"
        >
          <div className="p-1.5 md:p-2 transition-all duration-300 shadow-lg bg-amber-400 rounded-xl group-hover:shadow-amber-400/50">
            <svg
              className="w-5 h-5 text-teal-900 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
            </svg>
          </div>
          <span className="text-transparent bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text">
            NextStep Navigator
          </span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          {username && (
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold bg-teal-800 border text-amber-100 rounded-xl bg-opacity-60 backdrop-blur-sm border-amber-300 border-opacity-30 hidden md:block">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="hidden sm:inline">Welcome, </span>{username} 👋
            </div>
          )}
          <button
            onClick={handleBack}
            className="px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-bold text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:scale-105 hover:shadow-amber-400/50"
          >
            Back
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-all duration-300 lg:hidden text-amber-100 focus:outline-none rounded-xl hover:bg-teal-800 hover:bg-opacity-60"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden border-t lg:block border-amber-300 border-opacity-20 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800">
        <div className="container flex items-center justify-center px-4 mx-auto md:px-6">
          <div className="flex items-center py-3 space-x-1 xl:space-x-2">
            {desktopMenuItems.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${item.hasCount ? 'flex items-center gap-2' : ''}`}
              >
                <span>{item.label}</span>
                {item.hasCount && bookmarkCount > 0 && (
                  <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[18px] text-center shadow-lg animate-pulse">
                    {bookmarkCount}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
        }`} 
        id="mobile-menu"
      >
        <div className="px-4 py-4 space-y-2 border-t md:px-6 bg-gradient-to-b from-teal-800 to-teal-900 border-amber-300 border-opacity-20">
          {mobileMenuItems.map((item) => (
            <Link
              to={item.to}
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${
                item.hasCount ? 'flex items-center justify-between' : ''
              }`}
            >
              <span>{item.label}</span>
              {item.hasCount && bookmarkCount > 0 && (
                <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center shadow-lg">
                  {bookmarkCount}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 lg:hidden"
          style={{ zIndex: 45 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;