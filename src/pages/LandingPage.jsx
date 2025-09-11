// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Briefcase, Mail, Phone } from "lucide-react";

// const LandingPage = ({ onContinue }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [userType, setUserType] = useState("");

//   const [nameError, setNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [contactError, setContactError] = useState("");

//   const validateForm = () => {
//     let isValid = true;

//     setNameError("");
//     setEmailError("");
//     setContactError("");

//     const nameRegex = /^[A-Za-z\s]{3,}$/;
//     if (!name.trim() || !nameRegex.test(name)) {
//       setNameError("Name must be at least 3 alphabetic characters.");
//       isValid = false;
//     }

//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!email.trim() || !emailRegex.test(email)) {
//       setEmailError("Please enter a valid email address.");
//       isValid = false;
//     }

//     const contactRegex = /^\d{11}$/;
//     if (!contact.trim() || !contactRegex.test(contact)) {
//       setContactError("Contact number must be exactly 11 digits.");
//       isValid = false;
//     }

//     if (!userType) {
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       localStorage.setItem("username", name);
//       localStorage.setItem("userEmail", email);
//       localStorage.setItem("userContact", contact);
//       localStorage.setItem("userType", userType);
//       onContinue();
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden font-sans text-white bg-gradient-to-br from-indigo-900 to-purple-800">
//       <div className="absolute inset-0 z-0 opacity-30">
//         <div className="absolute bg-purple-500 rounded-full w-96 h-96 blur-3xl top-1/4 left-1/4 animate-blob-one"></div>
//         <div className="absolute bg-indigo-500 rounded-full w-96 h-96 blur-3xl bottom-1/4 right-1/4 animate-blob-two"></div>
//       </div>

//       <motion.div
//         className="relative z-10 flex flex-col items-center w-full max-w-2xl p-8 text-center bg-white border border-white shadow-2xl bg-opacity-10 md:p-12 rounded-3xl border-opacity-20 backdrop-blur-md"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center justify-center mb-6"
//         >
//           {/* Replace <Link> with a <div> or <span> */}
//           <div className="flex items-center gap-2 mb-4 text-3xl font-bold drop-shadow-lg">
//             <svg
//               className="w-10 h-10 text-yellow-400"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
//             </svg>
//             NextStep Navigator
//           </div>
//           <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl drop-shadow-lg">
//             Your Future, Mapped Out.
//           </h1>
//           <p className="max-w-md mx-auto mt-2 text-gray-200 text-md md:text-lg drop-shadow-lg">
//             Enter your details to chart your course to a successful career.
//           </p>
//         </motion.div>

//         <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
//           <div className="relative">
//             <label className="block mb-2 text-sm font-medium text-left text-gray-200">Your Name</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 pl-10 text-white placeholder-gray-300 transition-all bg-white border border-white bg-opacity-20 border-opacity-20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
//                 placeholder="Enter your name"
//               />
//               <User className="absolute text-white -translate-y-1/2 left-3 top-1/2 text-opacity-80" size={20} />
//             </div>
//             {nameError && <p className="mt-2 text-sm text-left text-red-400">{nameError}</p>}
//           </div>

//           <div className="relative">
//             <label className="block mb-2 text-sm font-medium text-left text-gray-200">Your Email</label>
//             <div className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 pl-10 text-white placeholder-gray-300 transition-all bg-white border border-white bg-opacity-20 border-opacity-20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
//                 placeholder="Enter your email"
//               />
//               <Mail className="absolute text-white -translate-y-1/2 left-3 top-1/2 text-opacity-80" size={20} />
//             </div>
//             {emailError && <p className="mt-2 text-sm text-left text-red-400">{emailError}</p>}
//           </div>

//           <div className="relative">
//             <label className="block mb-2 text-sm font-medium text-left text-gray-200">Contact Number</label>
//             <div className="relative">
//               <input
//                 type="tel"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 className="w-full px-4 py-3 pl-10 text-white placeholder-gray-300 transition-all bg-white border border-white bg-opacity-20 border-opacity-20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
//                 placeholder="Enter your contact"
//               />
//               <Phone className="absolute text-white -translate-y-1/2 left-3 top-1/2 text-opacity-80" size={20} />
//             </div>
//             {contactError && <p className="mt-2 text-sm text-left text-red-400">{contactError}</p>}
//           </div>

//           <div className="relative">
//             <label className="block mb-2 text-sm font-medium text-left text-gray-200">Your Category</label>
//             <div className="relative">
//               <select
//                 value={userType}
//                 onChange={(e) => setUserType(e.target.value)}
//                 className="w-full px-4 py-3 pl-10 text-white transition-all bg-white border border-white appearance-none cursor-pointer bg-opacity-20 border-opacity-20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
//               >
//                 <option value="" className="text-gray-200 bg-gray-800">-- Choose --</option>
//                 <option value="student" className="text-gray-200 bg-gray-800">Student (Grades 8–12)</option>
//                 <option value="graduate" className="text-gray-200 bg-gray-800">Graduate (UG/PG)</option>
//                 <option value="professional" className="text-gray-200 bg-gray-800">Working Professional</option>
//               </select>
//               <Briefcase className="absolute text-white -translate-y-1/2 left-3 top-1/2 text-opacity-80" size={20} />
//             </div>
//             {!userType && <p className="mt-2 text-sm text-left text-red-400">Please select a category.</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-4 mt-8 text-lg font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 hover:scale-105"
//           >
//             Continue <span className="ml-2">→</span>
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState } from "react";
import { User, Briefcase, Mail, Phone } from "lucide-react";

