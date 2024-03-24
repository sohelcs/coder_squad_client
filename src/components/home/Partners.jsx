import React from 'react';
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";

const Partners = () => {
    const partners = [
        {
            img: "https://i.ibb.co/qWCCBSS/image.png"
        },
        {
            img: "https://i.ibb.co/wRysxx8/image.png"
        },
        {
            img: "https://i.ibb.co/smFZ8TX/image.png"
        },
        {
            img: "https://i.ibb.co/fn34Rf6/work-logo4-2x-15789121a.jpg"
        },
        {
            img: "https://i.ibb.co/cCzHvxg/image.png"
        },
        {
            img: "https://i.ibb.co/LRS0qW8/image.png"
        },
    ]
    return (
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div className="flex items-center gap-x-8 overflow-auto justify-center">
                {partners.map((p, i) => (
                    <Image
                    key={i}
                    src={p.img}
                    width={180}
                    height={180}
                    alt="brand"
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;