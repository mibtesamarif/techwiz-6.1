// src/components/ResourceCard.jsx
import { addBookmark } from "../utils/storage";

const typeIcons = {
  Article: "📄",
  eBook: "📘",
  Checklist: "✅",
  Webinar: "🎥"
};

const ResourceCard = ({ resource }) => {
  const handleBookmark = (e) => {
    e.stopPropagation();
    addBookmark({
      id: `resource-${resource.id}`,
      title: resource.title,
      type: "Resource",
      note: ""
    });
    alert("Bookmarked!");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition flex flex-col">
      {/* Title + Icon */}
      <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <span className="text-xl">
          {typeIcons[resource.type] || "📁"}
        </span>
        {resource.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4 flex-grow">
        {resource.description}
      </p>

      {/* Type + Link */}
      <div className="flex items-center justify-between">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {resource.type}
        </span>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          View
        </a>
      </div>

      {/* Bookmark button */}
      <button
        onClick={handleBookmark}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
      >
        Bookmark
      </button>
    </div>
  );
};

export default ResourceCard;
