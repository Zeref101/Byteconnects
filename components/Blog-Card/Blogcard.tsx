import Image from 'next/image'
import React from 'react'
import testImage from "../../public/testImage.jpg";
import { Badge } from "@/components/ui/badge"
import pfp from "../../public/pfp.jpg";
import "./style.css"


const Blogcard = () => {
    return (
        <div className=' flex flex-col justify-center items-center w-[400px] p-2 border border-[#242535] rounded-sm card card-inner'>
            <Image src={testImage} alt='t-i' className=' w-full rounded-md shadow-lg' />
            <div className=' w-full flex justify-start items-center gap-2 mt-2.5'>
                <Badge variant="default" className='py-1 px-2.5 rounded-sm bg-[#1b1e34] text-[#425dd5]'>Technology</Badge>
            </div>
            <div className=' w-full flex justify-start items-center gap-2 mt-2.5'>
                <p className=' text-white text-[24px] font-semibold leading-[31.2px] line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum sapiente reiciendis aut minima obcaecati exercitationem assumenda accusamus perferendis deleniti?
                </p>
            </div>
            <div className=' w-full flex gap-3 justify-between items-center mt-2.5'>
                <div className=' flex gap-2'>
                    <Image src={pfp} alt='pfp' width={24} height={24} className=' rounded-full' />
                    <span className=' text-[#97989F] text-[14px] font-normal leading-[19.6px]'>dummy dummyname</span>
                </div>
                <div className=' text-[#97989F] text-[14px] font-normal leading-[19.6px]'>
                    August 20, 2022
                </div>
            </div>



        </div>
    )
}

export default Blogcard
