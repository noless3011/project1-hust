
import React from "react";

interface ThumbnailProps {
    src: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src }) => {
    return (
        <div className="relative w-full aspect-square bg-slate-500 overflow-hidden rounded-2xl">
            <img src={src} className="absolute w-full h-full object-contain" />
        </div>
    );
}

export default Thumbnail;