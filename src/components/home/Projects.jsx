import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../shared/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const getServices = async () => {
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
        getServices()
    }, [])

     const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Update active index on slide change
    }

    useEffect(() => {
        // Adjust slidesPerView based on screen size
        const handleResize = () => {
            if (window.innerWidth < 640) {
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
        <div
        id="projects"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="max-w-[1320px] mx-auto lg:md:mt-20 mt-16 lg:md:px-8 px-6 ">
            <div className="pb-10">
                <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">Our Projects<span className='text-[#b7cfe1] font-medium'>_</span></h3>
                <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">Embark on a Journey through Our Diverse Portfolio</p>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 lg:md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project._id} className='bg-transparent px-5 py-4 pt-8 border-[2px] border-[#b7cfe1]  transition-all delay-300 duration-300 rounded-md cursor-pointer hover:shadow-xl ease-in-out lg:md:flex  gap-x-4' >
                            <div>
                                <Image src={project.image} alt={project.title} width={400} height={500} />
                            </div>
                            <div className="lg:md:w-[60%] w-full lg:md:pt-0 pt-6">
                                <h2 className='text-[#f5f5f5] font-semibold text-xl'>{project.title}</h2>
                                <p className='text-[#dedede] text-[15px] text-base mt-4 mb-6'>{project.desc}</p>
                                <Link href={project.link} className=' text-[#b7cfe1] font-semibold text-end hover:text-3xl text-2xl flex justify-end  transition-all duration-200 ease-in-out hover:text-[#fffff]'><BsArrowRight /></Link>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;