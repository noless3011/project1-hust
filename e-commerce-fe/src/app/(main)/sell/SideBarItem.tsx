'use client'; // Mark this component as a client component
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { IconType } from "react-icons/lib";
interface SideBarItemProps {
    children?: React.ReactNode;
    isExpanded: boolean;
    extendable: boolean;
    name: string;
    link: string;
    icon: IconType;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ children, isExpanded, extendable, name, link, icon }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className="flex flex-col"

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="h-4"></div>
            <Link href={link}>
                <div className={`w-full h-12 rounded-md p-2 flex flex-row items-center bg-transparent  hover:bg-gray-200  ${isExpanded ? 'gap-1' : 'gap-0'}`}>
                    {React.createElement(icon, { size: 20 })}
                    <p className={`text-base p-0 m-0 overflow-hidden transition-all  ${isExpanded ? 'duration-100 delay-200 w-[85px]' : 'w-0'}`}>{name}</p>
                    {extendable ? (isExpanded ? (!isHovered ?
                        <AiOutlineCaretRight size={20} /> : <AiOutlineCaretDown size={20} />) : null) : null}

                </div>
            </Link>


            {extendable ? (isHovered ? (<ul className={`space-y-1 flex flex-col gap-2 `}>
                <div className="h-1"></div>
                {children}

            </ul>) : null) : null}

        </li>
    );
};
export default SideBarItem;