const LandingPage = ({ onContinue = () => console.log('Continue clicked') }) => {
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
      // Note: localStorage is not supported in Claude artifacts
      // In a real environment, you would use:
      localStorage.setItem("username", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userContact", contact);
      localStorage.setItem("userType", userType);
      onContinue();
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900">
      {/* Floating background elements with custom animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bg-yellow-400 rounded-full w-96 h-96 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute bg-pink-300 rounded-full w-80 h-80 blur-3xl bottom-1/3 right-1/4 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-yellow-300 rounded-full blur-2xl top-1/2 right-1/3 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl p-8 text-center border border-yellow-400 shadow-2xl bg-amber-50 bg-opacity-95 md:p-12 rounded-3xl border-opacity-30 backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center gap-3 mb-4 text-3xl font-bold text-teal-900">
            <div className="p-2 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl">
              <svg
                className="w-8 h-8 text-teal-900"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.01L6 12l2.5-2.5L11 12.01V17zm4-1.99L18 12l-2.5-2.5L13 12.01V15zm-4-4.51V6h2v6.51L12 12l-1 1z" />
              </svg>
            </div>
            NextStep Navigator
          </div>
          <h1 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-teal-900 md:text-5xl">
            Your Future, Mapped Out.
          </h1>
          <p className="max-w-md mx-auto leading-relaxed text-teal-700 text-md md:text-lg">
            Enter your details to chart your course to a successful career.
          </p>
        </div>

        <div className="w-full mt-8 space-y-6">
          <div className="relative">
            <label className="block mb-3 text-sm font-semibold text-left text-teal-800">Your Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 pl-12 font-medium text-teal-900 placeholder-teal-500 transition-all duration-300 bg-white border-2 border-teal-200 shadow-sm bg-opacity-70 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none hover:bg-opacity-80"
                placeholder="Enter your name"
              />
              <User className="absolute text-teal-600 -translate-y-1/2 left-4 top-1/2" size={20} />
            </div>
            {nameError && <p className="mt-2 text-sm font-medium text-left text-pink-600">{nameError}</p>}
          </div>

          <div className="relative">
            <label className="block mb-3 text-sm font-semibold text-left text-teal-800">Your Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 pl-12 font-medium text-teal-900 placeholder-teal-500 transition-all duration-300 bg-white border-2 border-teal-200 shadow-sm bg-opacity-70 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none hover:bg-opacity-80"
                placeholder="Enter your email"
              />
              <Mail className="absolute text-teal-600 -translate-y-1/2 left-4 top-1/2" size={20} />
            </div>
            {emailError && <p className="mt-2 text-sm font-medium text-left text-pink-600">{emailError}</p>}
          </div>

          <div className="relative">
            <label className="block mb-3 text-sm font-semibold text-left text-teal-800">Contact Number</label>
            <div className="relative">
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-4 pl-12 font-medium text-teal-900 placeholder-teal-500 transition-all duration-300 bg-white border-2 border-teal-200 shadow-sm bg-opacity-70 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none hover:bg-opacity-80"
                placeholder="Enter your contact"
              />
              <Phone className="absolute text-teal-600 -translate-y-1/2 left-4 top-1/2" size={20} />
            </div>
            {contactError && <p className="mt-2 text-sm font-medium text-left text-pink-600">{contactError}</p>}
          </div>

          <div className="relative">
            <label className="block mb-3 text-sm font-semibold text-left text-teal-800">Your Category</label>
            <div className="relative">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-4 pl-12 font-medium text-teal-900 transition-all duration-300 bg-white border-2 border-teal-200 shadow-sm appearance-none cursor-pointer bg-opacity-70 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none hover:bg-opacity-80"
              >
                <option value="" className="text-teal-700 bg-amber-50">-- Choose Your Category --</option>
                <option value="student" className="text-teal-700 bg-amber-50">Student (Grades 8–12)</option>
                <option value="graduate" className="text-teal-700 bg-amber-50">Graduate (UG/PG)</option>
                <option value="professional" className="text-teal-700 bg-amber-50">Working Professional</option>
              </select>
              <Briefcase className="absolute text-teal-600 -translate-y-1/2 left-4 top-1/2" size={20} />
              <div className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {!userType && <p className="mt-2 text-sm font-medium text-left text-pink-600">Please select a category.</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 mt-8 text-lg font-bold transition-all duration-300 transform border-2 border-yellow-400 shadow-xl cursor-pointer bg-gradient-to-r from-teal-800 to-teal-900 text-amber-50 rounded-2xl hover:from-teal-900 hover:to-emerald-900 hover:scale-105 hover:shadow-2xl border-opacity-30"
          >
            Continue Your Journey
            <span className="ml-3 font-extrabold text-yellow-400">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;