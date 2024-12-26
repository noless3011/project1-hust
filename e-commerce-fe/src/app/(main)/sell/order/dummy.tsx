// data/orders.ts
import Order from '@/app/types/Order';

export const dummyOrders: Order[] = [
    {
        status: 'active',
        ownerId: 1,
        productId: 101,
        address: '123 Main St',
        amount: 29.99,
        createdTime: Date.now() - 86400000, // 1 day ago
        purchasedTime: null,
    },
    {
        status: 'preparing',
        ownerId: 2,
        productId: 102,
        address: '456 Oak Ave',
        amount: 49.95,
        createdTime: Date.now() - 172800000, // 2 days ago
        purchasedTime: Date.now() - 3600000, // 1 hour ago
    },
    {
        status: 'purchased',
        ownerId: 1,
        productId: 103,
        address: '789 Pine Ln',
        amount: 19.50,
        createdTime: Date.now() - 259200000, // 3 days ago
        purchasedTime: Date.now() - 7200000, // 2 hours ago
    },
    {
        status: 'canceled',
        ownerId: 3,
        productId: 104,
        address: '101 Elm Rd',
        amount: 9.99,
        createdTime: Date.now() - 345600000, // 4 days ago
        purchasedTime: null,
    },
    {
        status: 'active',
        ownerId: 2,
        productId: 105,
        address: '222 Willow Way',
        amount: 75.00,
        createdTime: Date.now() - 604800000, // 7 days ago
        purchasedTime: null,
    },
    {
        status: 'preparing',
        ownerId: 1,
        productId: 106,
        address: '333 Birch Blvd',
        amount: 12.75,
        createdTime: Date.now() - 691200000, // 8 days ago
        purchasedTime: Date.now() - 10800000, // 3 hours ago
    },
    {
        status: 'purchased',
        ownerId: 4,
        productId: 107,
        address: '444 Cedar Ct',
        amount: 55.20,
        createdTime: Date.now() - 777600000, // 9 days ago
        purchasedTime: Date.now() - 14400000, // 4 hours ago
    },
    {
        status: 'canceled',
        ownerId: 2,
        productId: 108,
        address: '555 Maple Dr',
        amount: 33.80,
        createdTime: Date.now() - 864000000, // 10 days ago
        purchasedTime: null,
    },
];