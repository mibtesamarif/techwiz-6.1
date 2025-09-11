// import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getBookmarks } from "../utils/storage";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [bookmarkCount, setBookmarkCount] = useState(0);

//   // Get the navigation function from react-router-dom
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateBookmarks = () => {
//       setBookmarkCount(getBookmarks().length);
//     };
//     updateBookmarks();

//     // Listen for storage changes to update the count
//     window.addEventListener("storage", updateBookmarks);
//     return () => window.removeEventListener("storage", updateBookmarks);
//   }, []);

//   useEffect(() => {
//     // Retrieve username from localStorage to be consistent
//     const storedName = localStorage.getItem("username");
//     if (storedName) {
//       setUsername(storedName);
//     }
//   }, []);

//   // Handle logout and redirection
//   const handleBack = () => {
//     // Clear all user data from localStorage
//     localStorage.removeItem("username");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userContact");
//     localStorage.removeItem("userType");
//     localStorage.removeItem("bookmarks");
    
    
//     // Navigate back to the landing page
//     navigate("/");

//     // Reload the page to reset the app state and show the landing page
//     window.location.reload(); 
//   };

//   const linkClasses = "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
//   const activeClasses = "text-white bg-blue-700";
//   const inactiveClasses = "text-gray-200 hover:bg-blue-600 hover:text-white";

//   return (
//     <nav className="sticky top-0 z-50 text-white transition-shadow bg-blue-600 shadow-lg">
//       <div className="container flex items-center justify-between px-4 py-3 mx-auto md:py-4">
//         {/* Brand */}
//         <Link to="/" className="flex items-center gap-2 text-xl font-bold">
//           <svg
//             className="w-8 h-8 text-yellow-400"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
//           </svg>
//           NextStep Navigator
//         </Link>

//         {/* Desktop menu */}
//         <div className="items-center hidden space-x-2 lg:flex xl:space-x-4">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/career-bank"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Career Bank
//           </NavLink>
//           <NavLink
//             to="/quiz"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Quiz
//           </NavLink>
//           <NavLink
//             to="/multimedia"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Multimedia
//           </NavLink>
//           <NavLink
//             to="/success-stories"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Success Stories
//           </NavLink>
//           <NavLink
//             to="/resources"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
//           >
//             Resources
//           </NavLink>
//           <NavLink
//             to="/bookmarks"
//             className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center gap-1`}
//           >
//             Bookmarks
//             {bookmarkCount > 0 && (
//               <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
//                 {bookmarkCount}
//               </span>
//             )}
//           </NavLink>
//         </div>

//         {/* Right side - User info + Back button */}
//         <div className="items-center hidden space-x-4 md:flex">
//           {username && (
//             <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-700 rounded-full">
//               Welcome, {username} 👋
//             </span>
//           )}
//           {/* Back button */}
//           <button
//             onClick={handleBack}
//             className="px-4 py-2 text-sm font-semibold text-black transition transform bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105"
//           >
//             Back
//           </button>
//         </div>

//         {/* Mobile toggle button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 text-white rounded-md md:hidden focus:outline-none hover:bg-blue-700"
//           aria-expanded={isOpen}
//           aria-controls="mobile-menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="px-4 py-3 space-y-2 transition-all duration-300 ease-in-out bg-blue-700 md:hidden" id="mobile-menu">
//           <NavLink to="/" end className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Home
//           </NavLink>
//           <NavLink to="/career-bank" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Career Bank
//           </NavLink>
//           <NavLink to="/quiz" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Quiz
//           </NavLink>
//           <NavLink to="/multimedia" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Multimedia
//           </NavLink>
//           <NavLink to="/success-stories" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Success Stories
//           </NavLink>
//           <NavLink to="/resources" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Resources
//           </NavLink>
//           <NavLink to="/admission" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Admission
//           </NavLink>
//           <NavLink to="/coaching" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Coaching
//           </NavLink>
//           <NavLink to="/bookmarks" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center gap-1`} onClick={() => setIsOpen(false)}>
//             Bookmarks
//             {bookmarkCount > 0 && (
//               <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
//                 {bookmarkCount}
//               </span>
//             )}
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             About Us
//           </NavLink>
//           <NavLink to="/feedback" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Feedback
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setIsOpen(false)}>
//             Contact Us
//           </NavLink>
//           <div className="flex flex-col pt-4 space-y-2">
//             {username && (
//               <p className="text-sm font-semibold text-white">Welcome, {username} 👋</p>
//             )}
//             {/* Back button */}
//             <button 
//               onClick={handleBack}
//               className="px-4 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-lg shadow-md"
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// //new navbar
// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [bookmarkCount, setBookmarkCount] = useState(0);
//   const [activeLink, setActiveLink] = useState("home");

