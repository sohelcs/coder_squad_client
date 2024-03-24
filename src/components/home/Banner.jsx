import React from 'react';
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="w-full mx-auto lg:md:ps-[10.5rem] lg:md:pb-[7rem] sm:bg-cover"
            // url("https://i.ibb.co/hymWn2n/image.png") left -205px top -255px no-repeat
            style={{ background: "url('https://i.ibb.co/hymWn2n/image.png') no-repeat left -205px top -165px" }}
        >
            <div className="flex items-center relative mx-auto lg:md:px-0 px-4">

                <div className="w-full lg:md:h-[90vh] h-[80vh] flex items-center justify-center">
                    {/* headers */}
                    <div className="relative z-10 grid lg:md:grid-cols-2 items-center w-full mx-auto justify-center">
                        <div className="text-start lg:md:ps-6">
                            <h2 className="lg:md:text-7xl text-3xl font-bold w-full text-[#EEEEEE] mb-8">We build innovative, creative business solutions</h2>
                            <p className="max-w-[700px] lg:md:text-xl text-lg text-[#B1B5C3]">We are a comprehensive eCommerce firm. Since 2020, we&apos;ve assisted numerous brands in launching prosperous platforms on Shopify, BigCommerece, Magento. Let us assist you as well!</p>
                        </div>
                        <div className="lg:md:block hidden " >
                            <Image
                                width={1800}
                                height={1300}
                                alt="mockup"
                                className=""
                                src="https://i.ibb.co/74NSHWP/image.png"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;