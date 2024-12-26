"use client";
import React from "react";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface Store {
    id: number;
    name: string;
    products: Product[];
}

const StoresResult: React.FC = () => {
    // Dữ liệu mẫu của các cửa hàng và sản phẩm (có thể thay bằng dữ liệu thực tế từ API)
    const stores: Store[] = [
        {
            id: 1,
            name: "Store 1",
            products: [
                { id: 1, name: "Product 1", price: "$10", image: "/images/product1.jpg" },
                { id: 2, name: "Product 2", price: "$15", image: "/images/product2.jpg" },
            ],
        },
        {
            id: 2,
            name: "Store 2",
            products: [
                { id: 3, name: "Product 3", price: "$20", image: "/images/product3.jpg" },
                { id: 4, name: "Product 4", price: "$25", image: "/images/product4.jpg" },
            ],
        },
        {
            id: 3,
            name: "Store 3",
            products: [
                { id: 5, name: "Product 5", price: "$30", image: "/images/product5.jpg" },
                { id: 6, name: "Product 6", price: "$35", image: "/images/product6.jpg" },
            ],
        },
    ];

    return (
        <div className="container mx-auto max-w-4xl bg-white rounded-lg py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search Results</h2>
            <div className="space-y-8">
                {stores.map((store) => (
                    <div key={store.id} className="border-b pb-6">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">{store.name}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                            {store.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="border p-4 rounded-md shadow-md bg-gray-50"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-32 object-cover rounded-md mb-4"
                                    />
                                    <h4 className="text-sm font-semibold text-gray-800">{product.name}</h4>
                                    <p className="text-gray-600">{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoresResult;
