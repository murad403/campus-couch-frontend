"use client";
import { resetPasswordValidation } from '@/zod-validation/reset-password.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import z from 'zod';

type TFormData = z.infer<typeof resetPasswordValidation>;

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({
        resolver: zodResolver(resetPasswordValidation)
    });

    const onSubmit = (data: TFormData) => {
        console.log("Form input data", data);
    };
    return (
        <div className='md:w-[40%] w-[90%]'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center font-medium text-heading text-4xl mb-12'>Reset Password</h1>
                <div className='relative'>
                    <label className='block text-[18px] text-title mb-3'>New Password</label>
                    <input placeholder='New Password' {...register("newPassword")} type={showPassword ? "text" : "password"} className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-[55px] text-xl right-4 text-heading">
                        {
                            showPassword ? <LuEye /> : <LuEyeOff />
                        }
                    </div>
                    {errors.newPassword && <p className="text-red-400 text-sm mt-1">{errors.newPassword.message}</p>}
                </div>
                <div className='relative'>
                    <label className='block text-[18px] text-title mb-3'>New Password</label>
                    <input placeholder='New Password' {...register("confirmNewPassword")} type={showConfirmPassword ? "text" : "password"} className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
                    <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-[55px] text-xl right-4 text-heading">
                        {
                            showConfirmPassword ? <LuEye /> : <LuEyeOff />
                        }
                    </div>
                    {errors.confirmNewPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmNewPassword.message}</p>}
                </div>
                <button type='submit' className='bg-button-background rounded-sm cursor-pointer w-full py-3 font-medium'>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword
