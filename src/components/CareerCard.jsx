import React from 'react';
import { BookmarkIcon } from './icons';

const CareerCard = ({ career, onClick, onBookmark }) => {
  const salaryMid = (career.salaryMin + career.salaryMax) / 2;
  const progress = Math.min((salaryMid / 200000) * 100, 100);

  return (
    <div
      onClick={onClick}
      className="relative flex flex-col p-6 overflow-hidden transition-all duration-300 transform border shadow-2xl cursor-pointer bg-cream/8 border-cream/25 text-cream rounded-3xl backdrop-blur-sm hover:scale-105 hover:bg-cream/12 hover:shadow-3xl hover:border-gold/40 group hover:ring-2 hover:ring-gold/20"
    >
      <div className="flex-grow">
        <div className="relative mb-6">
          <img
            src={career.image}
            alt={career.title}
            className="object-cover w-full h-48 transition-shadow duration-300 shadow-lg rounded-2xl group-hover:shadow-xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(career);
            }}
            className="absolute p-3 transition-all duration-300 rounded-full top-3 right-3 bg-teal-900/80 backdrop-blur-md text-cream hover:bg-teal-800/90 hover:scale-110 hover:ring-2 hover:ring-gold/40"
            title="Bookmark"
          >
            <BookmarkIcon />
          </button>
          
          <div className="absolute px-3 py-1 text-xs font-bold rounded-full shadow-lg text-amber-50 top-3 left-3 bg-gradient-to-r from-gold to-pink-400">
            {career.industry}
          </div>
        </div>
        
        <h2 className="mb-3 text-2xl font-bold transition-colors duration-300 text-cream group-hover:text-gold">
          {career.title}
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-teal-100">
          {career.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {career.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-teal-200 transition-colors duration-200 border rounded-full bg-teal-800/30 border-teal-600/40 hover:border-gold/40"
              >
                {skill}
              </span>
            ))}
            {career.skills.length > 3 && (
              <span className="self-center text-xs font-medium text-gold">
                +{career.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 mt-auto border-t border-cream/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-teal-200">Expected Salary</span>
          <span className="px-2 py-1 text-xs font-semibold rounded-full text-gold bg-gold/10">
            {Math.round(progress)}% of max
          </span>
        </div>
        
        <p className="mb-2 text-lg font-bold text-gold">
          ${career.salaryMin.toLocaleString()} – ${career.salaryMax.toLocaleString()}
        </p>
        
        <div className="w-full h-3 rounded-full shadow-inner bg-teal-900/50">
          <div
            className="h-3 transition-all duration-500 rounded-full shadow-lg bg-gradient-to-r from-gold to-pink-400 hover:shadow-gold/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-2 text-xs text-teal-300">
          Education: {career.education}
        </p>
      </div>
      
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-teal-900/10 to-transparent group-hover:opacity-100 rounded-3xl"></div>
    </div>
  );
};

export default CareerCard;