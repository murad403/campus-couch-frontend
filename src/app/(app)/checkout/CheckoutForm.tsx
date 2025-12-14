"use client"
import { useForm, useWatch } from "react-hook-form"

type Inputs = {
  emailOrPhone: string;
  newsAndOffers: boolean;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  savaeInfo: boolean;
}

const CheckoutForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<Inputs>({mode: "onChange"});


  const firstName = useWatch({ control, name: "firstName" });
  const lastName = useWatch({ control, name: "lastName" });
  const emailOrPhone = useWatch({ control, name: "emailOrPhone" });
  const address = useWatch({ control, name: "address" }); 
  const apartment = useWatch({ control, name: "apartment" });
  const city = useWatch({ control, name: "city" });
  const postalCode = useWatch({ control, name: "postalCode" });
  const newsAndOffers = useWatch({ control, name: "newsAndOffers" });
  const savaeInfo = useWatch({ control, name: "savaeInfo" });
  const data = {
    emailOrPhone,
    newsAndOffers,
    firstName,  
    lastName,
    address,
    apartment,
    city,
    postalCode,
    savaeInfo
  }
  console.log(data);


  return (
    <div className="md:px-7">
      <form className="text-title space-y-4">
        <h2 className="font-semibold text-2xl">Checkout</h2>
        <div>
          <label className="text-[18px] block mb-1">Email/Phone</label>
          <input placeholder="email/phone" type="text" {...register("emailOrPhone", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
          {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <input type="checkbox" {...register("newsAndOffers")} />
          <label className="text-[18px] mb-1 ml-2">E-mail me with news & offers</label>
        </div>

        {/* delivery */}
        <h2 className="font-semibold text-2xl">Delivery</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 w-full">
            <label className="text-[18px] block mb-1">First Name</label>
            <input placeholder="First name" type="text" {...register("firstName", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
            {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="md:w-1/2 w-full">
            <label className="text-[18px] block mb-1">Last Name</label>
            <input placeholder="Last name" type="text" {...register("lastName", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
            {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        </div>
        <div>
          <label className="text-[18px] block mb-1">Address</label>
          <input placeholder="Address" type="text" {...register("address", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
          {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="text-[18px] block mb-1">Apartment</label>
          <input placeholder="Apartment, suite, etc, (optional)" type="text" {...register("apartment", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
          {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 w-full">
            <label className="text-[18px] block mb-1">Postal Code</label>
            <input placeholder="Postal Code" type="text" {...register("postalCode", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
            {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="md:w-1/2 w-full">
            <label className="text-[18px] block mb-1">City</label>
            <input placeholder="City" type="text" {...register("city", {required: true})} className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm" />
            {errors.emailOrPhone && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        </div>
        <div>
          <input type="checkbox" {...register("savaeInfo")} />
          <label className="text-[18px] mb-1 ml-2">Save this information for the next time</label>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