//   useEffect(() => {
//     const updateBookmarks = () => {
//       setBookmarkCount(3);
//     };
//     updateBookmarks();
//   }, []);

//   useEffect(() => {
//     setUsername("Alex");
//   }, []);

//   const handleBack = () => {
//     console.log("Navigating back to landing page");
//   };

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     setIsOpen(false);
//   };

//   const linkClasses = "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer";
//   const activeClasses = "text-teal-900 bg-amber-200 shadow-md transform scale-105";
//   const inactiveClasses = "text-amber-100 hover:bg-amber-50 hover:bg-opacity-10 hover:text-amber-50 hover:scale-105 transform";

//   const menuItems = [
//     { id: "home", label: "Home" },
//     { id: "career-bank", label: "Career Bank" },
//     { id: "quiz", label: "Quiz" },
//     { id: "multimedia", label: "Multimedia" },
//     { id: "success-stories", label: "Success Stories" },
//     { id: "resources", label: "Resources" },
//     { id: "bookmarks", label: "Bookmarks", hasCount: true }
//   ];

//   const mobileOnlyItems = [
//     { id: "admission", label: "Admission" },
//     { id: "coaching", label: "Coaching" },
//     { id: "about", label: "About Us" },
//     { id: "feedback", label: "Feedback" },
//     { id: "contact", label: "Contact Us" }
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b shadow-xl bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-amber-50 backdrop-blur-sm border-amber-300 border-opacity-20">
//       <div className="container flex items-center justify-between px-6 py-4 mx-auto">
//         {/* Brand */}
//         <div className="flex items-center gap-3 text-xl font-bold transition-all duration-300 cursor-pointer group hover:scale-105">
//           <div className="p-2 transition-all duration-300 shadow-lg bg-amber-400 rounded-xl group-hover:shadow-amber-400/50">
//             <svg
//               className="w-6 h-6 text-teal-900"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
//             </svg>
//           </div>
//           <span className="text-transparent bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text">
//             NextStep Navigator
//           </span>
//         </div>

//         {/* Desktop menu */}
//         <div className="items-center hidden space-x-2 lg:flex">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleLinkClick(item.id)}
//               className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${item.hasCount ? 'flex items-center gap-2' : ''}`}
//             >
//               <span>{item.label}</span>
//               {item.hasCount && bookmarkCount > 0 && (
//                 <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center shadow-lg animate-pulse">
//                   {bookmarkCount}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right side - User info + Back button */}
//         <div className="items-center hidden space-x-4 md:flex">
//           {username && (
//             <div className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-teal-800 border text-amber-100 rounded-xl bg-opacity-60 backdrop-blur-sm border-amber-300 border-opacity-30">
//               <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
//               Welcome, {username} 👋
//             </div>
//           )}
//           <button
//             onClick={handleBack}
//             className="px-6 py-2 font-bold text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:scale-105 hover:shadow-amber-400/50"
//           >
//             Back
//           </button>
//         </div>

//         {/* Mobile toggle button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-3 transition-all duration-300 md:hidden text-amber-100 focus:outline-none rounded-xl hover:bg-teal-800 hover:bg-opacity-60"
//           aria-expanded={isOpen}
//           aria-controls="mobile-menu"
//         >
//           <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
//         <div className="px-6 py-4 space-y-3 border-t bg-gradient-to-b from-teal-800 to-teal-900 border-amber-300 border-opacity-20">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleLinkClick(item.id)}
//               className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${item.hasCount ? 'flex items-center gap-2' : ''}`}
//             >
//               <span>{item.label}</span>
//               {item.hasCount && bookmarkCount > 0 && (
//                 <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center shadow-lg">
//                   {bookmarkCount}
//                 </span>
//               )}
//             </div>
//           ))}
          
//           {mobileOnlyItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleLinkClick(item.id)}
//               className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses}`}
//             >
//               {item.label}
//             </div>
//           ))}
          
