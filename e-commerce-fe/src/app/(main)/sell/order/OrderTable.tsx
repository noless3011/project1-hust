import React from 'react';
import Order from '@/app/types/Order';
import OrderRow from './OrderRow';

interface OrderTableProps {
    orders: Order[];
    onNextStage: (order: Order) => void; // Pass the whole order
}


const OrderTable: React.FC<OrderTableProps> = ({ orders, onNextStage }) => {
    return (
        <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Owner ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created Time
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order, index) => (
                        <OrderRow key={index} order={order} onNextStage={onNextStage} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;