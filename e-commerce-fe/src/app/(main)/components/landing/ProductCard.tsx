"use client";
import React from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import ProductCardDropdown from './ProductCardDropdown';
import Product from '@/app/types/Product';

interface ProductCardProps {
    product: Product;
    cardW: number;
    cardH: number;
}
/**The image width and height must be divisible by 4 */
const ProductCard: React.FC<ProductCardProps> = ({
    product,
    cardW,
    cardH,
}) => {
    const { name, images, price, discount, id } = product;
    const url = `/product/${id}`;
    const image = images && images.length > 0 ? images[0] : 'https://picsum.photos/300/300'; // Use a fallback image if no images are available
    const discountedPrice = discount ? price * (1 - discount / 100) : price;

    return (
        <Provider store={store}>
            <div className="flex flex-col relative rounded-lg shadow-lg hover:shadow-black transition-shadow duration-300"
                style={{
                    height: cardH,
                    width: cardW
                }}>
                <Link href={url} className="block overflow-hidden aspect-square flex-grow-[3]">
                    <div className="relative aspect-auto rounded-t-lg w-full h-full object-cover">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-t-lg "
                        />
                    </div>
                </Link>
                <Link href={url} className="flex-grow-[1]">
                    <div className="p-4">
                        <div className="relative w-full h-24 group">
                            <h3 className="text-lg font-medium line-clamp-3 select-text">
                                {name}
                            </h3>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-bold">
                                {discount ? (
                                    <>
                                        <span className="text-red-500">{discount.toFixed(0)}%</span>{' '}
                                        <span className="text-gray-900 line-through">
                                            {price.toFixed(2)} VND
                                        </span>
                                        <span className="ml-2 text-gray-900">
                                            {discountedPrice.toFixed(2)} VND
                                        </span>
                                    </>
                                ) : (
                                    <>{price.toFixed(2)} VND</>
                                )}
                            </span>
                        </div>
                    </div>
                </Link>

                <ProductCardDropdown ></ProductCardDropdown>
            </div>
        </Provider>
    );
};

export default ProductCard;