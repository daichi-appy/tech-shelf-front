const LoadingDots: React.FC = () => {
  return (
    <div className="flex justify-center" aria-label="読み込み中">
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full" style={{ animationDelay: '0s' }}></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4" style={{ animationDelay: '0.2s' }}></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export default LoadingDots;