//           {/* Mobile user info and back button */}
//           <div className="flex flex-col pt-4 space-y-3 border-t border-amber-300 border-opacity-20">
//             {username && (
//               <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold bg-teal-800 border text-amber-100 rounded-xl bg-opacity-60 backdrop-blur-sm border-amber-300 border-opacity-30">
//                 <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
//                 Welcome, {username} 👋
//               </div>
//             )}
//             <button 
//               onClick={handleBack}
//               className="px-6 py-3 font-bold text-center text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:scale-105"
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [bookmarkCount, setBookmarkCount] = useState(0);
//   const [activeLink, setActiveLink] = useState("home");

//   // Simulate bookmark functionality
//   useEffect(() => {
//     const updateBookmarks = () => {
//       // In real app, this would get from storage/localStorage
//       setBookmarkCount(3);
//     };
//     updateBookmarks();

//     // Simulate storage event listener
//     const handleStorageChange = () => updateBookmarks();
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   // Simulate user data
//   const storedName = localStorage.getItem("username");
//   useEffect(() => {
//     // In real app: localStorage.getItem("username")
//     setUsername(storedName);
//   }, []);

//   // Handle logout and navigation
//     const navigate = useNavigate(); 
//   const handleBack = () => {
//     // In real app: Clear localStorage and navigate
//     console.log("Clearing user data and navigating to landing page");
//     setUsername("");
//     setBookmarkCount(0);
//     setActiveLink("home");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userContact");
//     localStorage.removeItem("userType");
//     localStorage.removeItem("bookmarks");
//     navigate("/");
//     window.location.reload(); 
//   };

//   const handleLinkClick = (linkId) => {
//     setActiveLink(linkId);
//     setIsOpen(false); // Close mobile menu
//     console.log(`Navigating to: ${linkId}`);
//     // In real app: navigate(`/${linkId === 'home' ? '' : linkId}`);
//   };

//   const linkClasses = "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer select-none";
//   const activeClasses = "text-teal-900 bg-amber-200 shadow-md transform scale-105";
//   const inactiveClasses = "text-amber-100 hover:bg-amber-50 hover:bg-opacity-10 hover:text-amber-50 hover:scale-105 transform";

//   const desktopMenuItems = [
//     { id: "home", label: "Home", to: "/" },
//     { id: "career-bank", label: "Career Bank", to: "/career-bank" },
//     { id: "quiz", label: "Quiz", to: "/quiz" },
//     { id: "multimedia", label: "Multimedia", to: "/multimedia" },
//     { id: "success-stories", label: "Success Stories", to: "/success-stories" },
//     { id: "resources", label: "Resources", to: "/resources" },
//     { id: "bookmarks", label: "Bookmarks", hasCount: true, to: "/bookmarks" }
//   ];

//   const mobileMenuItems = [
//     ...desktopMenuItems,
//     { id: "admission&coaching", label: "Admission & Coaching", to: "/admission&coaching" },
//     { id: "about", label: "About Us", to: "/about" },
//     { id: "feedback", label: "Feedback", to: "/feedback" },
//     { id: "contact", label: "Contact Us", to: "/contact" }
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b shadow-xl bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-amber-50 backdrop-blur-sm border-amber-300 border-opacity-20">
//       <div className="container flex items-center justify-between px-4 py-3 mx-auto md:px-6 md:py-4">
//         {/* Brand */}
//         <div 
//           onClick={() => handleLinkClick('home')}
//           className="flex items-center gap-2 text-lg font-bold transition-all duration-300 cursor-pointer group hover:scale-105 md:gap-3 md:text-xl"
//         >
//           <div className="p-1.5 md:p-2 transition-all duration-300 shadow-lg bg-amber-400 rounded-xl group-hover:shadow-amber-400/50">
//             <svg
//               className="w-5 h-5 text-teal-900 md:w-6 md:h-6"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
//             </svg>
//           </div>
//           <span className="hidden text-transparent sm:block bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text">
//             NextStep Navigator
//           </span>
//           <span className="text-transparent sm:hidden bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text">
//             NextStep
//           </span>
//         </div>

