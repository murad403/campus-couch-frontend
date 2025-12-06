import Image from 'next/image'
import howItWorks from "@/assets/banner/howitworks.png";
import { TWorkFlow, workFlows } from '@/libs/howItWorks';

const HowItWorks = () => {
    return (
        <div className='bg-gray-50 py-5 md:py-20 px-5 md:px-0'>
            <div className='container mx-auto'>
                <div className='text-center mb-5'>
                    <h1 className='font-semibold text-[40px] text-black'>How It Works</h1>
                    <p className='text-heading text-[18px]'>Simple. Fast. Hassle-Free. Rent or Buy Your Perfect  <br /> Furniture in Just a Few Steps.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>
                    <div className='w-full md:w-1/2'>
                        <Image src={howItWorks} alt='how it works' width={500} height={500} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-5'>
                        {
                            workFlows.map((item: TWorkFlow) =>
                                <div className='flex justify-center items-center flex-col gap-5 text-center bg-white rounded-xl p-10' key={item.id}>
                                    <Image src={item.image} alt={item.title} width={80} height={80}/>
                                    <h2 className='text-[18px] font-medium text-black'>{item.title}</h2>
                                    <p className='text-sm text-heading'>{item.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
