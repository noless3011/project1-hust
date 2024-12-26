// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import Product, { mapProductResponseArrayToProductArray } from '@/app/types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { AppDispatch } from '@/app/redux/store';
import { ProductApi } from '@/app/utils/ApiClient';
import { setProduct, setInspectorState } from '@/app/redux/inspectorSlice';
export default function StoreManagementPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const inspectorState = useSelector((state: RootState) => (state.inspector.currentState));
    const userId = useSelector((state: RootState) => state.auth.user?.id);
    useEffect(() => {
        const getProducts = async () => {
            if (typeof userId != undefined) {
                console.log('fetching...', userId);
                try {
                    const getProductsFunc = await ProductApi.productControllerFindByOwnerId(Number(userId));
                    const res = await getProductsFunc();
                    setProducts(mapProductResponseArrayToProductArray(res.data));
                } catch (error) {
                    console.log("Fetch product table fail", error)
                }

            }
        }
        getProducts();
    }, [inspectorState, userId])
    const defaultProduct: Product = {
        id: "",
        created_at: "",
        updated_at: "",
        status: "Available", // Replace "draft" with a valid default status from your enum
        name: "",
        description: "",
        images: [],
        price: 0,
        discount: 0,
        rating: 0,
        remaining: 0,
        soldNumber: 0,
        totalLike: 0,
        totalReview: 0,
        ownerId: 0,
        types: [],
        createdTime: 0, // Or Date.now() if you prefer
    };

    const inspectorDispatch: AppDispatch = useDispatch();
    const addProduct = () => {
        if (inspectorState === 'collapsed' || inspectorState === 'edit') {
            inspectorDispatch(setProduct(defaultProduct));
            inspectorDispatch(setInspectorState('add'));
        } else {
            inspectorDispatch(setInspectorState('collapsed'))
        }
    }

    return (
        <div className="p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Store Management</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addProduct}>
                    + New Product
                </button>
            </div>
            <div className="flex items-center mb-4 space-x-2">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search anything"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Add search icon here if needed */}
                </div>
                <button className="px-4 py-2 border rounded">Filters</button>
                <button className="px-4 py-2 border rounded">Sort</button>
            </div>
            {userId ?
                (<ProductTable products={products} />) :
                (<h2>You need to login</h2>)}
        </div>
    );
}