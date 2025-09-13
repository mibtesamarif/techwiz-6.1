const CareerCardSkeleton = () => (
  <div className="relative p-6 overflow-hidden border shadow-2xl bg-cream/5 border-cream/20 rounded-3xl backdrop-blur-sm animate-pulse">
    <div className="h-48 mb-6 bg-teal-800/30 rounded-2xl"></div>
    <div className="w-3/4 h-6 mb-3 rounded bg-teal-800/30"></div>
    <div className="h-4 mb-4 rounded bg-teal-800/30"></div>
    <div className="flex flex-wrap gap-2 mb-4">
      <div className="w-20 h-6 rounded-full bg-teal-800/30"></div>
      <div className="w-16 h-6 rounded-full bg-teal-800/30"></div>
      <div className="w-24 h-6 rounded-full bg-teal-800/30"></div>
    </div>
    <div className="pt-4 border-t border-cream/20">
      <div className="w-1/2 h-4 mb-2 rounded bg-teal-800/30"></div>
      <div className="w-full h-4 rounded bg-teal-800/30"></div>
    </div>
  </div>
);

export default CareerCardSkeleton;