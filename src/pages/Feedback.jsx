import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { CheckCircleIcon, MailIcon, MessageIcon, UserIcon } from "../components/icons";

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

    if (message.length > 250) {
      setMessageError('Message cannot exceed 250 characters.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (valid) {
      console.log('Form submitted:', { name, email, message });
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 sm:p-8">
      <div className="w-full max-w-lg mx-auto">
        <div className="flex justify-center mb-8 text-amber-50">
          <Breadcrumbs />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 shadow-2xl backdrop-blur-lg rounded-3xl md:p-10 ring-1 ring-amber-200/20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.95) 0%, rgba(255, 248, 225, 0.85) 100%)'
          }}
        >
          <h1 className="mb-4 text-4xl font-extrabold text-center text-teal-800">
            Your Feedback Matters
          </h1>
          <p className="max-w-sm mx-auto mb-8 text-center text-teal-700/80">
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
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-teal-800">
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
                      className={`w-full pl-12 pr-4 py-3 bg-teal-50/70 border rounded-xl text-teal-900 placeholder-teal-500 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition-all ${nameError ? 'border-pink-400 focus:ring-pink-400 focus:border-pink-400' : 'border-teal-200 hover:border-teal-300'}`}
                      placeholder="e.g., Jane Doe"
                    />
                  </div>
                  {nameError && <p className="mt-2 text-sm text-pink-600">{nameError}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-teal-800">
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
                      className="w-full py-3 pl-12 pr-4 text-teal-900 placeholder-teal-500 transition-all border border-teal-200 bg-teal-50/70 hover:border-teal-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-teal-800">
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
                      className={`w-full pl-12 pr-4 py-3 bg-teal-50/70 border rounded-xl text-teal-900 placeholder-teal-500 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition-all resize-none ${messageError ? 'border-pink-400 focus:ring-pink-400 focus:border-pink-400' : 'border-teal-200 hover:border-teal-300'}`}
                      placeholder="Write your feedback here..."
                    ></textarea>
                  </div>
                  {messageError && <p className="mt-2 text-sm text-pink-600">{messageError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-700 to-teal-600 text-cream-100 py-4 rounded-xl font-bold shadow-lg hover:from-teal-800 hover:to-teal-700 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-amber-400 focus:outline-none text-amber-50"
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
                className="py-10 text-center"
              >
                <CheckCircleIcon />
                <h2 className="mb-2 text-3xl font-bold text-teal-800">Thank You!</h2>
                <p className="text-lg text-teal-700/80">
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