import Link from 'next/link'
import "./discoverBundle.css"
import { IoAdd } from 'react-icons/io5';

const DiscoverBundle = () => {
    return (
        <div className='bg-common-background md:p-10 p-5'>
            <div className='flex justify-between items-center mb-12'>
                <h2 className='font-semibold text-4xl text-black'>Discover the Perfect Furniture <br /> Bundle for Your Space</h2>
                <Link className='bg-button-background py-3 px-5 flex items-center rounded-sm text-title' href={'/add-bundle'}>
                    <IoAdd size={24} />
                    <span className='font-medium'>Bundles</span>
                </Link>
            </div>

            <div className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bgImage1 h-80 w-full rounded-sm relative'>
                        <div className='h-full w-full bg-gray-400 opacity-55'></div>
                        <h3 className='text-white font-semibold text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Living Room</h3>
                    </div>
                    <div className='bgImage2 h-80 w-full rounded-sm relative'>
                        <div className='h-full w-full bg-gray-400 opacity-55'></div>
                        <h3 className='text-white font-semibold text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Bed Room</h3>
                    </div>
                </div>
                <div className='bgImage3 h-[540px] w-full rounded-sm relative'>
                    <div className='h-full w-full bg-gray-400 opacity-55'></div>
                    <h3 className='text-white font-semibold text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Dining Room</h3>
                </div>
            </div>
        </div>
    )
}

export default DiscoverBundle
