'use client';
import ProductImagesSlider from "./ProductImagesSlider"
import ProductSideBar from "./ProductSideBar"
import ProductImagePicker from "./ProductImagePicker"
import Product, { mapProductResponseToProduct } from "@/app/types/Product"
import Reviews from "./Reviews"
import ChatButton from "./ChatButton"
import { useEffect, useState } from "react"
import { ProductApi } from "@/app/utils/ApiClient"
import { useParams } from "next/navigation";

export default function ProductPage() {
    const defaultProduct: Product = {
        id: "",
        created_at: "",
        updated_at: "",
        status: "Available", // Replace "draft" with a valid default status from your enum
        name: "",
        description: "",
        images: [],
        price: 0,
        discount: 0,
        rating: 0,
        remaining: 0,
        soldNumber: 0,
        totalLike: 0,
        totalReview: 0,
        ownerId: 0,
        types: [],
        createdTime: 0, // Or Date.now() if you prefer
    };
    const [product, setProduct] = useState<Product>(defaultProduct);
    const params = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const getProductFunc = await ProductApi.productControllerFindByProductId(Number(params.id));
                const response = await getProductFunc();

                setProduct(mapProductResponseToProduct(response.data));
                console.log('fetched product:', Number(params.id));
            } catch (error) {
                console.log("Error while fetching product with id:", params.id, " . Response:", error)
            }
        }
        getProduct();
    }, [])
    return (
        <div className="flex flex-col gap-4 h-fit mt-4 w-4/5 mx-auto">
            <div className="grid grid-cols-[7rem_1.8fr_1fr] gap-4 items-stretch">
                <ProductImagePicker product={product}></ProductImagePicker>
                <ProductImagesSlider product={product}></ProductImagesSlider>
                <ProductSideBar product={product} />
            </div>
            {/* <Recommended></Recommended> */}
            <Reviews></Reviews>
            <ChatButton ownerId={Number(product.id)} />
        </div>
    )
}

