// // src/pages/Feedback.jsx
// import { useState } from "react";
// import Breadcrumbs from "../components/Breadcrumbs";

// const Feedback = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="max-w-lg mx-auto">
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Feedback</h1>

//       {!submitted ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-lg p-6 space-y-4"
//         >
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               required
//               className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Your name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               required
//               className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Message</label>
//             <textarea
//               rows="4"
//               required
//               className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Write your feedback here..."
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       ) : (
//         <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
//           <p>Your feedback has been received.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Feedback;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons (Inline SVG) ---
const MailIcon = () => (
  <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.891A9 9 0 0112 13a9.002 9.002 0 015.207 1.549z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// --- Simple Breadcrumbs Component ---
// This is a static version since we are not using react-router-dom
const Breadcrumbs = () => (
  <nav className="text-sm my-4">
    <ol className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10">
      <li className="text-gray-300 hover:text-white transition-colors duration-200">
        <a href="/">Home</a>
      </li>
      <li className="flex items-center space-x-2">
        <span className="h-4 w-4 text-gray-400">/</span>
        <span className="capitalize text-white font-semibold">feedback</span>
      </li>
    </ol>
  </nav>
);

// --- Main App Component ---
const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or form processing
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-lg mx-auto w-full">
        {/* We can't use dynamic breadcrumbs without react-router-dom */}
        <div className="flex justify-center mb-8">
            <Breadcrumbs />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10"
        >
          <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
            Your Feedback Matters
          </h1>
          <p className="text-gray-300 mb-8 text-center max-w-sm mx-auto">
            We'd love to hear your thoughts. Help us improve by sharing your feedback.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-200">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                      placeholder="e.g., Jane Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-200">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-purple-200">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4">
                      <MessageIcon />
                    </div>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none"
                      placeholder="Write your feedback here..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.01] transition-all duration-300"
                >
                  Submit Feedback
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-center py-10"
              >
                <CheckCircleIcon />
                <h2 className="text-3xl font-bold text-green-400 mb-2">Thank You!</h2>
                <p className="text-lg text-gray-300">
                  Your feedback has been successfully submitted. We appreciate you!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;

