'use client'; // Make this component a client component

import React from 'react';
import ProductElement from './Product'; // Ensure the correct path to the Product component
import Product, { mapProductResponseToProduct } from '@/app/types/Product';
import { useState, useEffect } from 'react';
import { ProductApi } from '@/app/utils/ApiClient';

const Recommended: React.FC = () => {
    const [suggestionProducts, setSuggestionProducts] = useState<Product[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const fetchSuggestions = async () => {
                try {
                    const getSuggestions = await ProductApi.productControllerFindSuggestion();
                    const res = await getSuggestions();
                    const listProductGot = res.data;
                    const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                    setSuggestionProducts(mappedProducts);
                } catch (error) {
                    console.error("Error fetching suggestions:", error);
                }
            };
            fetchSuggestions();
        }
        getProducts();
    }, [])
    return (
        <div className="p-5 bg-white rounded-lg shadow-md mx-auto my-5 max-w-[100%]"> {/* Adjusted max width */}
            <h2 className="mb-5 text-black text-xl font-semibold">Recommended</h2>
            <div className="flex justify-start items-end gap-2 overflow-x-scroll pb-2 scrollbar-thin scrollbar-thumb-gray-400">
                {suggestionProducts.map((product, index) => (
                    <ProductElement
                        key={index}
                        product={product}
                        onHover={() => { }} // Pass an empty handler or implement hover behavior
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommended;

