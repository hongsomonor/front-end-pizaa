"use client";

import React, {useEffect, useState} from "react";
import {FaExchangeAlt, FaRegStar, FaSearch, FaShoppingCart, FaStar,} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";
import Image from "next/image";
import {useRouter} from "next/navigation";
import products from "@/app/data/data"; // Adjust the import path as needed

interface Props {
  id: string;
  price: string;
  img: string; // Change 'any' to 'string' as it will be a URL
  title: string;
}

const ProductDetailPage = ({params}: { params: { id: string } }) => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Props | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // 1. បំប្លែង params.id (string) ទៅជាលេខ (number)
        const productId = parseInt(params.id);

        // 2. ពិនិត្យមើលថាតើការបំប្លែងនេះទទួលបានលេខត្រឹមត្រូវដែរឬទេ
        if (isNaN(productId)) {
            router.push("/404");
            return;
        }

        // 3. ស្វែងរកផលិតផលដោយប្រៀបធៀបលេខ ID
        const foundProduct = products.find((p) => p.id === productId);

        // 4. បើរកមិនឃើញ នាំទៅទំព័រ 404
        if (!foundProduct) {
            router.push("/404");
            return;
        }

        setProduct(foundProduct);
        setLoading(false);
    }, [params.id, router]); // បន្ថែម params.id ទៅក្នុង dependency array

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setQuantity(Math.max(1, value));
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen mt-[6rem] bg-gray-50 p-5 flex flex-col items-center">
                <div className="max-w-4xl rounded-lg overflow-hidden flex flex-wrap bg-white shadow-md">
                    <div className="animate-pulse w-full h-96 bg-gray-200"></div>
                </div>
            </div>
        );
    }

    if (!product) {
        return null;
    }

    return (
        <div className="min-h-screen mt-[6rem] bg-gray-50 p-5 flex flex-col items-center">
            <div className="max-w-4xl rounded-lg overflow-hidden flex flex-wrap bg-white shadow-md">
                {/* Product Image Section */}
                <div className="flex-1 p-5 flex justify-center items-center min-w-[300px]">
                    <div className="border border-red-500 p-2.5 relative inline-block">
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="max-w-full h-auto block"
                            priority
                        />
                        <span
                            className="absolute top-0 right-0 bg-white/70 rounded-full p-2 cursor-pointer text-gray-800 flex justify-center items-center">
              <FaSearch className="text-lg"/>
            </span>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="flex-1 p-5 min-w-[320px]">
                    <h1 className="text-red-500 text-2xl mt-0 mb-2.5">{product.title}</h1>

                    <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-1.5 flex items-center gap-1">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaRegStar/>
            </span>
                        <span className="text-gray-600 text-sm">(Customer reviews)</span>
                    </div>

                    <div className="text-red-500 text-2xl font-bold mb-5">
                        ${product.price}
                    </div>

                    <p className="text-gray-800 text-base leading-relaxed mb-5">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                            <button
                                onClick={handleDecrease}
                                className="bg-gray-100 border-none px-3 py-2 cursor-pointer text-base text-gray-800 transition-colors hover:bg-gray-200"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                                className="z-10 py-2 text-center border-l border-r border-gray-300 text-base text-gray-800 w-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                                onClick={handleIncrease}
                                className="bg-gray-100 border-none px-3 py-2 cursor-pointer text-base text-gray-800 transition-colors hover:bg-gray-200"
                            >
                                +
                            </button>
                        </div>

                        <button
                            className="bg-red-500 text-white border-none px-5 py-2.5 rounded cursor-pointer text-base flex items-center gap-2 transition-colors hover:bg-red-700">
                            <FaShoppingCart/> Add to cart
                        </button>

                        <button
                            aria-label="Add to Wishlist"
                            className="bg-red-500 text-white border-none p-2.5 rounded cursor-pointer text-base flex justify-center items-center w-10 h-10 transition-colors hover:bg-red-700"
                        >
                            <FiHeart/>
                        </button>

                        <button
                            aria-label="Compare"
                            className="bg-red-500 text-white border-none p-2.5 rounded cursor-pointer text-base flex justify-center items-center w-10 h-10 transition-colors hover:bg-red-700"
                        >
                            <FaExchangeAlt/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
