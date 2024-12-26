import React from "react"

interface CategoryCardProps {
    imageUrl: string;
    categoryName: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, categoryName }) => {
    const categoryUrl = `/category/${categoryName.toLowerCase()}`;

    return (
        <a href={categoryUrl}>
            <div className="flex flex-col w-24 h-fit items-center">
                <div className="overflow-hidden rounded-full hover:shadow-xl shadow-black">
                    <img src={imageUrl} className="w-36 aspect-square rounded-full transition-transform duration-300 hover:scale-110" />
                </div>
                <p className="mt-4">{categoryName}</p>
            </div>
        </a>
    );
};

export default CategoryCard;