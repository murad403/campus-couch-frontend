import profileImage from '@/assets/logo/profile.png';
import Image from 'next/image';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
  return (
    <div className='space-y-4'>
      <p className='text-title text-[20px]'>Account Details</p>
      <div className='flex items-center gap-6'>
        <div className='w-[120px] h-[120px] rounded-full relative flex justify-center items-center p-5 bg-gray-100'>
          <Image src={profileImage} alt='profile iamge' width={500} height={500} />
          <div className='absolute bottom-1 right-2 bg-blue-500 p-1 rounded-full text-white'>
            <label htmlFor='profileImage'>
              <FiEdit />
            </label>
            <input id='profileImage' name='profileImage' type="file" className='hidden' />
          </div>


        </div>
        <div>
          <h2 className='font-bold text-title text-2xl'>Johan Smaith</h2>
          <p className='text-description text-[18px]'>info123@gmail.com</p>
        </div>
      </div>
      <div className='flex gap-4 flex-col md:flex-row'>
        <div className='w-full md:w-1/2 border border-[#F0F0F0] rounded-xl p-4 space-y-4'>
          <div className='flex justify-between'>
            <h2 className='text-[20px] text-title'>Address</h2>
            <button className='bg-blue-500 p-1 rounded-full text-white size-7 flex justify-center items-center'>
              <Link href={'/profile/edit-address'} >
                <FiEdit />
              </Link>
            </button>
          </div>
          <h3 className='text-[18px] text-description'>Johan Smaith</h3>
          <h3 className='text-[18px] text-description'>1388 Market st, suite 400 san fransisco, CA 526 </h3>
        </div>
        <div className='w-full md:w-1/2 border border-[#F0F0F0] rounded-xl p-4 space-y-4'>
          <div className='flex justify-between'>
            <h2 className='text-[20px] text-title'>Shipping Address</h2>
            <button className='bg-blue-500 p-1 rounded-full text-white size-7 flex justify-center items-center'>
              <Link href={'/profile/edit-address'} >
                <FiEdit />
              </Link>
            </button>
          </div>
          <h3 className='text-[18px] text-description'>Johan Smaith</h3>
          <h3 className='text-[18px] text-description'>1388 Market st, suite 400 san fransisco, CA 526 </h3>
        </div>
      </div>
    </div>
  )
}

export default Profile
