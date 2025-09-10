import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Mail, Phone } from "lucide-react";

const LandingPage = ({ onContinue }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const validateForm = () => {
    let isValid = true;

    setNameError("");
    setEmailError("");
    setContactError("");

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!name.trim() || !nameRegex.test(name)) {
      setNameError("Name must be at least 3 alphabetic characters.");
      isValid = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    const contactRegex = /^\d{11}$/;
    if (!contact.trim() || !contactRegex.test(contact)) {
      setContactError("Contact number must be exactly 11 digits.");
      isValid = false;
    }

    if (!userType) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("username", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userContact", contact);
      localStorage.setItem("userType", userType);
      onContinue();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 to-purple-800 text-white font-sans overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl absolute top-1/4 left-1/4 animate-blob-one"></div>
        <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl absolute bottom-1/4 right-1/4 animate-blob-two"></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl bg-white bg-opacity-10 p-8 md:p-12 rounded-3xl shadow-2xl border border-white border-opacity-20 backdrop-blur-md flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          {/* Replace <Link> with a <div> or <span> */}
          <div className="flex items-center gap-2 text-3xl font-bold mb-4 drop-shadow-lg">
            <svg
              className="w-10 h-10 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
            </svg>
            NextStep Navigator
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
            Your Future, Mapped Out.
          </h1>
          <p className="text-md md:text-lg text-gray-200 drop-shadow-lg max-w-md mx-auto mt-2">
            Enter your details to chart your course to a successful career.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="w-full space-y-6 mt-8">
          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-200 text-left">Your Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all pl-10"
                placeholder="Enter your name"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
            </div>
            {nameError && <p className="mt-2 text-sm text-red-400 text-left">{nameError}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-200 text-left">Your Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all pl-10"
                placeholder="Enter your email"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
            </div>
            {emailError && <p className="mt-2 text-sm text-red-400 text-left">{emailError}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-200 text-left">Contact Number</label>
            <div className="relative">
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all pl-10"
                placeholder="Enter your contact"
              />
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
            </div>
            {contactError && <p className="mt-2 text-sm text-red-400 text-left">{contactError}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-200 text-left">Your Category</label>
            <div className="relative">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-xl text-white appearance-none focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all cursor-pointer pl-10"
              >
                <option value="" className="bg-gray-800 text-gray-200">-- Choose --</option>
                <option value="student" className="bg-gray-800 text-gray-200">Student (Grades 8–12)</option>
                <option value="graduate" className="bg-gray-800 text-gray-200">Graduate (UG/PG)</option>
                <option value="professional" className="bg-gray-800 text-gray-200">Working Professional</option>
              </select>
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-opacity-80" size={20} />
            </div>
            {!userType && <p className="mt-2 text-sm text-red-400 text-left">Please select a category.</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all mt-8"
          >
            Continue <span className="ml-2">→</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LandingPage;