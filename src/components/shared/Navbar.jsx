import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logo from '../../../public/assets/logo.png';
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
   
    return (
        <div className="max-w-[1500px] w-full mx-auto lg:md:px-8 px-6">
            <div className="flex items-center justify-between bg-transparent py-4">
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={150}
                            height={10}
                            alt="logo"
                            className='h-[50px] object-cover mb-6'
                        />
                    </Link>                                       
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-normal text-[18px]">
                        <li><Link href="/shopify">Shopify</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>                     
                </div>
                <div className="navbar-end lg:md:hidden block text-end">
                    <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content mr-2">
                        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-2xl hover:text-orange transition-colors duration-300">
                            <HiMenuAlt2 />
                        </label>
                    </div>
                    <div className="drawer-side z-[100]">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">

                        </label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className='p-4 ps-6 z-[100] text-[#fff] text-2xl'>
                            <RxCross1 className="text-white text-2xl hover:text-orange transition-colors duration-300" />
                        </label>

                            <ul className="pt-24 menu p-4 w-80 min-h-full bg-[#1A171A] text-[#fff] gap-y-7">
                            <li><Link href="/shopify">Shopify</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;