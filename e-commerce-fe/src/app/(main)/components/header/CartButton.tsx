import React, { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import OrderCart from './OrderCart';

export default function CartButton() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="">
            <button
                onClick={toggleCart}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
            >
                <BiShoppingBag size={24} />
            </button>

            {isCartOpen && (<OrderCart isCartOpen={isCartOpen}></OrderCart>)}
        </div>
    );
}