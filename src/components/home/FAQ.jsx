import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FAQ = () => {
    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getFaqs = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://coder-squad-server.vercel.app/api/v1/faq`)
                if (res.status === 200) {
                    console.log(res.data)
                    setFaqs(res.data?.data)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getFaqs()
    }, [])
    return (
        <div
        id="#projects"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="max-w-[1320px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-20 mt-16">
            <div className="pb-10">
                <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">Frequently Asked Questions<span className='text-[#b7cfe1] font-medium'>_</span></h3>
                <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">Your Queries Answered: Explore our Frequently Asked Questions</p>
            </div>
            <div className='flex flex-col gap-y-4'>
                {faqs.map((item, index) => (
                    <div key={index} tabIndex={0} className="collapse collapse-plus rounded-md border-none bg-[#f5f5f5] text-[#051d42]">
                        <div className="collapse-title lg:md:text-xl text-md font-bold">
                            {item.question}
                        </div>
                        <div className="collapse-content lg:md:ps-12 lg:md:text-[16px] text-[14px] text-[#797979]">
                            <p> {item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;