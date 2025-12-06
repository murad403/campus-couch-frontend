import { bundles, TBundle } from '@/libs/bundles'
import Link from 'next/link'

const Bundles = () => {
    return (
        <div className='container mx-auto px-5 md:px-0'>
            <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>All Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
                {
                    bundles.map((bundle: TBundle) =>
                        <Link key={bundle.id} href={`/bundles/${bundle.id}`} className='relative rounded-lg'>
                            <div className="h-[350px] w-full bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${bundle.image.src})` }}>
                                <div className='h-full w-full bg-gray-400 opacity-55 rounded-lg'></div>
                                <h3 className='text-white font-semibold text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{bundle.title}</h3>
                            </div>

                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Bundles
