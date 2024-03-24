import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
const Certifications = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-16 mt-0">
            <div className="cert_bg flex lg:md:flex-row flex-col items-center justify-between rounded-xl lg:md:py-12 py-6 lg:md:px-6 px-2">
                <div>
                    <Image
                        width={300}
                        height={200}
                        alt="Shopify"
                        src="https://promomedia.agency/wp-content/uploads/2021/04/shopify-partner-white-MIN.png"
                    />
                </div>
                <div className="lg:md:max-w-[60%] lg:md:text-start text-center">
                    <h3 className="text-[#FCFCFD] lg:md:text-2xl text-lg lg:md:leading-[40px] leading-[30px] ">We’re one of the oldest and highest rated Shopify partner to launch your eCommerce store.</h3>
                </div>
                <div className="lg:md:mt-0 mt-10">
                    <Link href="/contact" className="px-8 lg:md:py-4 py-2 lg:md:text-lg text-[15px] text-[#eee] bg-[#1D1D1D] hover:text-[#1D1D1D] hover:bg-[#eee] duration-200 transtition-all w-full rounded-3xl">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Certifications;