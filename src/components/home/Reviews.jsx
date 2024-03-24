import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import Image from 'next/image';

const Reviews = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const getTestimonials = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://coder-squad-server.vercel.app/api/v1/testimonials`)
                if (res.status === 200) {
                    setTestimonials(res.data?.data)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getTestimonials()
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
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div className="mb-24 text-center">
                <p className="text-[#777e90] uppercase mb-4">TESTIMONIAL</p>
                <h2 className="lg:md:text-5xl text-3xl font-bold text-[#eee]">Customers love us, and have great things to say.</h2>
            </div>

            <div className='relative'>
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
                    {testimonials.map((review, i) => (
                        <SwiperSlide key={i} className={`group ${activeIndex === i ? 'active' : ''}`} >
                            <div className='flex flex-col items-start'>
                                <div className="lg:md:p-6 p-3 rounded-full text-[#eee]  to-blue-500  inline-block mb-[-30px] ms-[10px] transition-all bg-gradient-to-br from-teal-400 via-teal-500 hover:to-blue-500 relative z-[100]">
                                    <h2 className='lg:md:text-4xl text-3xl flex items-center justify-start'><FaQuoteLeft /></h2>
                                </div>
                                <div style={{ boxShadow: "-15px 30px 60px rgba(8, 20, 32, 0.2)" }} className={`${activeIndex === i ? 'bg-[#23262F]' : ''} bg-transparent px-6 pb-10 pt-20 duration-300 transition-all cursor-pointer hover:bg-[#23262F] rounded-3xl `}>
                                    <p className='text-[#B1B5C3] lg:md:text-[18px] text-[16px] text-start'>{review.review}</p>
                                    <div className='flex items-center gap-x-4 mt-8'>
                                        <div className="avatar ">
                                            <div className="lg:md:w-16 w-10 rounded-full">
                                                <Image src={review.profile} alt={review.name} width={200} height={200} />
                                            </div>
                                        </div>
                                        <h2 className="lg:md:text-lg text-[16px] font-semibold text-[#fff]">{review.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
