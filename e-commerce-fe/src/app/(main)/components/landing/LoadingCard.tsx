// components/LoadingCard.tsx
const LoadingCard = () => {
    return (
        <div className="w-64 h-80 animate-pulse">
            <div className="w-full aspect-video bg-gray-300 rounded-t-lg"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default LoadingCard;

