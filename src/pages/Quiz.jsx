import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quizData from "../data/quiz.json";
import Breadcrumbs from "../components/Breadcrumbs";
import { UserRoleIcon } from "../components/icons";
import QuizQuestion from "../components/QuizQuestion";

const recommendations = {
  "tech": {
    "career": "Software Engineer",
    "description": "You thrive on innovation and enjoy building solutions. Your logical and analytical mind makes you a great fit for technology-focused roles.",
  },
  "healthcare": {
    "career": "Nurse or Doctor", 
    "description": "Your passion for helping others and your compassionate nature point to a career in healthcare, where you can make a tangible difference in people's lives.",
  },
  "business": {
    "career": "Marketing Manager",
    "description": "You're a natural leader with a strategic mindset. Your skills in organization and communication are perfect for business and management roles.",
  },
  "creative": {
    "career": "Graphic Designer or Artist",
    "description": "Your imaginative and artistic side is your greatest strength. A career in a creative field will allow you to express yourself and inspire others.",
  },
  "science": {
    "career": "Data Scientist or Researcher",
    "description": "You are a curious and detail-oriented person. A career in science or research will allow you to explore complex questions and make new discoveries.",
  },
};

const allInterests = [...new Set(quizData.flatMap(q => q.options.map(opt => opt.value)))];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [username, setUsername] = useState((localStorage.getItem("username")));
  const [userCategory, setUserCategory] = useState((localStorage.getItem("userType")));

  const handleAnswer = (answerValue) => {
    const nextAnswers = [...answers, answerValue];
    setAnswers(nextAnswers);

    if (currentQ < filteredQuizData.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const counts = {};
      nextAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });

      const topChoice = Object.keys(counts).reduce((a, b) =>
        (counts[a] > counts[b]) ? a : b
      );

      const confidence = Math.round(
        (counts[topChoice] / filteredQuizData.length) * 100
      );

      setResult({ career: topChoice, confidence });
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setSelectedInterest("");
  };

  const careerRecommendation = result ? recommendations[result.career] : null;

  const filteredQuizData = selectedInterest
    ? quizData.filter(q => q.options.some(opt => opt.value === selectedInterest))
    : quizData;
    
  return (
    <div className="flex flex-col items-center min-h-screen p-4 font-sans bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-amber-50 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>
        
        <div className="my-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-amber-50"
          >
            {username ? `${username}'s Career Quiz` : 'Career Quiz'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-amber-100/80"
          >
            {username ? `As a ${userCategory.toLowerCase()}, answer these questions to find a career path that aligns with your interests.` : 'Answer these questions to discover a career path that aligns with your interests and personality.'}
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {selectedInterest === "" && !result ? (
            <motion.div
              key="interest-select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 border shadow-2xl bg-amber-50/10 backdrop-blur-lg rounded-3xl sm:p-10 ring-1 ring-amber-50/20 border-amber-100/10"
            >
              <h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl text-amber-50">
                Choose an interest to begin:
              </h2>
              <div className="relative w-full">
                <select
                  value={selectedInterest}
                  onChange={(e) => setSelectedInterest(e.target.value)}
                  className="w-full px-6 py-4 pr-12 text-lg font-medium transition-all border-2 shadow-lg appearance-none bg-amber-50/15 border-amber-50/20 rounded-2xl text-amber-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-400 focus:outline-none"
                >
                  <option value="" className="bg-teal-800 text-amber-100">Select an interest...</option>
                  {allInterests.map(interest => (
                    <option key={interest} value={interest} className="capitalize bg-teal-800 text-amber-100">
                      {interest}
                    </option>
                  ))}
                </select>
                <UserRoleIcon />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-sm text-center text-amber-200/70"
              >
                Select your area of interest to get personalized questions
              </motion.div>
            </motion.div>
          ) : !result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 border shadow-2xl bg-amber-50/10 backdrop-blur-lg rounded-3xl sm:p-10 ring-1 ring-amber-50/20 border-amber-100/10"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="px-4 py-2 text-sm font-medium rounded-full text-amber-200/80 bg-amber-50/10">
                  Question {currentQ + 1} of {filteredQuizData.length}
                </p>
                <div className="flex space-x-2">
                  {Array.from({ length: filteredQuizData.length }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i <= currentQ ? 'bg-amber-500' : 'bg-amber-50/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <QuizQuestion
                question={filteredQuizData[currentQ]}
                onAnswer={handleAnswer}
              />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 space-y-8 text-center border-2 shadow-2xl bg-gradient-to-br from-amber-100/20 via-amber-50/15 to-rose-100/10 border-amber-400/50 rounded-3xl sm:p-10 backdrop-blur-lg ring-1 ring-amber-300/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <h2 className="mb-2 text-3xl font-bold text-amber-50">🎉 Quiz Completed!</h2>
                <p className="text-lg text-amber-100/90">
                  Your ideal career path could be...
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6 border bg-amber-50/10 rounded-2xl border-amber-400/30"
              >
                <p className="mb-4 text-4xl font-extrabold capitalize text-amber-400">
                  {careerRecommendation.career}
                </p>
                <p className="max-w-lg mx-auto leading-relaxed text-amber-100/90">
                  {careerRecommendation.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-4"
              >
                <p className="font-medium text-amber-200/90">Confidence Level</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-full h-4 overflow-hidden border rounded-full bg-teal-700/50 border-amber-400/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.confidence}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full shadow-lg bg-gradient-to-r from-amber-400 via-amber-500 to-rose-400"
                    />
                  </div>
                  <p className="w-20 text-xl font-bold text-right text-amber-400">
                    {result.confidence}%
                  </p>
                </div>
                <p className="text-sm text-amber-200/70">
                  Based on your answers and preferences
                </p>
              </motion.div>

              <motion.button
                onClick={resetQuiz}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 mt-8 font-bold text-teal-900 transition-all duration-300 transform border shadow-xl bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl hover:from-amber-400 hover:to-amber-500 border-amber-400/50"
              >
                Retake Quiz
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="fixed w-32 h-32 rounded-full top-10 right-10 bg-amber-400/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="fixed w-48 h-48 rounded-full bottom-10 left-10 bg-rose-400/10 blur-3xl"
        />
      </div>
    </div>
  );
};

export default Quiz;