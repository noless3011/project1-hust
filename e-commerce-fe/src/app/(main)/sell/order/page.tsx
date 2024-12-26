'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { dummyOrders } from './dummy';
import OrderTable from './OrderTable';
import { OrderStatus, default as OrderType } from '@/app/types/Order'; // Import the interface

const tabs: OrderStatus[] = ['active', 'preparing', 'purchased', 'canceled'];

const getNextStatus = (status: OrderStatus): OrderStatus | undefined => {
    switch (status) {
        case 'active':
            return 'preparing';
        case 'preparing':
            return 'purchased';
        default:
            return undefined;
    }
};

const getStatusDisplayName = (status: OrderStatus): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
};

export default function OrderManagementPage() {
    const [activeTab, setActiveTab] = useState<OrderStatus>('active');
    const [orders, setOrders] = useState(dummyOrders);

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => order.status === activeTab);
    }, [orders, activeTab]);

    const handleTabClick = (tab: OrderStatus) => {
        setActiveTab(tab);
    };

    const handleNextStage = useCallback((orderToUpdate: OrderType) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => {
                // Find the order to update based on its properties (assuming they are unique enough)
                if (
                    order.ownerId === orderToUpdate.ownerId &&
                    order.productId === orderToUpdate.productId &&
                    order.createdTime === orderToUpdate.createdTime
                ) {
                    const nextStatus = getNextStatus(order.status);
                    return nextStatus ? { ...order, status: nextStatus } : order;
                }
                return order;
            })
        );
    }, []);

    return (
        <div className="p-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Order Management</h1>
            <div className="border-b border-gray-200 mb-4">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } focus:outline-none`}
                        >
                            {getStatusDisplayName(tab)}
                        </button>
                    ))}
                </nav>
            </div>
            <OrderTable orders={filteredOrders} onNextStage={handleNextStage} />
        </div>
    );
}
