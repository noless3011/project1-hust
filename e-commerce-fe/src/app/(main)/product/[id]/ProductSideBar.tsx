import React from 'react';
import Product from '@/app/types/Product';
import Link from 'next/link';


type ProductProps = {
    product: Product;
};

const ProductSideBar: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="max-w-xl h-full p-6 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
                <div className="w-10 aspect-square bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    {/* You might want to fetch and display the shop's logo here */}
                    {/* For now, just displaying the first letter of the shop name (assuming you can get it) */}
                    {/* {product.shopName ? product.shopName.charAt(0).toUpperCase() : 'S'} */}
                </div>
                <div>
                    {/* Replace 'Shop ID' with the actual shop name if available.
                         Fetching the shop name based on product.ownerId would typically involve
                         another API call or data relationship. */}
                    <div className="text-sm font-semibold">Shop ID: {product.ownerId} </div>
                    <div className="text-xs text-blue-500 space-x-2">
                        <Link href="/rating">{(product.rating * 20).toFixed(0)}% rating</Link> {/* Assuming rating is out of 5 */}
                        <span>•</span>
                        <Link href={`/contact-seller/${product.ownerId}`}>Contact Seller</Link>
                        <span>•</span>
                        <Link href={`/shop/${product.ownerId}/products`}>Other items</Link>
                    </div>
                </div>
            </div>

            <hr className="mb-4" />

            <div className="text-2xl font-bold text-black mb-2">US ${product.price.toFixed(2)}</div>
            {product.discount > 0 && (
                <div className="flex items-center mb-2">
                    <span className="text-red-500 font-semibold mr-2">
                        -{product.discount.toFixed(0)}%
                    </span>
                    <span className="line-through text-gray-500">
                        US ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                    </span>
                </div>
            )}
            <p className="text-sm mb-4">
                {product.description}
            </p>

            <div className="text-sm mb-4">
                {/* Consider adding a 'condition' property to your Product interface for more clarity */}
                <p><strong>Condition:</strong> New {/* You might want to determine the condition dynamically */}</p>
                <p><strong>Availability:</strong> {product.remaining > 0 ? `${product.remaining} in stock` : 'Out of stock'}</p>
            </div>

            <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-full text-white p-2 rounded-full border-solid border-4 border-black">
                BUY NOW
            </button>
            <button className="my-1 bg-gray-300 hover:bg-white mx-auto w-full text-black p-2 rounded-full border-solid border-4 border-black">
                Add to cart
            </button>
        </div>
    );
};

export default ProductSideBar;