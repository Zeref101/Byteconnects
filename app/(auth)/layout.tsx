import Image from 'next/image';
import React from 'react';
import blogUp from "../../public/blog-listing-up.png";
import blogDown from "../../public/blog-listing-down.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' w-screen h-screen overflow-hidden flex justify-center bg-dot-pattern bg-repeat bg-[#181A2A]'>
            <div className=' w-1/2 p-8 flex justify-center items-center'>

                {children}
            </div>
            <div className=' w-[1000px] ml-2 h-screen flex relative justice-end items-end max-xl:hidden'>
                <Image
                    src={blogUp}
                    alt='blog-up-image'
                    className=' absolute z-10 '
                />
                <Image
                    src={blogDown}
                    alt='blog-down-image'
                    className=' absolute z-0 left-[20%]'
                />
            </div>
        </div>
    )
}

export default Layout
