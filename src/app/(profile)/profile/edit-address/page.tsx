"use client"

import { useForm } from "react-hook-form";

type TAddress = {
    address: string;
    shippingAddress: string;
}

const EditAddress = () => {
    const { register, handleSubmit } = useForm<TAddress>();

    const onSubmit = (data: TAddress) => {
        console.log(data);
    }

    return (
        <div>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-[18px] block mb-1">Address</label>
                    <input placeholder="Address" type="text" {...register("address")} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
                </div>
                <div>
                    <label className="text-[18px] block mb-1">Shipping Address</label>
                    <input placeholder="Shipping Address" type="text" {...register("shippingAddress")} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
                </div>
                <button type="submit" className="text-heading text-[18px] font-semibold bg-button-background py-2 px-4">Save Change</button>
            </form>
        </div>
    )
}

export default EditAddress
