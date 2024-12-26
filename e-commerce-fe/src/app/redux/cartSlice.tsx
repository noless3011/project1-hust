import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Order from '../types/Order';

interface CartState {
    orders: Order[];
}

const initialState: CartState = {
    orders: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        },
        removeOrder: (state, action: PayloadAction<number>) => {
            state.orders = state.orders.filter(order => order.productId !== action.payload);
        },
        updateOrderStatus: (state, action: PayloadAction<{ productId: number, status: Order['status'] }>) => {
            const order = state.orders.find(order => order.productId === action.payload.productId);
            if (order) {
                order.status = action.payload.status;
            }
        },
    },
});

export const { addOrder, removeOrder, updateOrderStatus } = cartSlice.actions;

export default cartSlice.reducer;