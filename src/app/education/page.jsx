import Image from 'next/image';
import React from 'react';
import education from '@/images/education.png';
import education2 from '@/images/education2.png';
import education3 from '@/images/education3.png';

export default function Education() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-black">WEED EDUCATION</h2>
                <a href="#" className="text-green-600 font-medium hover:underline">Show All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white s://via.placeholder.com/300rounded-lg shadow-md overflow-hidden">
                    <Image
                        src={education}
                        alt="Education 1"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-gray-500 text-sm mb-2">January 24, 2023</p>
                        <h3 className="text-lg font-semibold mb-2">
                            12 Mistakes To Avoid When Buying Cannabis Online
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Buying cannabis online can be a great way to get your hands on the products you need
                            without leaving the comfort of your home. But ...
                        </p>
                        <a href="#" className="text-green-600 font-medium hover:underline">Read More</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image
                        src={education2}
                        alt="Education 2"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-gray-500 text-sm mb-2">January 20, 2023</p>
                        <h3 className="text-lg font-semibold mb-2">
                            How To Store Cannabis and Keep it Fresh and Potent?
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Cannabis packaging has advanced dramatically in recent years, whether your state has a
                            medicinal marijuana programme ...
                        </p>
                        <a href="#" className="text-green-600 font-medium hover:underline">Read More</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image
                        src={education3}
                        alt="Education 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-gray-500 text-sm mb-2">January 19, 2023</p>
                        <h3 className="text-lg font-semibold mb-2">
                            The Ultimate Guide to Checking the Quality of Cannabis - 10 Industry Leading Tips
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Quality cannabis is a term used to describe cannabis products that meet specific standards
                            of excellence. It is essential to ...
                        </p>
                        <a href="#" className="text-green-600 font-medium hover:underline">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
