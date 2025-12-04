import { socialLinks, TSocial } from '@/libs/footer'
import Image from 'next/image'
import Link from 'next/link'
import visa from "@/assets/footer/visa.png";
import master from "@/assets/footer/master.png";
import paypal from "@/assets/footer/paypal.png";

const Footer = () => {
  return (
    <footer className='bg-black px-5 md:px-0'>
      <div className='md:py-10 py-5 container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10'>
          <div className='md:space-y-4 space-y-2'>
            <h2 className='font-medium text-2xl text-white'>CONTACT</h2>
            <p className='text-[18px] text-[#E6E6E6]'>Tel: (2359698-485)</p>
            <p className='text-[18px] text-[#E6E6E6]'>Mon - Fri 8am - 8pm</p>
            <p className='text-[18px] text-[#E6E6E6]'>Sat - Sun 8am - 7pm</p>
          </div>
          <div className='md:space-y-4 space-y-2'>
            <h2 className='font-medium text-2xl text-white'>Our Service</h2>
            <p className='text-[18px] text-[#E6E6E6]'>Desk Table</p>
            <p className='text-[18px] text-[#E6E6E6]'>Chair & Table</p>
            <p className='text-[18px] text-[#E6E6E6]'>Room Decor</p>
            <p className='text-[18px] text-[#E6E6E6]'>Sofa</p>
          </div>
          <div className='md:space-y-4 space-y-2'>
            <h2 className='font-medium text-2xl text-white'>ABOUT</h2>
            <p className='text-[18px] text-[#E6E6E6]'>Our Story</p>
            <p className='text-[18px] text-[#E6E6E6]'>Careers</p>
            <p className='text-[18px] text-[#E6E6E6]'>Influencers</p>
            <p className='text-[18px] text-[#E6E6E6]'>Join Our Team</p>
          </div>
          <div className='md:space-y-4 space-y-2'>
            <h2 className='font-medium text-2xl text-white'>CLIENT SERVICE</h2>
            <p className='text-[18px] text-[#E6E6E6]'>Contact Us</p>
            <p className='text-[18px] text-[#E6E6E6]'>Customer Service</p>
            <p className='text-[18px] text-[#E6E6E6]'>Find Store</p>
            <p className='text-[18px] text-[#E6E6E6]'>Shipping & Returns</p>
          </div>
        </div>
        <div className='mt-14 flex justify-between items-center flex-wrap gap-5'>
          <div className='flex items-center gap-3'>
            {
              socialLinks.map((link: TSocial, index: number) =>
                <div key={index}>
                  <Link href={link.link}>
                    <Image src={link.image} alt='social icon' width={32} height={32} />
                  </Link>
                </div>
              )
            }
          </div>
          <p className='text-[18px] text-[#E6E6E6]'>Sitswap. All Rights. Reserved.</p>
          <div className='flex items-center gap-3'>
            <Image src={visa} alt='visa' width={32} height={22} />
            <Image src={master} alt='master' width={32} height={22} />
            <Image src={paypal} alt='paypal' width={32} height={22} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
