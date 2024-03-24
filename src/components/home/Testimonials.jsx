import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false)
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
    return (
        <div
            id="#testimonials"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="max-w-[1320px] mx-auto lg:md:mt-20 mt-16 lg:md:px-8 px-6 ">
            <div className="pb-10">
                <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">What our clients think<span className='text-[#b7cfe1] font-medium'>_</span></h3>
                <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">Insights from our Valued Clients: Testimonials and Reviews</p>
            </div>

            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {testimonials.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center  py-6 px-4 h-[70vh] "
                                style={{
                                    background: window.innerWidth > 768 ? `url(/wiggle.svg)` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: "35vw"
                                }}
                            >
                                <div className="avatar pt-28">
                                    <div className="w-24 rounded-full">
                                        <Image src={review.profile} alt={review.name} width={200} height={200} />
                                    </div>
                                </div>
                                <h2 className="text-lg font-semibold text-[#f5f5f5]">{review.name}</h2>
                                <p className="font-normal text-[15px] text-[#f5f5f5] lg:md:w-[30%] pt-8">{review.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;