import Image from 'next/image';
import React from 'react';
import man from '@/images/man.png';
import '@/styles/scroll.css';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Vikki Starr",
            review: "Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.",
            date: "January 15, 2023"
        },
        {
            id: 2,
            name: "Terry Baskey",
            review: "Best damn place to buy your cannabis at great prices.",
            date: "January 5, 2023"
        },
        {
            id: 3,
            name: "Terry Baskey",
            review: "Best damn place to buy your cannabis at great prices.",
            date: "January 5, 2023"
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-8">Customer Testimonials</h2>
            <div className="flex space-x-6 overflow-x-auto custom-scrollbar"> {/* custom-scrollbar qo'shildi */}
                {/* Yashil ma'lumotlar kartasi */}
                <div className="bg-[#05422C] text-white p-6 rounded-lg shadow-md flex-none w-80">
                    <h3 className="text-lg font-semibold">VOTED BEST ONLINE DISPENSARY IN CANADA</h3>
                    <p className="mt-2">Google</p>
                    <div className="mt-4 flex items-center">
                        <div className="text-yellow-400 flex space-x-1">
                            {Array(5).fill().map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <span className="ml-2">on 135 Reviews</span>
                    </div>
                </div>

                {/* Sharhlar */}
                <div className="flex space-x-6"> {/* Gorizontal joylashish */}
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white text-black p-6 rounded-lg shadow-md border hover:bg-[#05422C] hover:text-white transition duration-300 flex-none w-80"
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <Image src={man} alt="Testimonial" />
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                            </div>
                            <hr />
                            <p className="mt-2">{testimonial.review}</p>
                            <small className="block mt-4 text-sm">{testimonial.date}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
