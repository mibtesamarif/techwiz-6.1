import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", to: "/about" },
    { name: "Career Bank", to: "/career-bank" },
    { name: "Quiz", to: "/quiz" },
    { name: "Resources", to: "/resources" },
    { name: "Admission & Coaching", to: "/admission&coaching" }
  ];

  const supportLinks = [
    { name: "Contact Us", to: "/contact" },
    { name: "Feedback", to: "/feedback" },
    { name: "Privacy", to: "/privacy" },
    { name: "Terms", to: "/terms" },
    { name: "Cookies", to: "/cookies" }
  ];

  return (
    <footer className="py-12 mt-16 border-t bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-amber-50 border-amber-300 border-opacity-20">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-4 lg:grid-cols-4 lg:gap-12">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold group">
            <div className="p-2 transition-all duration-300 shadow-lg bg-amber-400 rounded-xl group-hover:shadow-amber-400/50">
              <svg
                className="w-6 h-6 text-teal-900"
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
          <p className="max-w-xs text-sm leading-relaxed text-amber-200">
            Your guide to a successful career journey. Empowering students, graduates, and professionals to achieve their dreams.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#linkedin" aria-label="LinkedIn" className="p-2 transition-all duration-300 transform rounded-lg bg-amber-50 bg-opacity-10 hover:bg-amber-400 hover:text-teal-900 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="p-2 transition-all duration-300 transform rounded-lg bg-amber-50 bg-opacity-10 hover:bg-amber-400 hover:text-teal-900 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.179-1.55-3.597-1.55-3.321 0-6.008 2.689-6.008 6.008 0 .471.053.929.155 1.364-4.997-.251-9.452-2.646-12.428-6.284-.51.875-.806 1.884-.806 2.983 0 2.083 1.062 3.922 2.677 4.996-.987-.03-1.921-.303-2.738-.752v.077c0 2.924 2.083 5.365 4.846 5.922-.505.137-1.041.21-1.597.21-.39 0-.768-.037-1.134-.108.773 2.409 3.004 4.162 5.666 4.212-2.062 1.62-4.661 2.592-7.49 2.592-1.398 0-2.766-.08-4.093-.238 2.671 1.71 5.836 2.709 9.204 2.709 11.042 0 17.072-9.13 17.072-17.072 0-.259-.006-.516-.016-.774 1.17-.849 2.175-1.916 2.973-3.128z"/>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram" className="p-2 transition-all duration-300 transform rounded-lg bg-amber-50 bg-opacity-10 hover:bg-amber-400 hover:text-teal-900 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="relative mb-4 text-lg font-bold text-amber-200">
            Quick Links
            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className="flex items-center gap-2 text-sm transition-all duration-300 transform text-amber-100 hover:text-amber-300 hover:translate-x-1 group"
                >
                  <div className="w-1 h-1 transition-opacity duration-300 rounded-full opacity-0 bg-amber-400 group-hover:opacity-100"></div>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="relative mb-4 text-lg font-bold text-amber-200">
            Support
            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to} 
                  className="flex items-center gap-2 text-sm transition-all duration-300 transform text-amber-100 hover:text-amber-300 hover:translate-x-1 group"
                >
                  <div className="w-1 h-1 transition-opacity duration-300 rounded-full opacity-0 bg-amber-400 group-hover:opacity-100"></div>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="relative mb-4 text-lg font-bold text-amber-200">
            Stay Connected
            <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-amber-100">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                123 Career Blvd, Future City
              </p>
              <p className="flex items-center gap-2 text-sm text-amber-100">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@nextstep.com
              </p>
            </div>
            
            {/* <div className="mt-4">
              <p className="mb-2 text-xs text-amber-200">Subscribe for career tips & updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border rounded-l-lg bg-amber-50 bg-opacity-10 text-amber-100 placeholder-amber-300 border-amber-300 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:bg-opacity-20"
                />
                <button className="px-4 py-2 text-sm font-semibold text-teal-900 transition-all duration-300 transform rounded-r-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 hover:scale-105">
                  Join
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      <div className="pt-6 mt-8 border-t border-amber-300 border-opacity-20">
        <div className="container flex flex-col items-center justify-between px-6 mx-auto space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-amber-200">
              © {currentYear} NextStep Navigator. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-amber-300">
              Empowering careers, one step at a time.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-amber-300">
            <a href="#privacy" className="transition-colors duration-300 hover:text-amber-200">Privacy</a>
            <span>•</span>
            <a href="#terms" className="transition-colors duration-300 hover:text-amber-200">Terms</a>
            <span>•</span>
            <a href="#cookies" className="transition-colors duration-300 hover:text-amber-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;