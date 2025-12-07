"use client"
import banner from "@/assets/bundles/dining.jpg";
import contactValidation from "@/zod-validation/contact.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import z from "zod";

type TFormData = z.infer<typeof contactValidation>;

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({ resolver: zodResolver(contactValidation) });

    const onSubmit = (data: TFormData) => {
        console.log("contact data", data);
    };

    return (
        <div>
            <div className="relative md:mb-[300px] mb-20">
                <Image src={banner} alt="banner" width={500} height={500} className="w-full md:h-[700px]" />
                <div className="md:absolute md:top-[200px] top-5 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[80%] w-full">
                    <h1 className="text-black md:text-white font-medium text-[48px] text-center md:mb-10 mb-5">Get In Touch With Us. Send Us A Message.</h1>
                    <div className="flex flex-col md:flex-row gap-10 items-center md:p-10 p-5 md:bg-white bg-gray-100 md:rounded-xl shadow-xl">

                        {/* basic contact */}
                        <div className="w-full md:w-[40%] space-y-3 md:space-y-6">
                            <h2 className="font-medium text-[48px] text-black">Contact Us</h2>
                            <div>
                                <h3 className="text-[28px] font-medium text-title mb-2">Cell to us:</h3>
                                <p className="text-heading text-[18px]">We’re available 24/7, 7 days a week.</p>
                                <p className="text-heading text-[18px]">+08 1111 5226</p>
                            </div>
                            <div>
                                <h3 className="text-[28px] font-medium text-title mb-2">Write to Us:</h3>
                                <p className="text-heading text-[18px]">Fill out our form and we will contact you within 24 hours.</p>
                                <p className="text-heading text-[18px]">Email: Support1234@Jaroti</p>
                            </div>
                            <div>
                                <h3 className="text-[28px] font-medium text-title mb-2">Headquarter:</h3>
                                <p className="text-heading text-[18px]">Monday – Friday: 9:00-20:00</p>
                                <p className="text-heading text-[18px]">Saturady: 11:00 – 15:00</p>
                                <p className="text-heading text-[18px]">123 Atlantic, Brooklyn, New York, USA</p>
                            </div>
                        </div>

                        {/* form contact */}
                        <div className="w-full md:w-[60%]  space-y-3 md:space-y-6">
                            <h2 className="font-medium text-[48px] text-black">We would love to hear from you.</h2>
                            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex items-center gap-5">
                                    <div className="w-full">
                                        <label className='block text-[18px] text-title mb-3'>Name</label>
                                        <input placeholder='Name' {...register("name")} type="text" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div className="w-full">
                                        <label className='block text-[18px] text-title mb-3'>Email</label>
                                        <input placeholder='Email address' {...register("email")} type="email" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className='block text-[18px] text-title mb-3'>Subject</label>
                                    <input placeholder='Subject' {...register("subject")} type="text" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                                </div>

                                <div className="w-full">
                                    <label className='block text-[18px] text-title mb-3'>Message</label>

                                    <textarea placeholder='Subject' {...register("message")} className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description'></textarea>
                                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                                </div>

                                <button type='submit' className='bg-button-background rounded-sm cursor-pointer w-full py-3 font-medium'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
