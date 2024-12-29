// components/LoadingAnimation.tsx
import LoadingCard from "./LoadingCard";

interface LoadingAnimationProps {
    numberOfCards?: number; // Optional prop, defaults to 9 if not provided
}

const LoadingAnimation = ({ numberOfCards = 9 }: LoadingAnimationProps) => {
    return (
        <div className="flex flex-row gap-4 h-fit w-fit">
            {/* Create an array of the desired length and map over it */}
            {Array.from({ length: numberOfCards }).map((_, index) => (
                <LoadingCard key={index} />
            ))}
        </div>
    );
};

export default LoadingAnimation;