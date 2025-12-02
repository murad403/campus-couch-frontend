"use client";
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const VerifyOtp = () => {
    const { handleSubmit } = useForm();
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [otpError, setOtpError] = useState<string>("");
    const [timeLeft, setTimeLeft] = useState<number>(30);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;
        setOtp((prev) => {
            const newOtp = [...prev];
            newOtp[index] = value.slice(-1);
            return newOtp;
        });
        setOtpError("");
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const onsubmit = () => {
        const originalOtp = otp.join("");
        const emptyIndex = otp.findIndex(digit => digit === "");
        if (emptyIndex !== -1) {
            setOtpError("OTP must be 6 digits");
            inputRefs.current[emptyIndex]?.focus();
            return;
        }
        console.log("Submitted OTP:", originalOtp);
    };

    const handleResendCode = () => {
        setTimeLeft(30);
    }
    return (
        <div className='md:w-[40%] w-[90%]'>
            <form className='space-y-4' onSubmit={handleSubmit(onsubmit)}>
                <h1 className='text-center font-medium text-heading text-4xl mb-12'>Verify OTP</h1>
                <div className='flex justify-center gap-7 items-center'>
                    {
                        otp.map((_, i) =>
                            <input key={i} className='appearance-none outline-none border border-heading rounded-full size-14 p-2 text-description text-center text-2xl' maxLength={1} type="text" ref={(el) => {
                                inputRefs.current[i] = el;
                            }}

                                onChange={(e) => handleChange(i, e)}
                                onKeyDown={(e) => handleKeyDown(i, e)} />
                        )
                    }
                </div>
                {otpError && (
                    <p className='text-sm text-red-500 mb-4 text-center'>{otpError}</p>
                )}
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-[18px] text-heading'>{`Don't`} receive the code?</p>
                    {
                        timeLeft > 0 ?
                            <p className='text-[16px] text-description'>Resend in {timeLeft}s</p> :
                            <button
                                type="button"
                                onClick={handleResendCode}
                                className='font-medium text-[16px] text-main cursor-pointer'
                            >
                                Resend
                            </button>
                    }

                </div>
                <button type='submit' className='bg-button-background rounded-sm cursor-pointer w-full py-3 font-medium'>Verify OTP</button>
            </form>
        </div>
    )
}

export default VerifyOtp
