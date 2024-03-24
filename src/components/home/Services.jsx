import { createElement, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../shared/Loader';
import {
    FaPagelines,
    FaPaintBrush,
    FaServer,
    FaMagento,
    FaLightbulb,
    FaVideo
} from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { IoCodeWorking } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi';
import { AiFillApi } from "react-icons/ai";

const iconComponents = {
    HiOutlineComputerDesktop,
    IoCodeWorking,
    ImMobile,
    FaPagelines,
    FaPaintBrush,
    FaServer,
    FaMagento,
    GrMoney,
    CgWebsite,
    FaLightbulb,
    FaVideo,
    AiFillApi
};

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getServices = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://coder-squad-server.vercel.app/api/v1/service`)
                if (res.status === 200) {
                    console.log(res.data)
                    setServices(res.data?.data)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getServices()
    }, [])
    // console.log(services)
    return (
        <div
            id="services"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="max-w-[1320px] mx-auto lg:md:mt-20 mt-16 lg:md:px-8 px-6 ">
            <div className="pb-10">
                <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">What We Do<span className='text-[#b7cfe1] font-medium'>_</span></h3>
                <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">Tech Expertise Aligned with Your Goals</p>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 lg:md:grid-cols-3 gap-8">
                                {services.map((s) => {
                                    return (
                                        <div key={s._id} className=' px-5 py-4 border-[.75px] border-[#b7cfe1] hover:scale-105 transition-all delay-300 duration-300 rounded-md cursor-pointer hover:shadow-xl ease-in-out relative' style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                                            <div className="badge bg-[#f5f5f5] text-[#333] px-6 py-[10px] right-[-20px] top-[-10px] absolute">{s.category}</div>
                                            <div className='text-[#f5f5f5] font-semibold lg:md:text-3xl text-2xl transform transition-transform ease-in-out inline-block p-2 border-[2px] rounded-full'>
                                                {iconComponents[s.img] ? createElement(iconComponents[s.img]) : null}
                                            </div>
                                            <h2 className='text-[#f5f5f5] font-semibold lg:md:text-xl text-lg'>{s.title}</h2>
                                            <small className='text-[#b7cfe1]'>{s.subCat}</small>
                                            <p className='text-[#dedede] lg:md:font-[15px] text-[14px] text-base mt-6'>{s.desc}</p>

                                        </div>
                                    )
                                })}
                </div>
            )}
        </div>
    );
};

export default Services;