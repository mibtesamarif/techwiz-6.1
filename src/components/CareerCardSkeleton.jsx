const CareerCardSkeleton = () => (
  <div className="bg-white/10 border border-white/20 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm shadow-2xl animate-pulse">
    <div className="h-48 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-3 w-3/4"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="flex flex-wrap gap-2 mb-4">
      <div className="h-6 bg-gray-600 rounded-full w-20"></div>
      <div className="h-6 bg-gray-600 rounded-full w-16"></div>
      <div className="h-6 bg-gray-600 rounded-full w-24"></div>
    </div>
    <div className="border-t border-white/20 pt-4">
      <div className="h-4 bg-gray-600 rounded mb-2 w-1/2"></div>
      <div className="h-4 bg-gray-600 rounded w-full"></div>
    </div>
  </div>
);
export default CareerCardSkeleton;