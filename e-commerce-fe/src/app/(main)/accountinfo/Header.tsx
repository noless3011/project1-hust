"use client"
import React from 'react';
import store from '@/app/redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import { logOutWithApi } from '@/app/redux/authSlice'




const Header: React.FC = () => {
    const authDispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const logout = () => {
        authDispatch(logOutWithApi());
    }
    return (
        <Provider store={store}>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-semibold text-gray-800">Nespola Account</h1>
                <button onClick={logout} formMethod='post' className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Sign out
                </button>
            </div>
        </Provider>
    );
};
export default Header;