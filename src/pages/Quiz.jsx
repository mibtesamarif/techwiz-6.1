// // src/pages/Quiz.jsx
// import { useState } from "react";
// import quizData from "../data/quiz.json";
// import QuizQuestion from "../components/QuizQuestion";
// import Breadcrumbs from "../components/Breadcrumbs";

// const Quiz = () => {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [result, setResult] = useState(null);

//   const handleAnswer = (answerValue) => {
//     setAnswers([...answers, answerValue]);
//     if (currentQ < quizData.length - 1) {
//       setCurrentQ(currentQ + 1);
//     } else {
//       // Count answers
//       const counts = {};
//       answers.concat(answerValue).forEach((ans) => {
//         counts[ans] = (counts[ans] || 0) + 1;
//       });

//       const topChoice = Object.keys(counts).reduce((a, b) =>
//         counts[a] > counts[b] ? a : b
//       );

//       const confidence = Math.round(
//         (counts[topChoice] / quizData.length) * 100
//       );

//       setResult({ career: topChoice, confidence });
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQ(0);
//     setAnswers([]);
//     setResult(null);
//   };

//   return (
//     <div>
//       <Breadcrumbs />
//       <h1 className="text-3xl font-bold mb-6">Career Quiz</h1>

//       {!result ? (
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <p className="text-sm text-gray-600 mb-4">
//             Question {currentQ + 1} of {quizData.length}
//           </p>
//           <QuizQuestion
//             question={quizData[currentQ]}
//             onAnswer={handleAnswer}
//           />
//         </div>
//       ) : (
//         <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md text-center space-y-4">
//           <h2 className="text-2xl font-semibold">🎉 Quiz Completed!</h2>
//           <p>
//             Based on your answers, a good career path for you could be:{" "}
//             <span className="font-bold capitalize">{result.career}</span>
//           </p>

//           {/* Confidence meter */}
//           <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
//             <div
//               className="bg-green-500 h-4 text-xs text-center text-white"
//               style={{ width: `${result.confidence}%` }}
//             >
//               {result.confidence}%
//             </div>
//           </div>
//           <p className="text-sm text-gray-700">
//             Confidence level based on your answers
//           </p>

//           <button
//             onClick={resetQuiz}
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Retake Quiz
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Quiz Data ---
const quizData = [
  {
    "id": "q1",
    "text": "Which activity excites you the most?",
    "options": [
      {
        "value": "tech",
        "label": "Building apps or websites"
      },
      {
        "value": "healthcare",
        "label": "Helping people recover from illness"
      },
      {
        "value": "business",
        "label": "Managing people or projects"
      }
    ]
  },
  {
    "id": "q2",
    "text": "What type of environment do you enjoy?",
    "options": [
      {
        "value": "science",
        "label": "Working with experiments and research"
      },
      {
        "value": "creative",
        "label": "Designing, writing, or creating visuals"
      },
      {
        "value": "tech",
        "label": "Exploring new technologies"
      }
    ]
  },
  {
    "id": "q3",
    "text": "What do you do in your free time?",
    "options": [
      {
        "value": "creative",
        "label": "Writing stories or drawing"
      },
      {
        "value": "healthcare",
        "label": "Volunteering for a cause"
      },
      {
        "value": "business",
        "label": "Reading about market trends or investments"
      }
    ]
  },
  {
    "id": "q4",
    "text": "What problem do you enjoy solving most?",
    "options": [
      {
        "value": "tech",
        "label": "A technical bug in a program"
      },
      {
        "value": "science",
        "label": "A complex scientific puzzle"
      },
      {
        "value": "business",
        "label": "A logistical or organizational challenge"
      }
    ]
  },
  {
    "id": "q5",
    "text": "What's most important to you in a career?",
    "options": [
      {
        "value": "tech",
        "label": "Innovation and building new things"
      },
      {
        "value": "healthcare",
        "label": "Making a direct, positive impact on others' lives"
      },
      {
        "value": "business",
        "label": "Leadership and growth opportunities"
      }
    ]
  }
];

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

// --- Icons and UI Components ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const Breadcrumbs = () => {
  const pathnames = ["career-quiz"];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="text-sm my-4">
      <motion.ol
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="text-gray-300 transition-colors duration-200 hover:text-white"
          variants={itemVariants}
        >
          <a href="/">Home</a>
        </motion.li>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          return (
            <motion.li key={index} className="flex items-center space-x-2" variants={itemVariants}>
              <ChevronRight />
              {isLast ? (
                <span className="capitalize text-white font-semibold">{value.replace(/-/g, ' ')}</span>
              ) : (
                <a href={`/${value}`} className="capitalize text-gray-300 transition-colors duration-200 hover:text-white">
                  {value.replace(/-/g, ' ')}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

const QuizQuestion = ({ question, onAnswer }) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((opt, idx) => (
          <motion.button
            key={idx}
            onClick={() => onAnswer(opt.value)}
            className="block w-full text-left px-6 py-4 rounded-xl text-lg
                       bg-white/10 text-gray-200 border-2 border-white/20
                       hover:bg-purple-600 hover:text-white hover:border-purple-600
                       transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answerValue) => {
    const nextAnswers = [...answers, answerValue];
    setAnswers(nextAnswers);

    if (currentQ < quizData.length - 1) {
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
        (counts[topChoice] / quizData.length) * 100
      );

      setResult({ career: topChoice, confidence });
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const careerRecommendation = result ? recommendations[result.career] : null;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen font-sans text-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Breadcrumbs />
        
        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Career Quiz
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Answer these questions to discover a career path that aligns with your interests and personality.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-10 ring-1 ring-white/10 shadow-lg"
            >
              <p className="text-sm text-gray-400 mb-6 font-medium">
                Question {currentQ + 1} of {quizData.length}
              </p>
              <QuizQuestion
                question={quizData[currentQ]}
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

