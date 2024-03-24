import React from 'react';
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";

const Migration = () => {
    return (
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div className="grid lg:md:grid-cols-2 w-full items-center justify-center">
                <div>
                    <h2 className="lg:md:text-5xl text-2xl font-bold text-[#eee]">Migrate to Shopify</h2>
                    <p className="my-10 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">Moving your store to a different eCommerce platform? Let us help you with data migration, customizations, API integrations, and much more.</p>
                    <ul className="grid gap-y-4">
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Turn-key migration from Magento, Shopify, +5 other platforms</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Storefront Customizations</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">API & Enterprise Integrations</span>
                        </li>
                    </ul>
                </div>

                <div className='lg:md:block hidden'>
                    <Image
                        src="https://i.ibb.co/6ZpcWKp/image.png"
                        alt="migrate"
                        width={1800}
                        height={1300}
                    />
                </div>
            </div>
        </div>
    );
};

export default Migration;