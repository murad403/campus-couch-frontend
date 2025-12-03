import Image from 'next/image'
import tranformImage from "@/assets/banner/transform.png";

const Transform = () => {
    return (
        <div className='bg-white p-5 md:p-10'>
            <div className='bg-[#F6FEC6] rounded-[40px] flex flex-col md:flex-row items-center md:justify-between md:pt-0 pt-5'>
                <div className='w-full md:w-1/2 md:pl-10 pl-5'>
                    <h1 className='md:text-[64px] text-[40px] font-semibold text-title'>Transform Your Space with Comfort & Style</h1>
                    <button className='bg-button-background rounded-sm font-semibold py-3 px-5 text-title'>Shop Now</button>
                </div>
                <div  className='w-full md:w-1/2'>
                    <Image src={tranformImage} alt='tranform' width={720} height={500}/>
                </div>
            </div>
        </div>
    )
}

export default Transform
