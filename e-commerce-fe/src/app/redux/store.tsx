import { configureStore } from '@reduxjs/toolkit';
import authReducers from './authSlice';
import cartReducers from './cartSlice';
import inspectorReducers from './inspectorSlice';
// Create the store
const store = configureStore({
    reducer: {
        auth: authReducers,
        cart: cartReducers,
        inspector: inspectorReducers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
