// src/components/StoryModal.jsx

const StoryModal = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Content */}
        <img
          src={story.image || "/vite.svg"}
          alt={story.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-1">{story.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{story.title}</p>
        <span className="inline-block mb-4 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
          {story.domain}
        </span>

        {/* Full story */}
        <p className="text-gray-700 leading-relaxed">{story.fullStory}</p>

        {/* LinkedIn-style link */}
        {story.linkedin && (
          <a
            href={story.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            🔗 View LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default StoryModal;
