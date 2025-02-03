'use client';

import React, { useState } from "react";
import Image from "next/image";
import img from '@/images/img.png';
import img2 from '@/images/img2.png';
import img3 from '@/images/img3.png';
import box from '@/images/Box.png';

import '@/styles/weed.css'

export default function Recently() {
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
        <div className="weed-container mt-20">
            <h1 className="text-3xl font-bold">RECENTLY ADDED</h1>

            <div className="filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        className={`${activeFilter === filter
                            ? '!bg-green-500 text-white !rounded-full' // Aktiv holatda
                            : 'bg-transparent text-black !rounded-full'
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
            <hr className="h-1 w-[90%] lg:w-[80%] max-w-[1440px] mx-auto bg-[#cfcfcf] rounded-full border-0" />

            <br /><br />
            <div className=" container grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
                <Image src={box} alt="alt" className="w-[350px] h-auto rounded-lg shadow-lg" />
                <Image src={box} alt="alt" className="w-[350px] h-auto rounded-lg shadow-lg" />
                <Image src={box} alt="alt" className="w-[350px] h-auto rounded-lg shadow-lg" />
            </div>

        </div>
    );
}
