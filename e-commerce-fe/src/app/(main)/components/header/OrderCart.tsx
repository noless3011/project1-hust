export interface CartItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    originalPrice?: number;
    selectedSize?: string;
    selectedColor?: string;
    quantity: number;
    stockStatus: 'In Stock' | 'Out of stock' | `Available in ${number} days`;
}

// components/order-cart.tsx
import React from 'react';
import Image from 'next/image';

const cartItems: CartItem[] = [
    {
        id: 1,
        name: 'Relaxed Fit T-shirt',
        imageUrl: '/images/relaxed-fit-tshirt.png',
        price: 12.99,
        originalPrice: 12.99,
        selectedSize: 'XL',
        selectedColor: 'Blue',
        quantity: 1,
        stockStatus: 'In Stock',
    },
    {
        id: 2,
        name: 'Nylon Sports Cap',
        imageUrl: '/images/nylon-sports-cap.png',
        price: 14.99,
        originalPrice: 14.99,
        quantity: 1,
        stockStatus: 'Available in 2 days',
    },
    {
        id: 3,
        name: 'Sneakers',
        imageUrl: '/images/sneakers.png',
        price: 34.99,
        originalPrice: 34.99,
        selectedSize: 'UK 9',
        quantity: 1,
        stockStatus: 'Out of stock',
    },
    {
        id: 4,
        name: 'Slim Fit Suit Vest',
        imageUrl: '/images/slim-fit-suit-vest.png',
        price: 17.99,
        originalPrice: 17.99,
        selectedSize: 'XL',
        selectedColor: 'Yellow',
        quantity: 1,
        stockStatus: 'In Stock',
    },
];

interface OrderCartProps {
    isCartOpen: boolean;
}

const OrderCart: React.FC<OrderCartProps> = ({ isCartOpen }) => {
    //TODO: Implement cart items from the API
    return (
        <div
            className={`absolute top-16 right-82 mt-2 w-fit bg-white rounded-md shadow-xl overflow-hidden z-40 transition-all duration-300 transform ${isCartOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
            style={{ transformOrigin: 'top right' }}
        >


            <div className="bg-white rounded-lg w-fit shadow p-4 md:p-6 ">
                <h2 className="text-lg font-semibold mb-4">Cart</h2>
                <ul className="space-y-4 w-96">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex items-start space-x-4">
                            <div className="w-20 h-20 relative flex-shrink-0">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                        <div className="text-sm text-gray-500">
                                            {item.originalPrice && item.price !== item.originalPrice && (
                                                <span className="line-through mr-1">${item.originalPrice.toFixed(2)}</span>
                                            )}
                                            ${item.price.toFixed(2)}
                                        </div>
                                        {item.selectedSize && (
                                            <span className="text-xs text-gray-500 mr-2">Size: {item.selectedSize}</span>
                                        )}
                                        {item.selectedColor && (
                                            <span className="text-xs text-gray-500">Color: {item.selectedColor}</span>
                                        )}
                                        <div className={`text-xs ${item.stockStatus === 'In Stock' ? 'text-green-500' : item.stockStatus.startsWith('Available') ? 'text-orange-500' : 'text-red-500'}`}>
                                            {item.stockStatus}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        {item.selectedSize && (
                                            <div className="relative inline-block text-left">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        id={`menu-button-size-${item.id}`}
                                                        aria-expanded="true"
                                                        aria-haspopup="true"
                                                    >
                                                        {item.selectedSize}
                                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {/* More size options can be added here */}
                                            </div>
                                        )}
                                        {item.selectedColor && (
                                            <div className="relative inline-block text-left">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        id={`menu-button-color-${item.id}`}
                                                        aria-expanded="true"
                                                        aria-haspopup="true"
                                                    >
                                                        {item.selectedColor}
                                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {/* More color options can be added here */}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="flex border border-gray-300 rounded">
                                            <button
                                                className="px-2 py-1 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="px-2 py-1 text-sm">{item.quantity}</span>
                                            <button className="px-2 py-1 hover:bg-gray-100 focus:outline-none">
                                                +
                                            </button>
                                        </div>
                                        <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364z" />
                                            </svg>
                                            <span className="sr-only">Save</span>
                                        </button>
                                        <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="sr-only">Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderCart;