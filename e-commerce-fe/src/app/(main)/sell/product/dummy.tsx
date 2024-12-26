// data/products.ts
import { CreateProductDto } from '@/api';
import { ProductApi } from '@/app/utils/ApiClient';

const dummy: CreateProductDto[] = [
    {
        "name": "Electronic Gadget 1",
        "description": "A versatile electronic gadget for your everyday needs.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 49.99,
        "discount": 0.05,
        "remaining": 75,
        "soldNumber": 25,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Apples",
        "description": "Crisp and delicious apples, perfect for a healthy snack.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.50,
        "discount": 0,
        "remaining": 120,
        "soldNumber": 50,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Bluetooth Headphones",
        "description": "High-quality Bluetooth headphones for immersive audio experience.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 79.99,
        "discount": 0.10,
        "remaining": 60,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Organic Milk",
        "description": "Fresh and creamy organic milk.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.99,
        "discount": 0,
        "remaining": 90,
        "soldNumber": 35,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Smartwatch",
        "description": "A feature-packed smartwatch to track your fitness and stay connected.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 149.99,
        "discount": 0.02,
        "remaining": 45,
        "soldNumber": 55,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Brown Rice",
        "description": "Nutritious and wholesome brown rice.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.80,
        "discount": 0,
        "remaining": 150,
        "soldNumber": 60,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse for comfortable computing.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 24.50,
        "discount": 0,
        "remaining": 80,
        "soldNumber": 30,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Bananas",
        "description": "Ripe and delicious bananas, a great source of potassium.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 0.99,
        "discount": 0,
        "remaining": 200,
        "soldNumber": 70,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Portable Charger",
        "description": "Compact and powerful portable charger for your devices.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 29.99,
        "discount": 0.08,
        "remaining": 70,
        "soldNumber": 35,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Whole Wheat Bread",
        "description": "Healthy and nutritious whole wheat bread.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.20,
        "discount": 0,
        "remaining": 100,
        "soldNumber": 45,
        "rating": 4.5,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "USB Flash Drive",
        "description": "Reliable USB flash drive for data storage and transfer.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 12.75,
        "discount": 0,
        "remaining": 95,
        "soldNumber": 20,
        "rating": 4.3,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Cheddar Cheese",
        "description": "Sharp and flavorful cheddar cheese.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 4.50,
        "discount": 0.03,
        "remaining": 85,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Keyboard",
        "description": "Comfortable and responsive keyboard for efficient typing.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 35.50,
        "discount": 0,
        "remaining": 65,
        "soldNumber": 28,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Pasta",
        "description": "High-quality pasta for delicious meals.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.50,
        "discount": 0,
        "remaining": 130,
        "soldNumber": 55,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Webcam",
        "description": "High-definition webcam for clear video calls and streaming.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 59.99,
        "discount": 0.12,
        "remaining": 50,
        "soldNumber": 60,
        "rating": 4.8,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Eggs",
        "description": "Fresh and nutritious eggs.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.80,
        "discount": 0,
        "remaining": 110,
        "soldNumber": 50,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Tablet",
        "description": "Powerful tablet for entertainment and productivity.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 299.00,
        "discount": 0.05,
        "remaining": 35,
        "soldNumber": 45,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Tomatoes",
        "description": "Juicy and ripe tomatoes, perfect for salads and cooking.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.00,
        "discount": 0,
        "remaining": 160,
        "soldNumber": 65,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Monitor",
        "description": "High-resolution monitor for crisp and clear visuals.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 179.50,
        "discount": 0.03,
        "remaining": 40,
        "soldNumber": 38,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Potatoes",
        "description": "Versatile and essential potatoes for various dishes.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.20,
        "discount": 0,
        "remaining": 180,
        "soldNumber": 75,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    }, {
        "name": "Electronic Gadget 1",
        "description": "A versatile electronic gadget for your everyday needs.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 49.99,
        "discount": 0.05,
        "remaining": 75,
        "soldNumber": 25,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Apples",
        "description": "Crisp and delicious apples, perfect for a healthy snack.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.50,
        "discount": 0,
        "remaining": 120,
        "soldNumber": 50,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Bluetooth Headphones",
        "description": "High-quality Bluetooth headphones for immersive audio experience.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 79.99,
        "discount": 0.10,
        "remaining": 60,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Organic Milk",
        "description": "Fresh and creamy organic milk.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.99,
        "discount": 0,
        "remaining": 90,
        "soldNumber": 35,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Smartwatch",
        "description": "A feature-packed smartwatch to track your fitness and stay connected.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 149.99,
        "discount": 0.02,
        "remaining": 45,
        "soldNumber": 55,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Brown Rice",
        "description": "Nutritious and wholesome brown rice.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.80,
        "discount": 0,
        "remaining": 150,
        "soldNumber": 60,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse for comfortable computing.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 24.50,
        "discount": 0,
        "remaining": 80,
        "soldNumber": 30,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Bananas",
        "description": "Ripe and delicious bananas, a great source of potassium.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 0.99,
        "discount": 0,
        "remaining": 200,
        "soldNumber": 70,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Portable Charger",
        "description": "Compact and powerful portable charger for your devices.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 29.99,
        "discount": 0.08,
        "remaining": 70,
        "soldNumber": 35,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Whole Wheat Bread",
        "description": "Healthy and nutritious whole wheat bread.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.20,
        "discount": 0,
        "remaining": 100,
        "soldNumber": 45,
        "rating": 4.5,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "USB Flash Drive",
        "description": "Reliable USB flash drive for data storage and transfer.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 12.75,
        "discount": 0,
        "remaining": 95,
        "soldNumber": 20,
        "rating": 4.3,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Cheddar Cheese",
        "description": "Sharp and flavorful cheddar cheese.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 4.50,
        "discount": 0.03,
        "remaining": 85,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Keyboard",
        "description": "Comfortable and responsive keyboard for efficient typing.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 35.50,
        "discount": 0,
        "remaining": 65,
        "soldNumber": 28,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Pasta",
        "description": "High-quality pasta for delicious meals.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.50,
        "discount": 0,
        "remaining": 130,
        "soldNumber": 55,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Webcam",
        "description": "High-definition webcam for clear video calls and streaming.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 59.99,
        "discount": 0.12,
        "remaining": 50,
        "soldNumber": 60,
        "rating": 4.8,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Eggs",
        "description": "Fresh and nutritious eggs.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.80,
        "discount": 0,
        "remaining": 110,
        "soldNumber": 50,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Tablet",
        "description": "Powerful tablet for entertainment and productivity.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 299.00,
        "discount": 0.05,
        "remaining": 35,
        "soldNumber": 45,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Tomatoes",
        "description": "Juicy and ripe tomatoes, perfect for salads and cooking.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.00,
        "discount": 0,
        "remaining": 160,
        "soldNumber": 65,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Monitor",
        "description": "High-resolution monitor for crisp and clear visuals.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 179.50,
        "discount": 0.03,
        "remaining": 40,
        "soldNumber": 38,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Potatoes",
        "description": "Versatile and essential potatoes for various dishes.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.20,
        "discount": 0,
        "remaining": 180,
        "soldNumber": 75,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Running Shoes",
        "description": "Comfortable running shoes for athletes and fitness enthusiasts.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 89.95,
        "discount": 0.15,
        "remaining": 55,
        "soldNumber": 42,
        "rating": 4.7,
        "types": [
            "SportsAndOurDoors"
        ]
    },
    {
        "name": "Coffee Beans",
        "description": "Premium roasted coffee beans for a rich and aromatic brew.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 14.50,
        "discount": 0,
        "remaining": 98,
        "soldNumber": 38,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Digital Camera",
        "description": "High-resolution digital camera for capturing stunning photos and videos.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 499.00,
        "discount": 0.07,
        "remaining": 28,
        "soldNumber": 30,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Green Tea",
        "description": "Healthy and refreshing green tea leaves.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 7.99,
        "discount": 0,
        "remaining": 115,
        "soldNumber": 48,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Gaming Mouse",
        "description": "Precision gaming mouse with customizable buttons and RGB lighting.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 45.00,
        "discount": 0.10,
        "remaining": 62,
        "soldNumber": 50,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Orange Juice",
        "description": "Freshly squeezed orange juice, rich in vitamins.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 4.25,
        "discount": 0,
        "remaining": 88,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "External Hard Drive",
        "description": "High-capacity external hard drive for storing backups and large files.",
        "images": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 85.00,
        "discount": 0.05,
        "remaining": 58,
        "soldNumber": 33,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
];
export const addProduct = async () => {
    for (const product of dummy) {
        const postProductFunc = await ProductApi.productControllerCreate(product);
        try {
            const res = await postProductFunc();
            console.log(`Product "${product.name}" added successfully:`, res);
        } catch (error) {
            console.error(`Error adding product "${product.name}":`, error);
        }
    }
    console.log("Finished adding all products.");
};
