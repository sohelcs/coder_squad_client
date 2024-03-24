import React from 'react';
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";

const WeOffer = () => {
    return (
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div>
                <h2 className="text-[#FCFCFD] text-center lg:md:text-5xl text-3xl font-semibold leading-[48px] mb-2">Don’t sell your brand short. We can help.</h2>
                <p className="text-[#B1B5C3] text-center lg:md:text-[18px] text-[16px]">From global Enterprises to local brands, we are helping them build, scale, and grow their eCommerce sales.</p>

                <div className="lg:md:mt-28 grid lg:md:grid-cols-2 items-center justify-between w-full gap-x-16 mt-6">
                    <div className="flex items-center gap-x-8">
                        <div className="">
                            <Image
                                src="https://i.ibb.co/MGj1Vdz/image.png"
                                alt="man"
                                width="450"
                                height="200"
                                className="rounded-xl"
                            />
                        </div>
                        <div className=" flex flex-col gap-y-8">
                            <div className="">
                                <Image
                                    src="https://i.ibb.co/NxJdZvC/image.png"
                                    alt="man"
                                    width="350"
                                    height="300"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src="https://i.ibb.co/HTrZjTq/image.png"
                                    alt="man"
                                    width="200"
                                    height="300"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>


                    </div>

                    <div>
                        <h2 className="lg:md:text-5xl text-2xl font-bold text-[#eee]">Full-stack, full-service eCommerce agency</h2>
                        <p className="my-10 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">
                            Are you prepared to launch your online store? Allow our highly-rated team to craft an exceptional Shopify store that boosts conversion rates and delights customers. With comprehensive services, unmatched quality, and cost-effective rates.</p>
                        <ul className="grid gap-y-4">
                            <li className="flex items-center gap-x-4">
                                <FaCheck className="text-[#27D294] text-xl" />
                                <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">eCommerce Strategy</span>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <FaCheck className="text-[#27D294] text-xl" />
                                <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Storefront Design</span>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <FaCheck className="text-[#27D294] text-xl" />
                                <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Custom Development</span>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <FaCheck className="text-[#27D294] text-xl" />
                                <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Headless Commerce</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;