import React from 'react';
import { FiEdit } from 'react-icons/fi';
// Info Card Props Interface
interface InfoCardProps {
    title: string;
    value: string;
}

// Info Card Component
const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
    return (
        <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">{title}</h3>
                    <p className="text-gray-900">{value}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <FiEdit size={16} />
                </button>
            </div>
        </div>
    );
};
export default InfoCard;