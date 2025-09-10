import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start">
          <Link to="/" className="text-xl font-bold text-white mb-2">
            NextStep Navigator
          </Link>
          <p className="text-sm text-gray-400 mb-2">
            Your guide to a successful career journey.
          </p>
          <div className="flex space-x-4 mt-4 text-white">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.179-1.55-3.597-1.55-3.321 0-6.008 2.689-6.008 6.008 0 .471.053.929.155 1.364-4.997-.251-9.452-2.646-12.428-6.284-.51.875-.806 1.884-.806 2.983 0 2.083 1.062 3.922 2.677 4.996-.987-.03-1.921-.303-2.738-.752v.077c0 2.924 2.083 5.365 4.846 5.922-.505.137-1.041.21-1.597.21-.39 0-.768-.037-1.134-.108.773 2.409 3.004 4.162 5.666 4.212-2.062 1.62-4.661 2.592-7.49 2.592-1.398 0-2.766-.08-4.093-.238 2.671 1.71 5.836 2.709 9.204 2.709 11.042 0 17.072-9.13 17.072-17.072 0-.259-.006-.516-.016-.774 1.17-.849 2.175-1.916 2.973-3.128z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/career-bank" className="hover:text-white transition-colors">Career Bank</Link></li>
            <li><Link to="/quiz" className="hover:text-white transition-colors">Quiz</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            <li><Link to="/admission&coaching" className="hover:text-white transition-colors">Admission & Coaching</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get in touch</h4>
          <p className="text-sm">123 Career Blvd, Future City</p>
          <p className="text-sm">info@nextstep.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NextStep Navigator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
