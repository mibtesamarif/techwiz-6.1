import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { MailIcon } from "../components/icons";
import { UserIcon } from "../components/icons";
import { MessageIcon } from "../components/icons";
import { CheckCircleIcon } from "../components/icons";  


const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Validate Name field
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (name.length < 3) {
      setNameError('Name must be at least 3 characters long.');
      valid = false;
    } else if (!nameRegex.test(name)) {
      setNameError('Name can only contain alphabets and spaces.');
      valid = false;
    } else {
      setNameError('');
    }

    // Validate Message field
    if (message.length > 250) {
      setMessageError('Message cannot exceed 250 characters.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (valid) {
      // Simulate API call or form processing
      console.log('Form submitted:', { name, email, message });
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-lg mx-auto w-full">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${nameError ? 'border-red-500' : 'border-white/20'}`}
                      placeholder="e.g., Jane Doe"
                    />
                  </div>
                  {nameError && <p className="mt-2 text-sm text-red-500">{nameError}</p>}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none ${messageError ? 'border-red-500' : 'border-white/20'}`}
                      placeholder="Write your feedback here..."
                    ></textarea>
                  </div>
                  {messageError && <p className="mt-2 text-sm text-red-500">{messageError}</p>}
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
