// src/components/StoryCard.jsx
import { addBookmark } from "../utils/storage";

const StoryCard = ({ story, onClick }) => {
  const handleBookmark = (e) => {
    e.stopPropagation();
    addBookmark({
      id: `story-${story.id}`,
      title: story.name,
      type: "Success Story",
      note: ""
    });
    alert("Bookmarked!");
  };

  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer flex flex-col"
    >
      <img
        src={story.image || "/vite.svg"}
        alt={story.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <h2 className="text-lg font-semibold">{story.name}</h2>
      <p className="text-sm text-gray-500">{story.title}</p>

      {/* Quote-style snippet */}
      <blockquote className="mt-2 text-gray-700 italic border-l-4 border-blue-500 pl-3">
        “{story.snippet}”
      </blockquote>

      {/* Domain badge */}
      <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
        {story.domain}
      </span>

      {/* Bookmark */}
      <button
        onClick={handleBookmark}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
      >
        Bookmark
      </button>
    </div>
  );
};

export default StoryCard;
