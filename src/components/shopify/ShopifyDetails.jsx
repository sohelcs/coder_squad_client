import Image from 'next/image';
import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";

const ShopifyDetails = () => {
    return (
        <div>
            <div className="w-full mx-auto lg:md:ps-[10.5rem] lg:md:pb-[7rem] ">
                <div className="flex items-center relative mx-auto lg:md:px-0 px-4">

                    <div className="w-full lg:md:h-[90vh] h-[80vh] flex items-center justify-center">
                        {/* headers */}
                        <div className="relative z-10 grid lg:md:grid-cols-2 items-center w-full mx-auto justify-center">
                            <div className="text-start lg:md:ps-6">
                                <h2 className="lg:md:text-7xl text-3xl font-bold w-full text-[#EEEEEE] mb-8">Full-stack, full-service Shopify Agency</h2>
                                <p className="max-w-[700px] lg:md:text-xl text-lg text-[#B1B5C3]">We assist you in conceptualizing, building, and expanding your business on Shopify, the premier eCommerce platform, from planning to seamless store deployment.</p>

                                <div className='mt-8'>
                                    <p className="text-[#777e90] uppercase mb-4">SHOPIFY EXPERT</p>

                                    <div className='border-[1px] border-[#777e90] p-4 rounded-lg hover:border-[#ddd] duration-300 transition-all cursor-pointer inline-block'>
                                        <div className='flex gap-x-6 items-center'>
                                            <div className='flex items-center gap-x-2 text-lg text-yellow-500'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                            </div>
                                            <h2 className='text-2xl font-semibold text-[#eee]'>4.8</h2>
                                            <p className='text-[#777e90] text-[16px]'>(20 reviews)</p>
                                        </div>
                                        <p className='text-[#777e90] text-[16px]'>One of the highest rated partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:md:block hidden " >
                                <Image
                                    src="https://i.ibb.co/6ZpcWKp/image.png"
                                    alt="migrate"
                                    width={1600}
                                    height={1300}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ShopifyDetails;