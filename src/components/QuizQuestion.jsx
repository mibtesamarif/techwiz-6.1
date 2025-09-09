// src/components/QuizQuestion.jsx

const QuizQuestion = ({ question, onAnswer }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(opt.value)} // ✅ pass value only
            className="block w-full text-left px-4 py-2 border rounded-lg hover:bg-blue-100 transition"
          >
            {opt.label} {/* ✅ show label */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
