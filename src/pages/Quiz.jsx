import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quizData from "../data/quiz.json";
import Breadcrumbs from "../components/Breadcrumbs";
import { ChevronRight, UserRoleIcon } from "../components/icons";
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
  const [username, setUsername] = useState("");
  const [userCategory, setUserCategory] = useState("Student");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUserCategory = localStorage.getItem("userCategory");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedUserCategory) {
      setUserCategory(storedUserCategory);
    }
  }, []);

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
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>
        
        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            {username ? `${username}'s Career Quiz` : 'Career Quiz'}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            {username ? `As a ${userCategory.toLowerCase()}, answer these questions to find a career path that aligns with your interests.` : 'Answer these questions to discover a career path that aligns with your interests and personality.'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {selectedInterest === "" && !result ? (
            <motion.div
              key="interest-select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-10 ring-1 ring-white/10 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Choose an interest to begin:
              </h2>
              <div className="relative w-full">
                <select
                  value={selectedInterest}
                  onChange={(e) => setSelectedInterest(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border-none rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all appearance-none pr-10"
                >
                  <option value="" className="bg-gray-800 text-gray-200">Select an interest...</option>
                  {allInterests.map(interest => (
                    <option key={interest} value={interest} className="bg-gray-800 text-gray-200 capitalize">
                      {interest}
                    </option>
                  ))}
                </select>
                <UserRoleIcon />
              </div>
            </motion.div>
          ) : !result ? (
            <motion.div
              key="quiz"
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-10 ring-1 ring-white/10 shadow-lg"
            >
              <p className="text-sm text-gray-400 mb-6 font-medium">
                Question {currentQ + 1} of {filteredQuizData.length}
              </p>
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
              className="bg-purple-900/40 border-2 border-purple-500 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-lg text-center space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">🎉 Quiz Completed!</h2>
              <p className="text-lg text-purple-200">
                Your ideal career path could be...
              </p>
              <p className="text-4xl font-extrabold text-purple-400 capitalize">
                {careerRecommendation.career}
              </p>
              <p className="text-gray-300 max-w-lg mx-auto leading-relaxed">
                {careerRecommendation.description}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.confidence}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                  >
                  </motion.div>
                </div>
                <p className="font-semibold text-lg text-purple-300 w-20 text-right">
                  {result.confidence}%
                </p>
              </div>
              <p className="text-sm text-gray-400">
                Confidence level based on your answers.
              </p>
              <button
                onClick={resetQuiz}
                className="mt-6 bg-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all"
              >
                Retake Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;