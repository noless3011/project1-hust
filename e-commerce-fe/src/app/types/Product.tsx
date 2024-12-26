import { ProductResponseDto } from "@/api";
import { CreateProductDto, CreateProductDtoTypesEnum } from "@/api";
export type ProductStatus = "SoldOut" | "Available" | "ComingSoon"; // Extendable for other statuses

export type ProductType =
    | "Electronic"
    | "Groceries"
    | "Clothing"
    | "HomeAppliances"
    | "Books"
    | "BeautyAndHealth"
    | "SportsAndOurDoors"
    | "ToysAndGames"
    | "Furniture"
    | "Automotive"; // Extendable for other types

interface ProductTypeColors {
    bgColor: string;
    textColor: string;
}
export const productTypeColorMap: Record<ProductType, ProductTypeColors> = {
    Electronic: { bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    Groceries: { bgColor: 'bg-green-100', textColor: 'text-green-800' },
    Clothing: { bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
    HomeAppliances: { bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
    Books: { bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
    BeautyAndHealth: { bgColor: 'bg-pink-100', textColor: 'text-pink-800' },
    SportsAndOurDoors: { bgColor: 'bg-teal-100', textColor: 'text-teal-800' },
    ToysAndGames: { bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
    Furniture: { bgColor: 'bg-gray-100', textColor: 'text-gray-800' },
    Automotive: { bgColor: 'bg-red-100', textColor: 'text-red-800' },
};
export default interface Product {
    id: string;
    created_at: string;
    updated_at: string;
    status: ProductStatus;
    name: string;
    description: string;
    images: string[];
    price: number;
    discount: number;
    rating: number;
    remaining: number;
    soldNumber: number;
    totalLike: number;
    totalReview: number;
    ownerId: number;
    types: ProductType[];
    createdTime: number;
}
export const mapProductResponseToProduct = (
    response: ProductResponseDto
): Product => {
    return {
        id: response.id,
        created_at: response.created_at,
        updated_at: response.updated_at,
        status: response.status as ProductStatus, // Convert to ProductStatus if needed
        name: response.name,
        description: response.description,
        images: response.images,
        price: response.price,
        discount: response.discount,
        rating: response.rating,
        remaining: response.remaining,
        soldNumber: response.soldNumber,
        totalLike: response.totalLike,
        totalReview: response.totalReview,
        ownerId: response.ownerId,
        types: response.types as ProductType[], // Convert to ProductType[] if needed
        createdTime: response.createdTime,
    };
};
export const defaultProduct: Product = {
    id: "",
    created_at: "",
    updated_at: "",
    status: "Available",
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
    createdTime: 0,
};
export const mapProductResponseArrayToProductArray = (
    responses: ProductResponseDto[]
): Product[] => {
    return responses.map(response => mapProductResponseToProduct(response));
};

export function convertProductToCreateProductDto(product: Product): CreateProductDto {
    const createProductDto: CreateProductDto = {
        name: product.name,
        description: product.description,
        images: product.images,
        price: product.price,
        discount: product.discount,
        rating: product.rating,
        soldNumber: product.soldNumber,
        remaining: product.remaining,
        types: product.types.filter((type) =>
            Object.values(CreateProductDtoTypesEnum).includes(
                type as CreateProductDtoTypesEnum
            )
        ) as CreateProductDtoTypesEnum[], // Filter valid types and cast
    };

    return createProductDto;
}