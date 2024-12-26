import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const PersonalInformationSection: React.FC = () => {
    const [name, setName] = useState<string>("N/A");
    const [address, setAddress] = useState<string>("N/A");
    const [birth, setBirth] = useState<string>("N/A"); // Adjusted type for easier display formatting

    const authInfo = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        setName(authInfo.user?.name || "N/A");
        setAddress(authInfo.user?.address || "N/A");
        setBirth(authInfo.user?.birthDay ? new Date(authInfo.user.birthDay).toLocaleDateString() : "N/A");
    }, [authInfo]);

    return (
        <div className="flex-1">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">Personal Information</h2>
                <p className="text-gray-600 text-sm">
                    Manage your personal information, including phone numbers and email address where you can be contacted.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <InfoCard title="Name" value={name} />
                <InfoCard title="Date of Birth" value={birth} />
                <InfoCard title="Country Region" value={address} />
                <InfoCard title="Language" value="English" /> {/* Static value */}
                <InfoCard title="Contactable at" value="ikakodesign@gmail.com" /> {/* Static value */}
            </div>
        </div>
    );
};

export default PersonalInformationSection;
