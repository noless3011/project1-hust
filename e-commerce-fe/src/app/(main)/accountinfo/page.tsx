"use client"
import React from 'react';
import Sidebar from './Sidebar';
import InfoCard from './InfoCard';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';

const AccountSettings = () => {
    return (
        <Provider store={store}>
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto max-w-screen-lg py-10 px-6">
                {/* Header */}
                <Header></Header>

                {/* Main Content */}
                <div className="flex">
                    {/* Left Sidebar */}
                    <Sidebar></Sidebar>

                    {/* Right Content */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Personal information</h2>
                            <p className="text-gray-600 text-sm">
                                Manage your personal information, including phone numbers and email adress where you can be contacted
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {/* Name */}
                            <InfoCard title="Name" value="Irakli talavadze" />

                            {/* Date of Birth */}
                            <InfoCard title="Date of Birth" value="07 July 1993" />
                            {/* Country Region */}
                            <InfoCard title="Country Region" value="Georgia , Tbilisi" />

                            {/* Language */}
                            <InfoCard title="Language" value="English ( UK ) - English" />
                        </div>

                        {/* Contactable at */}
                        <InfoCard title="Contactable at" value="Something something" />
                    </div>
                </div>
            </div>
        </div>
        </Provider>
    );
};

export default AccountSettings;