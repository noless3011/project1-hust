import Product from '@/app/types/Product';
import React from 'react';
import Link from 'next/link';

interface ProductProps {
    product: Product;
    onHover: (isHovering: boolean) => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, onHover }) => {
    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '/placeholder.jpg';

    return (
        <div
            className="flex flex-col justify-between items-center text-center p-2 bg-gray-100 rounded-md transition-shadow duration-300 hover:shadow-lg h-72"
            style={{ width: '160px', minWidth: '160px' }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <div className='w-full h-3/5 relative overflow-hidden'> {/* Added relative and overflow-hidden */}
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full rounded-md mb-2 object-cover" // Changed h-auto to h-full and added object-cover
                    style={{ maxHeight: 'none' }} // Remove maxHeight to allow full height
                />
            </div>

            <div className="flex flex-col items-center justify-between h-2/5 w-full"> {/* Adjusted this div */}
                <Link
                    href={`/products/${product.id}`}
                    className="text-black font-bold hover:underline text-sm sm:text-base overflow-hidden text-ellipsis" // Added text-sm and overflow properties
                    style={{ maxWidth: '100%' }} // Ensure text doesn't overflow horizontally
                >
                    {product.name}
                </Link>
                <div className="text-gray-700 font-semibold">
                    ${product.price.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;