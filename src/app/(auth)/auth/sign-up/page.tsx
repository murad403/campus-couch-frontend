"use client";
import signUpValidation from '@/zod-validation/sign-up.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import z from 'zod';
import { required } from 'zod/v4-mini';

type TFormData = z.infer<typeof signUpValidation>

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({
    resolver: zodResolver(signUpValidation)
  });

  const onSubmit = (data: TFormData) => {
    console.log("Form input data", data);
  };
  return (
    <div className='md:w-[40%] w-[90%]'>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center font-medium text-heading text-4xl mb-12'>Create Account</h1>
        <div>
          <label className='block text-[18px] text-title mb-3'>Name</label>
          <input placeholder='Name' {...register("name")} type="text" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className='block text-[18px] text-title mb-3'>Email</label>
          <input placeholder='Email address' {...register("email")} type="email" className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className='relative'>
          <label className='block text-[18px] text-title mb-3'>Password</label>
          <input placeholder='Password' {...register("password")} type={showPassword ? "text" : "password"} className='appearance-none w-full outline-none border border-heading rounded-sm p-3 text-description' />
          <div onClick={() => setShowPassword(!showPassword)} className="absolute top-[55px] text-xl right-4 text-heading">
            {
              showPassword ? <LuEye /> : <LuEyeOff />
            }
          </div>
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className='space-x-2'>
          <input {...register("termsAndContion")} type="checkbox" />
          <label className='text-[18px] text-title mb-3'>I have read and agree with the terms & condition</label>
          {errors.termsAndContion && <p className="text-red-400 text-sm mt-1">{errors.termsAndContion.message}</p>}
        </div>
        <button type='submit' className='bg-button-background rounded-sm cursor-pointer w-full py-3 font-medium'>Sign Up</button>
      </form>
      <div className='mt-9 text-center'>
        <p className='text-[18px]'>
          <span className='text-description'>Already have account? </span>
          <Link href={"/auth/sign-in"} className='font-semibold underline underline-offset-2 text-heading'>Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
