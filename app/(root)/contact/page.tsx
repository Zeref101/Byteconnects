'use client'

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { contactSchema } from '@/lib/validations'
import { Textarea } from "@/components/ui/textarea"
import hero from "../../../public/Hero Image.png"
import Image from 'next/image'

const Page = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            Firstname: "",
            Lastname: "",
            Email: "",
            Message: "",
        },
    })


    function onSubmit(values: z.infer<typeof contactSchema>) {
        console.log(values)
    }
    return (
        <div className='w-full h-full flex justify-center items-center gap-24'>
            <div className='w-[650px] flex flex-col justify-center items-start max-xl:w-[550px] max-xl:items-center max-lg:w-[450px] max-lg:items-center '>
                <div className=' flex flex-col font-inter py-4'>
                    <span className='font-bold text-[64px] text-[#eee]'>Contact us</span>
                    <span className=' text-[#828282] font-normal text-[24px]'>Subheading for description or instructions</span>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <Form {...form} >

                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full pb-4">
                            <div className='flex w-full gap-3 justify-between'>
                                <FormField
                                    control={form.control}
                                    name="Firstname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=' text-[#eee] text-[14px] font-medium leading-[25.2px]'>First Name <span className=' text-red-600'>*</span></FormLabel>
                                            <FormControl>
                                                <Input className=' border-white w-full  bg-transparent  focus:border-none focus:outline-none text-[#eee] placeholder-white' placeholder="Enter your First Name" {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Lastname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=' text-[#eee] text-[14px] font-medium leading-[25.2px]'>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your Last Name"
                                                    className=' border-white bg-transparent w-full focus:border-none focus:outline-none text-[#eee]'

                                                    {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="Email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=' text-[#eee] text-[14px] font-medium leading-[25.2px]'>Email <span className=' text-red-600'>*</span></FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your Email"
                                                className=' border-white bg-transparent focus:border-none focus:outline-none text-[#eee]'
                                                {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=' text-[#eee] text-[14px] font-medium leading-[25.2px]'>Message <span className=' text-red-600'>*</span></FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className='border-white bg-transparent focus:border-none focus:outline-none text-[#eee]' />

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className=' bg-[#9747ff] hover:bg-[#9d55fbbf] font-bold w-full'
                            >Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
            <div>
                <Image
                    src={hero}
                    alt='hero image'
                    className=' w-[450px] max-xl:hidden'
                />
            </div>
        </div>
    )
}

export default Page
