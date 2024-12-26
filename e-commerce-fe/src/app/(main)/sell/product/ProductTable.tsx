// components/ProductTable.tsx
import React from 'react';
import Product from '@/app/types/Product';
import ProductRow from './ProductRow';

interface ProductTableProps {
    products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    return (
        <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sold
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Stock
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                        <ProductRow key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;