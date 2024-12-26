import React from "react";

interface ProductItem {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[]; // Mảng các URL hình ảnh
}

interface ItemsResultProps {
    results: ProductItem[];
}

const ItemsResult: React.FC<ItemsResultProps> = ({ results }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                    {/* Hiển thị hình ảnh sản phẩm */}
                    {product.images.length > 0 ? (
                        <img
                            src={product.images[0]} // Hiển thị ảnh đầu tiên trong mảng images
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-300 rounded-md mb-4 flex items-center justify-center">
                            No Image
                        </div>
                    )}

                    {/* Thông tin sản phẩm */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-lg font-bold text-gray-600">${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemsResult;
