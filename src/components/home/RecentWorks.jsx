import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const RecentWorks = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const getProjects = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://coder-squad-server.vercel.app/api/v1/projects`)
                if (res.status === 200) {
                    console.log(res.data)
                    setProjects(res.data?.data)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getProjects()
    }, [])

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Update active index on slide change
    }

    useEffect(() => {
        // Adjust slidesPerView based on screen size
        const handleResize = () => {
            if (window.innerWidth < 720) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };
        handleResize(); // Call on component mount
        window.addEventListener('resize', handleResize); // Add event listener for window resize
        return () => window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    }, []);

    return (
        <div className="lg:md:pl-[10.5rem] mx-auto my-auto lg:md:mt-[15rem] mt-20 lg:md:px-6 px-4">
            <div>
                <h2 className="lg:md:text-5xl text-3xl font-bold text-[#eee]">Recent Work</h2>
                <p className="mb-16 mt-4 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">We are trusted by top eCommerce brands across the globe and are constantly transforming eCommerce experiences for millions.</p>

                <div className="">
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i} className={`group ${activeIndex === i ? 'active' : ''}`} >
                                <div className="relative rounded-lg">
                                    <Image
                                        src={project.image}
                                        width={600}
                                        height={700}
                                        alt={project.title}
                                        className="rounded-lg transition-all duration-300 group-hover:filter group-hover:blur-[20px]"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center text-white rounded-lg ps-8 cursor-pointer">
                                        <h3 className="text-3xl mb-6 font-semibold">{project.title}</h3>
                                        <Link href={project.link} className="mt-12 flex items-center text-[#27D294] text-2xl">
                                            <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RecentWorks;