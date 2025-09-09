import React from 'react';

// BookmarkIcon
const BookmarkIcon = () => (
  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);

const CareerCard = ({ career, onClick, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <div 
      onClick={onClick}
      className="bg-white/20 border border-white/20 text-white rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-3xl hover:border-white/40 group"
    >
      <div className="flex-grow">
        <div className="relative mb-6">
          <img
            src={career.image}
            alt={career.title}
            className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(career.title);
            }}
            className="absolute top-3 right-3 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
            title="Bookmark"
          >
            <BookmarkIcon />
          </button>
          
          {/* Industry Badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {career.industry}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
          {career.title}
        </h2>
        <p className="text-sm text-gray-200 leading-relaxed mb-4">
          {career.description}
        </p>
        
        {/* Skills Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {career.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="bg-white/10 text-purple-200 px-2 py-1 rounded-full text-xs font-medium border border-white/20"
              >
                {skill}
              </span>
            ))}
            {career.skills.length > 3 && (
              <span className="text-purple-300 text-xs font-medium self-center">
                +{career.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-white/20 pt-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-300 font-medium">Expected Salary</span>
          <span className="text-xs text-purple-300 font-semibold">
            {Math.round(progress)}% of max
          </span>
        </div>
        
        <p className="text-lg font-bold text-green-300 mb-2">
          ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
        </p>
        
        <div className="w-full bg-gray-700/50 rounded-full h-3 shadow-inner">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg transition-all duration-500 hover:shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-xs text-gray-400 mt-2">
          Education: {career.education}
        </p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
    </div>
  );
};

export default CareerCard;