//         {/* Desktop menu - Hidden on mobile and tablet */}
//         <div className="items-center hidden space-x-1 lg:flex xl:space-x-2">
//           {desktopMenuItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleLinkClick(item.id)}
//               className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${item.hasCount ? 'flex items-center gap-2' : ''}`}
//             >
//               <Link to={item.to}>{item.label}</Link>
//               {item.hasCount && bookmarkCount > 0 && (
//                 <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[18px] text-center shadow-lg animate-pulse">
//                   {bookmarkCount}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right side - User info + Back button (Hidden on mobile) */}
//         <div className="items-center hidden space-x-3 md:flex md:space-x-4">
//           {username && (
//             <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold bg-teal-800 border text-amber-100 rounded-xl bg-opacity-60 backdrop-blur-sm border-amber-300 border-opacity-30">
//               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></div>
//               <span className="hidden sm:inline">Welcome, </span>{username} 👋
//             </div>
//           )}
//           <button
//             onClick={handleBack}
//             className="px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-bold text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:scale-105 hover:shadow-amber-400/50"
//           >
//             Back
//           </button>
//         </div>

//         {/* Mobile toggle button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 transition-all duration-300 lg:hidden text-amber-100 focus:outline-none rounded-xl hover:bg-teal-800 hover:bg-opacity-60"
//           aria-expanded={isOpen}
//           aria-controls="mobile-menu"
//           aria-label="Toggle navigation menu"
//         >
//           <svg 
//             className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24" 
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth="2" 
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu with smooth animation */}
//       <div 
//         className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
//         }`} 
//         id="mobile-menu"
//       >
//         <div className="px-4 py-4 space-y-2 border-t md:px-6 bg-gradient-to-b from-teal-800 to-teal-900 border-amber-300 border-opacity-20">
//           {/* Menu Items */}
//           {mobileMenuItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleLinkClick(item.id)}
//               className={`${linkClasses} ${activeLink === item.id ? activeClasses : inactiveClasses} ${
//                 item.hasCount ? 'flex items-center justify-between' : ''
//               }`}
//             >
//               <Link to={item.to}>{item.label}</Link>
//               {item.hasCount && bookmarkCount > 0 && (
//                 <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center shadow-lg">
//                   {bookmarkCount}
//                 </span>
//               )}
//             </div>
//           ))}
          
//           {/* Mobile user info and back button */}
//           <div className="flex flex-col pt-4 space-y-3 border-t border-amber-300 border-opacity-20">
//             {username && (
//               <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold bg-teal-800 border text-amber-100 rounded-xl bg-opacity-60 backdrop-blur-sm border-amber-300 border-opacity-30">
//                 <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
//                 Welcome, {username} 👋
//               </div>
//             )}
//             <Link 
            
//               onClick={handleBack}
//               className="px-6 py-3 font-bold text-center text-teal-900 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:scale-105"
//             >
//               Back
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile menu */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-30 lg:hidden"
//           style={{ zIndex: 45 }}
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  // Simulate bookmark functionality
  useEffect(() => {
    const updateBookmarks = () => {
      // In real app, this would get from storage/state management
       setBookmarkCount(getBookmarks().length);
    };
    updateBookmarks();

    // Simulate storage event listener
    const handleStorageChange = () => updateBookmarks();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Simulate user data
  const storedName = localStorage.getItem("username");
  useEffect(() => {
    // In real app: get from localStorage or state management
    setUsername(storedName);
  }, []);

  // Handle logout and navigation
  const navigate = useNavigate();
  const handleBack = () => {
    // In real app: Clear localStorage and navigate
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
    // Clear storage and navigate
    window.location.reload(); 
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsOpen(false); // Close mobile menu
    console.log(`Navigating to: ${linkId}`);
    // In real app: navigate(`/${linkId === 'home' ? '' : linkId}`);
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
      {/* Main Header Row */}
      <div className="container flex items-center justify-between px-4 py-3 mx-auto md:px-6 md:py-4">
        {/* Brand - Left Side */}
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

        {/* Right Side - User info + Back button */}
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

          {/* Mobile toggle button */}
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

      {/* Desktop Navigation Links - Secondary Row (Hidden on mobile) */}
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

      {/* Mobile menu with smooth animation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
        }`} 
        id="mobile-menu"
      >
        <div className="px-4 py-4 space-y-2 border-t md:px-6 bg-gradient-to-b from-teal-800 to-teal-900 border-amber-300 border-opacity-20">
          {/* Menu Items */}
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

      {/* Overlay for mobile menu */}
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