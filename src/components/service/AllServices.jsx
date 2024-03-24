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

const AllServices = () => {
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
    return (
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[10rem] mt-20">
            <h2 className="lg:md:text-5xl text-2xl font-bold text-[#eee] text-center mb-10">Our All Services</h2>

            <div className="grid lg:md:grid-cols-3 grid-cols-2 lg:md:gap-x-4 gap-x-2 gap-y-5 w-full items-center justify-center">
                {
                    services.map((s, i) => (
                        <div key={i} className='px-4 py-10 border-[2px] border-[#B1B5C3] hover:border-[#1d5641] rounded-3xl'>
                            <div className='text-[#f5f5f5] font-semibold lg:md:text-3xl text-2xl transform transition-transform ease-in-out inline-block p-2 border-[2px] rounded-full'>
                                {iconComponents[s.img] ? createElement(iconComponents[s.img]) : null}
                            </div>
                            <h2 className='text-[#eee] font-semibold lg:md:text-2xl text-xl mb-2'>{s.title}</h2>
                            <small className='text-[#27D294] mb-8'>{s.subCat}</small>
                            <p className='text-[#dedede] lg:md:font-[15px] text-[13px] text-base mt-6'>{s.desc}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default AllServices;