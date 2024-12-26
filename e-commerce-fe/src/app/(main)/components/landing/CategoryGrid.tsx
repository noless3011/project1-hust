import { ReactNode } from "react";

interface CategoryGridProps {
    children: ReactNode;
}

const CategoryGrid = ({ children }: CategoryGridProps) => {
    return (<div className="w-2/3 min-w-fit h-fit grid grid-cols-6 gap-4 shadow-md rounded-3xl bg-slate-100 place-items-center p-4">
        {children}
    </div>)

}

export default CategoryGrid;