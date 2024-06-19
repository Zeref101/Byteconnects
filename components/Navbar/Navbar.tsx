import Image from 'next/image'
import React from 'react'
import union from '../../public/Union.png';
import blog from '../../public/Blog.png';
import meta from '../../public/Meta.png';
import { NavbarLinks } from '@/constants';
import Link from 'next/link';
import search from "../../public/search_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import { Input } from '../ui/input';
import moonSVG from "../../public/moon.svg"
import { MoongSVG } from '../MoonSVG';


const Navbar = () => {
    return (
        <div className=' w-[1200px]  flex justify-between  items-center'>
            <div className=' flex justify-center items-center gap-2'>
                <Image
                    src={union}
                    alt='union-logo'
                    width={36}
                    height={36}
                />
                <div className='flex justify-center items-center gap-2'>
                    <Image
                        src={meta}
                        alt='union-logo'
                        width={55.25}
                        height={18.58}
                    />
                    <h1 className=' text-white font-bold text-[24px]'>Bold</h1>

                </div>

            </div>
            <div className=' flex justify-center items-center gap-8'>
                {NavbarLinks.map((link) => {
                    return (
                        <Link
                            href={link.url}
                            key={link.label}
                            className=' text-[18px] w-fit p-2 rounded-md text-white font-medium hover:bg-[#e8e9e95d] hover:border-primary-border drop-shadow-xl'
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
            <div className=' flex gap-3.5 justify-center items-center'>
                <div className="flex overflow-hidden">
                    <div className="relative">
                        <Input type='text' placeholder='Search' className="pl-10 border-[#242535] rounded-xl bg-[#242535] drop-shadow-2xl text-white focus:border-[#242535] ring-offset-[#242535]" />
                        <Image
                            src={search}
                            alt='search-icon'
                            width={24}
                            height={24}
                            className='absolute left-2 top-1/2 transform -translate-y-1/2'
                        />
                    </div>
                </div>
                <div>
                    <label className="switch" htmlFor="switch">
                        <input id="switch" type="checkbox" className="circle" />
                        <MoongSVG />
                        <div className="sun svg">
                            <span className="dot"></span>
                        </div>
                    </label>
                </div>


            </div>
        </div>
    )
}

export default Navbar
