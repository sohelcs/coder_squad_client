import React from 'react';
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";


const Mern = () => {
    return (
        <div className="max-w-[1500px] mx-auto my-auto lg:md:mt-[15rem] mt-20 lg:md:px-6 px-4">
            <div className="grid lg:md:grid-cols-2 w-full items-center justify-center">
                <div>
                    <Image
                        src="https://i.ibb.co/tzC68Lt/mern.png"
                        alt="migrate"
                        width={1400}
                        height={1300}
                    />
                </div>
                <div>
                    <h2 className="lg:md:text-5xl text-2xl font-bold text-[#eee]">Upscale your eCommerce with Mern Stack Technology</h2>
                    <p className="my-10 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">Elevate your eCommerce game with MERN Stack Technology. This cutting-edge combination of MongoDB, Express.js, React, and Node.js offers seamless integration, scalability, and rapid development, empowering businesses to create dynamic and user-friendly online platforms.</p>
                    <ul className="grid gap-y-4">
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Seamless Integration</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Scalability and Flexibility</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Rapid Development</span>
                        </li>
                    </ul>
                </div>

                
            </div>
        </div>
    );
};

export default Mern;