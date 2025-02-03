import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-[#0B0F13] text-white mt-[120px]">
            {/* Yashil bo'lim */}
            <div className="absolute -top-32 left-0 right-0 mx-auto bg-[#05422C] text-center rounded-xl py-10 px-6 w-[90%] lg:w-[70%] shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                    UNLOCK 20% OFF YOUR FIRST ORDER
                </h2>
                <p className="mb-6 text-gray-200">Reveal coupon code by entering your email</p>
                <hr className='!bg-gray-700 mb-4' />
                <div className="flex items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full max-w-md px-4 py-3 rounded-full bg-transparent border border-gray-500 text-black outline-none"
                    />
                    <button className="bg-[#17AF26] text-white px-6 py-3 rounded-full font-semibold">
                        Reveal coupon
                    </button>
                </div>
            </div>

            {/* Footer kontenti */}
            <div className="pt-36 pb-10 px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Top Shelf British Columbia</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            #1 Canadian top-rated online dispensary that meets the customers' needs in every single
                            medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian
                            cannabis industry for over 15 years. We strive to provide the top-quality products, service,
                            and care at the lowest prices you'll ever find.
                        </p>
                    </div>

                    {/* Middle + Right columns */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Dynamic list items */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>Track Your Order</li>
                                <li>Shop All</li>
                                <li>Flower</li>
                                <li>Edibles</li>
                                <li>Concentrates</li>
                                <li>Refunds</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>Mushrooms</li>
                                <li>Promotions / Bundles</li>
                                <li>Support</li>
                                <li>Reward</li>
                                <li>Blog</li>
                                <li>Shipping FAQ</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Learn More</h3>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>About Us</li>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Legal Notice</li>
                                <li>Careers</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Our Services</h3>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>Delivery</li>
                                <li>Customer Support</li>
                                <li>Discounts</li>
                                <li>Membership</li>
                                <li>Testimonials</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
