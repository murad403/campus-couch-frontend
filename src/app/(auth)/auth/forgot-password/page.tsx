"use client";

import forgotPasswordValidation from "@/zod-validation/forgot-password.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

type TFormData = z.infer<typeof forgotPasswordValidation>;

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({
        resolver: zodResolver(forgotPasswordValidation)
    });

    const onSubmit = (data: TFormData) => {
        console.log("Form input data", data);
    };
    return (
        <div className='md:w-[40%] w-[90%]'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center font-medium text-heading text-4xl mb-12'>Forgot Password</h1>
                <div>
                    <label className='block text-[18px] text-title mb-3'>Email Address</label>
                    <input placeholder='Email address' {...register("email")} type="email" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <button type='submit' className='bg-button-background rounded-sm cursor-pointer w-full py-3 font-medium'>Send OTP</button>
            </form>
        </div>
    )
}

export default ForgotPassword
