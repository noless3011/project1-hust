// 'use client'; // Mark this component as a client component
// import React from 'react';
// import type Order from '@/app/types/Order';
// import type Product from '@/app/types/Product';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     ChartOptions,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// // Mock Data (Replace with your actual API calls)
// const mockOrders: Order[] = [
//     { status: 'purchased', ownerId: 1, productId: 101, address: '123 Main St', amount: 50, createdTime: Date.now() - 86400000 * 3, purchasedTime: Date.now() - 86400000 * 2 },
//     { status: 'active', ownerId: 1, productId: 102, address: '456 Oak Ave', amount: 25, createdTime: Date.now() - 86400000 * 1, purchasedTime: 0 },
//     { status: 'canceled', ownerId: 1, productId: 103, address: '789 Pine Ln', amount: 100, createdTime: Date.now() - 86400000 * 4, purchasedTime: 0 },
//     { status: 'purchased', ownerId: 1, productId: 104, address: '101 Elm Rd', amount: 75, createdTime: Date.now() - 86400000 * 5, purchasedTime: Date.now() - 86400000 * 4 },
//     { status: 'preparing', ownerId: 1, productId: 105, address: '222 Willow Ct', amount: 30, createdTime: Date.now() - 3600000, purchasedTime: Date.now() - 1800000 },
//     { status: 'purchased', ownerId: 1, productId: 106, address: '333 Maple Dr', amount: 60, createdTime: Date.now() - 7200000, purchasedTime: Date.now() - 3600000 },
// ];

// const mockProducts: Product[] = [
//     { id: 'prod1', created_at: '', updated_at: '', status: 'Available', name: 'Awesome Gadget', description: 'A cool gadget', images: [], price: 49.99, discount: 0, rating: 4.5, remaining: 15, soldNumber: 50, totalLike: 100, totalReview: 20, ownerId: 1, types: ['Electronic'], createdTime: Date.now() - 86400000 * 10 },
//     { id: 'prod2', created_at: '', updated_at: '', status: 'SoldOut', name: 'Stylish Shirt', description: 'A trendy shirt', images: [], price: 29.99, discount: 10, rating: 4.2, remaining: 0, soldNumber: 120, totalLike: 80, totalReview: 30, ownerId: 1, types: ['Clothing'], createdTime: Date.now() - 86400000 * 20 },
//     { id: 'prod3', created_at: '', updated_at: '', status: 'Available', name: 'Cozy Blanket', description: 'A warm blanket', images: [], price: 39.99, discount: 5, rating: 4.8, remaining: 30, soldNumber: 75, totalLike: 150, totalReview: 40, ownerId: 1, types: ['HomeAppliances'], createdTime: Date.now() - 86400000 * 30 },
// ];

// const DashboardPage: React.FC = () => {
//     // --- Data Aggregation and Calculations ---
//     const totalRevenue = mockOrders
//         .filter(order => order.status === 'purchased')
//         .reduce((sum, order) => sum + order.amount, 0);

//     const newOrdersCount = mockOrders.filter(order => order.status === 'active').length;
//     const preparingOrdersCount = mockOrders.filter(order => order.status === 'preparing').length;

//     const productStatusCounts = mockProducts.reduce((acc, product) => {
//         acc[product.status] = (acc[product.status] || 0) + 1;
//         return acc;
//     }, {} as Record<Product['status'], number>);

//     // --- Chart Data ---
//     const dailySalesData = mockOrders
//         .filter(order => order.status === 'purchased')
//         .reduce((acc, order) => {
//             const date = new Date(order.purchasedTime || order.createdTime).toLocaleDateString();
//             acc[date] = (acc[date] || 0) + order.amount;
//             return acc;
//         }, {} as Record<string, number>);

//     const chartData = {
//         labels: Object.keys(dailySalesData),
//         datasets: [
//             {
//                 label: 'Daily Sales',
//                 data: Object.values(dailySalesData),
//                 backgroundColor: 'rgba(54, 162, 235, 0.8)',
//             },
//         ],
//     };

//     const chartOptions: ChartOptions<'bar' | 'line' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'scatter'> = { // Using 'any' for simplicity, refine with Chart.js types
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//             },
//             title: {
//                 display: true,
//                 text: 'Recent Sales Performance',
//             },
//         },
//     };

//     return (
//         <div className="p-8 w-full flex flex-col items-center">
//             <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 {/* --- Key Metrics --- */}
//                 <InfoCard title="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} />
//                 <InfoCard title="New Orders" value={newOrdersCount} />
//                 <InfoCard title="Preparing Orders" value={preparingOrdersCount} />
//                 <InfoCard title="Available Products" value={productStatusCounts.Available || 0} />
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
//                 {/* --- Order Status Summary --- */}
//                 <RoundedRectangle title="Order Status Summary">
//                     <ul className="space-y-2">
//                         <li className="flex justify-between items-center">
//                             <span>Active:</span>
//                             <span>{mockOrders.filter(order => order.status === 'active').length}</span>
//                         </li>
//                         <li className="flex justify-between items-center">
//                             <span>Purchased:</span>
//                             <span>{mockOrders.filter(order => order.status === 'purchased').length}</span>
//                         </li>
//                         <li className="flex justify-between items-center">
//                             <span>Preparing:</span>
//                             <span>{mockOrders.filter(order => order.status === 'preparing').length}</span>
//                         </li>
//                         <li className="flex justify-between items-center">
//                             <span>Canceled:</span>
//                             <span>{mockOrders.filter(order => order.status === 'canceled').length}</span>
//                         </li>
//                     </ul>
//                 </RoundedRectangle>

//                 {/* --- Product Status Summary --- */}
//                 <RoundedRectangle title="Product Status Summary">
//                     <ul className="space-y-2">
//                         {Object.entries(productStatusCounts).map(([status, count]) => (
//                             <li key={status} className="flex justify-between items-center capitalize">
//                                 <span>{status}:</span>
//                                 <span>{count}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </RoundedRectangle>
//             </div>

//             {/* --- Sales Chart --- */}
//             <RoundedRectangle title="Sales Chart">
//                 <Bar options={chartOptions} data={chartData} />
//             </RoundedRectangle>

//             {/* --- Recent Orders --- */}
//             <RoundedRectangle title="Recent Orders">
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {mockOrders.slice(0, 5).map(order => (
//                                 <tr key={order.productId}>
//                                     <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{order.productId}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">${order.amount.toFixed(2)}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{new Date(order.createdTime).toLocaleDateString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </RoundedRectangle>
//         </div>
//     );
// };

// // --- Reusable Components ---
// interface InfoCardProps {
//     title: string;
//     value: string | number;
// }

// const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
//     return (
//         <div className="rounded-md bg-white p-4 border border-gray-200">
//             <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//             <p className="text-lg font-semibold text-gray-900">{value}</p>
//         </div>
//     );
// };

// interface RoundedRectangleProps {
//     title: string;
//     children: React.ReactNode;
// }

// const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ title, children }) => {
//     return (
//         <div className="rounded-md bg-white p-4 border border-gray-200">
//             <h3 className="font-semibold mb-3">{title}</h3>
//             {children}
//         </div>
//     );
// };

// export default DashboardPage;