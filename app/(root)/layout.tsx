import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-screen h-screen bg-[#181A2A] '>
            <div className='h-screen flex flex-col justify-center items-center'>
                <Navbar />
                <div className='px-24'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
