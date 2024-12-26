'use client';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Product, { convertProductToCreateProductDto, ProductType } from "@/app/types/Product";
import { useState, useEffect } from "react";
import { ProductApi } from "@/app/utils/ApiClient";
import { setInspectorState } from "@/app/redux/inspectorSlice";

const Inspector = () => {
    const defaultProduct: Product = {
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
    const inspector = useSelector((state: RootState) => state.inspector);
    const [isExpanded, setIsExpanded] = useState(false);
    const [editableProduct, setEditableProduct] = useState<Partial<Product>>({});
    const dispatch = useDispatch();
    // Remove uploading and uploadError states
    // const [uploading, setUploading] = useState(false);
    // const [uploadError, setUploadError] = useState<string | null>(null);
    const [newImageUrl, setNewImageUrl] = useState(''); // State to hold the URL input value

    const fillPartialProduct = (partialProduct: Partial<Product>): Product => {
        return { ...defaultProduct, ...partialProduct };
    };
    useEffect(() => {
        if (inspector.viewProduct) {
            setEditableProduct({
                id: inspector.viewProduct.id,
                name: inspector.viewProduct.name,
                description: inspector.viewProduct.description,
                price: inspector.viewProduct.price,
                discount: inspector.viewProduct.discount,
                remaining: inspector.viewProduct.remaining,
                types: inspector.viewProduct.types,
                images: inspector.viewProduct.images,
            });
        } else {
            setEditableProduct({});
        }
    }, [inspector]);
    useEffect(() => {
        if (inspector.currentState === 'collapsed') {
            setIsExpanded(false);
        } else if (inspector.currentState === 'add') {
            setIsExpanded(true);
        } else if (inspector.currentState === 'edit') {
            setIsExpanded(true);
            setEditableProduct((inspector.viewProduct ? inspector.viewProduct : {}))
        }
    }, [inspector])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'price' || name === 'discount' || name === 'remaining') {
            setEditableProduct(prev => ({ ...prev, [name]: parseFloat(value) }));
        } else if (name === 'types') {
            const selectedOptions: ProductType[] = Array.from((e.target as HTMLSelectElement).selectedOptions, option => option.value as ProductType);
            setEditableProduct(prev => ({ ...prev, [name]: selectedOptions }));
        }
        else {
            setEditableProduct(prev => ({ ...prev, [name]: value }));
        }
    };

    // Remove handleImageUpload function
    // const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = e.target.files;
    //     if (files && files.length > 0) {
    //         setUploading(true);
    //         setUploadError(null);
    //         try {
    //             console.log("file up");
    //             const uploadPromises = Array.from(files).map(async (file) => {
    //                 const uploadFunc = await FileUploadApi.fileUploadControllerUploadSingle(file);
    //                 const res = await uploadFunc();
    //                 console.log("file up promize", res);
    //                 const image = res.data; // Or however your API returns the URL
    //                 const imageUrl = 'https://lucas-digital-market-dev.nysm.work/api/file-upload/' + image.fileName;
    //                 return imageUrl;
    //             });

    //             const uploadedImageUrls = await Promise.all(uploadPromises);

    //             setEditableProduct(prev => ({
    //                 ...prev,
    //                 images: [...(prev.images || []), ...uploadedImageUrls],
    //             }));
    //         } catch (error) {
    //             console.error("Error uploading image:", error);
    //             setUploadError("Failed to upload image. Please try again.");
    //         } finally {
    //             setUploading(false);
    //         }
    //     }
    // };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if (editableProduct !== defaultProduct) {
            if (inspector.currentState === "add") {
                const postProduct = async () => {
                    try {
                        const postProductFunc = await ProductApi.productControllerCreate(convertProductToCreateProductDto(fillPartialProduct(editableProduct)));
                        await postProductFunc();
                    } catch (error) {
                        console.error(`Error adding product "${editableProduct.name}":`, error);
                    }
                }
                postProduct();
                console.log("Post product sent");
                dispatch(setInspectorState('collapsed'));
            }
            if (inspector.currentState === "edit") {
                const postProduct = async () => {
                    try {
                        //Todo: implement the edit API
                    } catch (error) {
                        console.error(`Error adding product "${editableProduct.name}":`, error);
                    }
                }
                postProduct();
                console.log("Post product sent");
                dispatch(setInspectorState('collapsed'));
            }
        }
    };

    const handleRemoveImage = (indexToRemove: number) => {
        setEditableProduct(prev => ({
            ...prev,
            images: prev.images?.filter((_, index) => index !== indexToRemove),
        }));
        // Optionally, you might want to call an API to delete the image from the server
    };

    const handleAddImageUrl = () => {
        if (newImageUrl.trim() !== '') {
            setEditableProduct(prev => ({
                ...prev,
                images: [...(prev.images || []), newImageUrl.trim()],
            }));
            setNewImageUrl(''); // Clear the input after adding
        }
    };

    return (
        <aside
            className={`bg-white h-full flex flex-col gap-4 p-4 transition-all duration-200 ${isExpanded ? 'w-96' : 'w-0'} overflow-hidden`}
        >
            {inspector.currentState === 'collapsed' ? (<h2 className="text-lg font-semibold"></h2>)
                : inspector.currentState === 'edit' ? (< h2 className="text-lg font-semibold">Edit Product</h2>)
                    : (< h2 className="text-lg font-semibold" > Add Product</h2 >)}
            {inspector.currentState === 'collapsed' ? null :
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editableProduct.name || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={editableProduct.description || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={editableProduct.price || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount</label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={editableProduct.discount || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="remaining" className="block text-sm font-medium text-gray-700">Remaining Stock</label>
                        <input
                            type="number"
                            id="remaining"
                            name="remaining"
                            value={editableProduct.remaining || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="types" className="block text-sm font-medium text-gray-700">Types</label>
                        <select
                            id="types"
                            name="types"
                            multiple
                            value={editableProduct.types || []}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="Electronic">Electronic</option>
                            <option value="Clothing">Clothing</option>
                            <option value="HomeAppliance">HomeAppliance</option>
                            {/* Add other product types as needed */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Images</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="text"
                                className="block w-full min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter image URL"
                                value={newImageUrl}
                                onChange={(e) => setNewImageUrl(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handleAddImageUrl}
                                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                Add URL
                            </button>
                        </div>
                        {/* Remove uploading and uploadError display */}
                        {/* {uploading && <p className="text-sm text-gray-500">Uploading...</p>} */}
                        {/* {uploadError && <p className="text-sm text-red-500">{uploadError}</p>} */}
                        <div className="mt-2 flex space-x-2">
                            {editableProduct.images && editableProduct.images.map((imgUrl, index) => (
                                <div key={index} className="relative">
                                    <img src={imgUrl} alt={`Product Image ${index}`} className="w-20 h-20 object-cover rounded" />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-red-500 hover:bg-gray-300"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Save Changes
                        </button>
                    </div>
                </form>}
        </aside>
    );
};
export default Inspector;