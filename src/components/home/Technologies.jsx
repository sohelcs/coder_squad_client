import React from 'react';
const Technologies = () => {
    const technologies = [
        "ReactJs",
        "NextJs",
        "ExpressJs",
        "MongoDB",
        "MySQL",
        "Tailwind",
        "Bootstrap",
        "Mongoose",
        "Typescript",
        "Redux",
        "Prisma",
        "Shopify",
        "BigCommerece",
        "Magento",
        "Figma",
        "AdobeXD"
    ]
    return (
        <div 
        id="#techs"
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-[1320px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-20 mt-16">
            <div className="pb-10">
                <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">Technologies we use<span className='text-[#b7cfe1] font-medium'>_</span></h3>
                <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">Discover the Cutting-Edge Tools and Technologies in Our Arsenal</p>
            </div>
            <div className="grid lg:md:grid-cols-4 grid-cols-3 lg:md:gap-4  gap-2 items-center justify-between pb-6">
                {
                    technologies.map((tech) => (
                        <div key={tech} style={{ background: 'rgba(255, 255, 255, 0.04)' }} className='rounded-lg hover:scale-105 transition-all delay-300 duration-300 cursor-pointer'>
                            <h2 className="lg:md:text-md lg:md:text-[16px] text-[14px] font-montserrat font-medium text-[#fff] p-3 text-center">{tech}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Technologies;