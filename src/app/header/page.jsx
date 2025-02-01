import React from 'react';
import icon from '../../../public/Button.png';
import Image from 'next/image';
export default function Header() {
    return (
        <div>

            <div
                className="relative w-full h-[90vh] flex items-center"
                style={{
                    backgroundImage: `url(./mask.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 container flex flex-col items-start justify-center px-4 md:px-10 text-left">
                    {/* Eng yuqori yozuv */}
                    <p className="text-[#F2BC1B] mb-4 text-sm md:text-base lg:text-lg">BEST SELLER</p>

                    {/* Sarlavha */}
                    <h1 className="text-white font-bold text-[32px] md:text-[44px] lg:text-[54px] w-full md:w-[600px] leading-tight">
                        BEST DISPENSARY TO BUY WEED ONLINE
                    </h1>

                    {/* Tagline */}
                    <p className="text-[#f4f4f4] text-[16px] md:text-[18px] lg:text-[20px] mb-4">
                        Vitamins & Supplements
                    </p>

                    {/* Chegirma va yetkazib berish */}
                    <p className="text-[#f4f4f4] text-[18px] md:text-[20px] lg:text-[22px] mb-4 font-sans">
                        Get 25% off | Free Shipping
                    </p>

                    {/* Tugma */}
                    <button className="mt-4 px-6 py-2 bg-[#17AF26] text-white rounded-3xl w-[150px] md:w-[180px]">
                        Shop All
                    </button>
                </div>
            </div>

            <div className="bg-[#F2F6F4] pt-20 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        {/* Karta 1 */}
                        <div className="flex gap-3 items-start">
                            <Image className="w-[80px] h-[50px] lg:w-[130px] lg:h-[70px]" src={icon} alt="Reliable Shipping Icon" />
                            <div>
                                <h3 className="font-bold text-lg lg:text-2xl">Reliable Shipping</h3>
                                <p className="text-[#717378] text-sm lg:text-[15px]" style={{ lineHeight: "24px" }}>
                                    Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!
                                </p>
                            </div>
                        </div>

                        {/* Karta 2 */}
                        <div className="flex gap-3 items-start">
                            <Image className="w-[80px] h-[50px] lg:w-[130px] lg:h-[70px]" src={icon} alt="Reliable Shipping Icon" />
                            <div>
                                <h3 className="font-bold text-lg lg:text-2xl">Reliable Shipping</h3>
                                <p className="text-[#717378] text-sm lg:text-[15px]" style={{ lineHeight: "24px" }}>
                                    Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!
                                </p>
                            </div>
                        </div>

                        {/* Karta 3 */}
                        <div className="flex gap-3 items-start">
                            <Image className="w-[80px] h-[50px] lg:w-[130px] lg:h-[70px]" src={icon} alt="Reliable Shipping Icon" />
                            <div>
                                <h3 className="font-bold text-lg lg:text-2xl">Reliable Shipping</h3>
                                <p className="text-[#717378] text-sm lg:text-[15px]" style={{ lineHeight: "24px" }}>
                                    Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
