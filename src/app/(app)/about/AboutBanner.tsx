import Image from 'next/image'
import aboutBanner from "@/assets/banner/about.png";

const AboutBanner = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>About Us</h1>
        <div className='flex flex-col md:flex-row justify-between pb-4'>
          <h2 className='text-3xl font-medium text-title w-full md:w-[40%]'>Your One-Stop Destination for Buying & Renting Furniture!</h2>
          <p className='text-heading text-[18px] w-full md:w-[40%]'>Finding the right furniture should be easy, affordable, and stress-free. Whether you are looking to buy, rent, or even sell your own furniture, we provide a seamless experience designed especially for students and renters.</p>
        </div>
        <Image src={aboutBanner} alt="about banner" width={1000} className="w-full " height={700}/>
      </div>
  )
}

export default AboutBanner
