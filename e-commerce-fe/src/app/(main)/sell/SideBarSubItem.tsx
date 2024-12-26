import Link from 'next/link';
import React from 'react';
interface SideBarSubItemProps {
    name: string;
    link: string;
}
const SideBarSubItem: React.FC<SideBarSubItemProps> = ({ name, link }) => {
    return (
        <Link href={link}>
            <li className="relative pl-4 text-sm before:absolute before:top-0 before:left-0 before:bottom-0 before:w-[2px] before:bg-gray-400">
                {name}
            </li>
        </Link>
    );
};
export default SideBarSubItem;