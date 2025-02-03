import Image from 'next/image'
import React from 'react'
import second from '@/images/i1.png'
import second2 from '@/images/i2.png'
import second3 from '@/images/i3.png'
import second4 from '@/images/i4.png'
import second5 from '@/images/i5.png'
import second6 from '@/images/i6.png'


export default function Canada() {
    return (
        <div className="container py-16 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-center md:text-left">
                WHAT MAKES US THE <span className="text-[#F2BC1B]">#1</span> <br className="hidden md:block" />
                ONLINE MARIJUANA <br className="hidden md:block" />
                DISPENSARY IN CANADA?
            </h1>
            <p className="text-[#717378] text-base md:text-lg text-center md:text-left leading-relaxed">
                When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax
                lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the
                six prioritized features that we feel make us a cut above the rest.
            </p>

            {/* Rasmlar tarmog'i */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                <Image src={second} alt="Feature 1" className="rounded-lg shadow-lg" />
                <Image src={second2} alt="Feature 2" className="rounded-lg shadow-lg" />
                <Image src={second3} alt="Feature 3" className="rounded-lg shadow-lg" />
                <Image src={second4} alt="Feature 4" className="rounded-lg shadow-lg" />
                <Image src={second5} alt="Feature 5" className="rounded-lg shadow-lg" />
                <Image src={second6} alt="Feature 6" className="rounded-lg shadow-lg" />
            </div>
        </div>

    )
}
