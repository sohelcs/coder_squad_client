import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Appointment = () => {
    const [isOpen, setIsOpen] = useState(false);

    const DynamicPopupModal = dynamic(() => import('react-calendly').then((mod) => mod.PopupModal), {
        ssr: false,
    });

    useEffect(() => {
        // No need to preload in this case
    }, []);

    return (
        <div
        id="contact"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="lg:md:mt-20 mt-16 bg-gradient-to-r from-[#0F192E] to-[#051d42] py-20"
        >
            <div className="flex flex-col items-center justify-center max-w-[1320px] mx-auto lg:md:px-8 px-4">
                <div className="mb-8">
                    <h3 className="text-center font-semibold lg:md:text-4xl text-2xl font-inter">
                        Wanna Collaborate with us?
                    </h3>
                    <p className="text-center font-normal lg:md:text-lg text-[14px] text-[#b7cfe1]">
                       Join Forces for Innovation: Explore Collaboration Opportunities
                    </p>
                </div>
                <div className="mx-auto">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#f5f5f5] text-[#051d42] font-medium lg:md:text-[16px] text-[14px] px-6 py-3 rounded-lg"
                    >
                        Book An Appointment
                    </button>
                    <DynamicPopupModal
                        url="https://calendly.com/afnanferdousi550/30min/book?primary_color=051d42"
                        onModalClose={() => setIsOpen(false)}
                        open={isOpen}
                        rootElement={typeof document === 'undefined' ? null : document.getElementById('__next')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointment;
