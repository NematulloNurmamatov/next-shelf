'use client';

import React, { useState } from "react";
import Image from "next/image";
import img from '@/images/img.png';
import img2 from '@/images/img2.png';
import img3 from '@/images/img3.png';
import img4 from '@/images/card4.png';
import img5 from '@/images/card5.png';
import img6 from '@/images/card6.png';
import img7 from '@/images/card7.png';

import '@/styles/weed.css'

export default function Weed() {
    const products = [
        {
            name: "Mix And Match Shatter/Budder 28g (4 X 7G)",
            type: "Concentrates",
            rating: 4.4,
            reviews: 135,
            price: "$102.00",
            status: "Out of Stock",
            image: img,
        },
        {
            name: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$80.00",
            status: "Available",
            image: img2,
        },
        {
            name: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$80.00",
            status: "Available",
            image: img3,
        },
        {
            name: "2 Oz Deal Ahi Tuna + Master Tuna",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$120.00",
            status: "Available",
            image: img,
        },
        {
            name: "Mix And Match Shatter/Budder 28g (4 X 7G)",
            type: "Concentrates",
            rating: 4.4,
            reviews: 135,
            price: "$102.00",
            status: "Out of Stock",
            image: img,
        },
        {
            name: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$80.00",
            status: "Available",
            image: img2,
        },
        {
            name: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$80.00",
            status: "Available",
            image: img3,
        },
        {
            name: "2 Oz Deal Ahi Tuna + Master Tuna",
            type: "Flower",
            rating: 4.6,
            reviews: 155,
            price: "$120.00",
            status: "Available",
            image: img2,
        },
    ];

    const [activeFilter, setActiveFilter] = useState(null);

    // Filtrni qo'llash
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filters = [
        'Under $100',
        'Over $100',
        '4 Stars & Up',

    ];

    const filteredProducts = activeFilter
        ? products.filter(product => {
            if (activeFilter === 'Under $100') {
                return parseFloat(product.price.replace('$', '')) < 100;
            }
            if (activeFilter === 'Over $100') {
                return parseFloat(product.price.replace('$', '')) > 100;
            }
            if (activeFilter === '4 Stars & Up') {
                return product.rating >= 4;
            }
            return product.type.toLowerCase() === activeFilter.toLowerCase();
        })
        : products;

    return (
        <div className="weed-container">
            <h1>Choose Your Weed</h1>

            <div className="filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        className={`${activeFilter === filter
                            ? '!bg-green-500 text-white' // Aktiv holatda
                            : 'bg-transparent text-black'
                            } p-2 rounded-md hover:bg-gray-200 transition duration-300`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="products container">
                {filteredProducts.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                            />
                            {product.status === "Out of Stock" && (
                                <div className="out-of-stock">Out of Stock</div>
                            )}
                        </div>
                        <h3>{product.name}</h3>
                        <p>Type: {product.type}</p>
                        <p>
                            Rating: {product.rating} ⭐ ({product.reviews} Reviews)
                        </p>
                        <p>Price: {product.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="relative">
                {/* Yuqoridagi chiqib turadigan div */}
                <div className="container absolute inset-x-0 -top-20 md:-top-28 lg:-top-32 z-50 w-[90%] md:w-[85%] lg:w-[80%] mx-auto p-10 md:p-16 lg:p-20 text-white items-center rounded-lg bg-[#05422C] flex flex-col md:flex-row justify-between shadow-xl">
                    <div className="text-center md:text-start">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">REFER A FRIEND</h1>
                        <p className="text-lg md:text-2xl mt-4 md:mt-8">
                            And get <span className="text-[#F2BC1B] font-semibold">$30!</span>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="bg-[#17AF26] px-8 md:px-14 py-3 md:py-4 rounded-full text-lg shadow-md hover:bg-green-700 transition">
                            Refer Here
                        </button>
                    </div>
                </div>

                {/* Pastdagi asosiy div */}
                <div className="bg-[#01100B] z-0 p-6 md:p-10 mt-28 md:mt-36 pt-40 md:pt-52 text-white">
                    <div className="container">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                            HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
                        </p>
                        <p className="text-[#9D9EA2] text-base md:text-lg">
                            Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <Image src={img4} alt="How to Order" width={500} height={400} className="rounded-lg shadow-lg" />
                            <Image src={img5} alt="How to Order" width={500} height={400} className="rounded-lg shadow-lg" />
                            <Image src={img6} alt="How to Order" width={500} height={400} className="rounded-lg shadow-lg" />
                            <Image src={img7} alt="How to Order" width={500} height={400} className="rounded-lg shadow-lg" />
                        </div>
                        <button className="bg-[#17AF26] px-8 mt-10 py-4 rounded-full">Choose your Weed</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
