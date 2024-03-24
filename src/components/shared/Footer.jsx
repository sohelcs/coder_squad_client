import React from 'react';
import logo from '../../../public/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:md:mt-20 mt-16 max-w-[1500px] w-full mx-auto lg:md:px-6 px-4">
      <div className='grid lg:md:grid-cols-4 lg:md:gap-y-0 gap-y-10 grid-cols-1 py-10'>
        <div>
          <Image
            src="/logo.svg"
            width={300}
            height={200}
            alt="logo"
            className='h-[100px] object-cover mb-6'
          />
          <p className='mb-10'>We build, launch, and grow eCommerce businesses</p>
          <div className='flex items-center gap-x-6'>
            <Link href="https://www.facebook.com/" className='text-xl text-[#787E91] hover:text-[#27D294]'><FaFacebookF /></Link>
            <Link href="https://www.linkedin.com/" className='text-xl text-[#787E91] hover:text-[#27D294]'><FaLinkedinIn /></Link>
            <Link href="https://twitter.com/" className='text-xl text-[#787E91] hover:text-[#27D294]'><FaTwitter /></Link>
          </div>
        </div>
        <div>
          <h2 className="text-[#eee] text-xl font-semibold mb-6">Quick Links</h2>

          <div className='flex flex-col gap-y-4 text-[16px]'>
            <Link href="/shopify" className='text-[#787E91] hover:underline duration-300 transition-all'>Shopify</Link>
            <Link href="/services" className='text-[#787E91] hover:underline duration-300 transition-all'>Services</Link>
            <Link href="/contact" className='text-[#787E91] hover:underline duration-300 transition-all'>Contact</Link>
            <Link href="/policy" className='text-[#787E91] hover:underline duration-300 transition-all'>Privacy Policy</Link>
          </div>

        </div>
        <div>
          <h2 className="text-[#eee] text-xl font-semibold mb-6">Let’s Talk</h2>

          <div>
            <p className="text-[#787E91] uppercase text-[16px] mb-2">SUPPORT INQUIRIES</p>
            <p className="text-[#eee] text-[16px]">+1 123 456 7890</p>
            <p className="text-[#eee] text-[16px]">codersquadofficial@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-[#eee] text-xl font-semibold mb-6">Office Address</h2>

          <div>
            <p className="text-[#eee] text-[16px]">Level-5, House No : 1332 & 1347</p>
            <p className="text-[#eee] text-[16px]">Main Road, Avenue 2 </p>
            <p className="text-[#eee] text-[16px]">Mirpur DOHS, Dhaka - 1246 </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;