// components/ProductRow.tsx
import React from 'react';
import Image from 'next/image';
import Product, { productTypeColorMap } from '@/app/types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setInspectorState, setProduct } from '@/app/redux/inspectorSlice';
import { ProductApi } from '@/app/utils/ApiClient';

interface ProductRowProps {
    product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
    let statusColor = '';
    let statusText = '';

    switch (product.status) {
        case 'Available':
            statusColor = 'bg-green-100 text-green-800';
            statusText = 'Available';
            break;
        case 'SoldOut':
            statusColor = 'bg-red-100 text-red-800';
            statusText = 'Sold Out';
            break;
        case 'ComingSoon':
            statusColor = 'bg-yellow-100 text-yellow-800';
            statusText = 'Coming Soon';
            break;
        default:
            statusColor = 'bg-gray-100 text-gray-800';
            statusText = product.status;
    }
    //Handling tag color
    const productType = product.types[0];
    const colors = productType && productTypeColorMap[productType];

    const bgColorClass = colors?.bgColor || 'bg-gray-100'; // Default background color
    const textColorClass = colors?.textColor || 'text-gray-800';

    // Handling edit
    const dispatch = useDispatch();

    const inspector = useSelector((state: RootState) => state.inspector);
    const handleDelete = async () => {
        try {
            const deleteProductFunc = await ProductApi.productControllerDeleteOne(Number(product.id));
            await deleteProductFunc();

        } catch (error) {
            console.log("error while delete", error);
        }
    }
    const handleEdit = () => {
        if (inspector.currentState === 'collapsed' || inspector.currentState === 'add') {
            dispatch(setProduct(product));
            dispatch(setInspectorState("edit"));
        } else {
            dispatch(setInspectorState("collapsed"));
        }
    }


    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="relative h-10 w-10 mr-2">
                        {product.images[0] && (
                            <Image
                                className="h-full w-full rounded object-cover"
                                crossOrigin='anonymous'
                                src={product.images[0]}
                                layout="fill"
                                objectFit='contain'
                                alt={product.name}
                            />
                        )}
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.soldNumber}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColorClass} ${textColorClass}`}
                >
                    {productType}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                    {statusText}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={handleEdit}>
                    Edit
                </button>
                <button className="text-red-600 hover:text-red-900" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;