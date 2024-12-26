"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ImageList } from "./ImageList"
import Product from "@/app/types/Product";
interface ProductImagesSliderProps {
    product: Product;
}
const ProductImagesSlider: React.FC<ProductImagesSliderProps> = ({ product }) => {
    const [images, setImages] = useState<Array<string>>([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setImages(product.images)
    }, [product]);
    const nextImage = () => {
        if (currentIndex < images.length) setCurrentIndex(currentIndex + 1);
        else setCurrentIndex(0);
        ImageList.instance.currentIndex = currentIndex;
    }
    const prevImage = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        else setCurrentIndex(images.length - 1);
        ImageList.instance.currentIndex = currentIndex;
    }
    return (
        <div className="relative w-full h-[500px] bg-slate-500 overflow-hidden rounded-2xl">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute w-full h-full object-contain"
            />
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2  w-16 aspect-square bg-slate-300/50 backdrop-blur-3xl rounded-full">
                <BiChevronLeft className="w-full h-full"></BiChevronLeft>
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2  w-16 aspect-square bg-slate-300/50 backdrop-blur-3xl rounded-full">
                <BiChevronRight className="w-full h-full"></BiChevronRight>
            </button>
        </div>

    )
}

export default ProductImagesSlider