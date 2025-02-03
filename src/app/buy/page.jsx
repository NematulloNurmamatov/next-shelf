import Image from 'next/image';
import React from 'react';
import card from '@/images/card.png';

export default function Buy() {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-black text-center mb-8">
                BEST DISPENSARY TO BUY <br /> WEED ONLINE IN CANADA
            </h1>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 transition-all">
                {/* Karta */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative bg-white text-black rounded-2xl p-4 flex flex-col justify-center items-center hover:bg-green-900 hover:text-white transition-all duration-100 ease-in-out group"
                    >
                        <Image
                            src={card}
                            alt={`Product ${index + 1}`}
                            className="rounded-xl mb-4 transition-all duration-3000 ease-in-out"
                        />
                        <div className="text-center group-hover:hidden transition-all">
                            {/* Faqat hoverdan oldingi kontent */}
                            <h3 className="text-lg font-semibold">
                                {index === 0
                                    ? "Shop our Best Sellers"
                                    : `Product Title ${index + 1}`}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {index === 0 ? "Flower" : "Category"}
                            </p>
                            <p className="font-bold text-green-600">
                                {index === 0 ? "$80.00 / gram" : `$${80 + index * 20}.00`}
                            </p>
                            <button className='bg-green-600 mt-4 px-4 py-2 text-white rounded-lg'>Add to Card</button>
                        </div>

                        {/* Hover kontent */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all">
                            <h2 className="text-xl font-bold">Shop our Best Sellers</h2>
                            <p className="text-sm mt-2">
                                Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum
                                varius lorem blandit lectus magnas feugiat.
                            </p>
                            <a
                                href="#"
                                className="text-green-300 mt-4 underline"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
