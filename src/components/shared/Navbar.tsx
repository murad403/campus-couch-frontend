"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/assets/logo/logo.png";
import profile from "@/assets/logo/profile.png";
import { navLinks } from '@/libs/navbar';
import { IoCartOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const pathName = usePathname();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const user = false;
    // console.log(pathName)
    return (
        <div className='relative px-5'>
            <div className='py-9 flex justify-between items-center container mx-auto'>
                <Link href={"/"}>
                    <Image loading='eager' src={logo} alt='logo' width={57} height={64} />
                </Link>
                {/* menu */}
                <div className='hidden md:block'>
                    <ul className='flex gap-12 text-[18px] text-title  capitalize'>
                        {
                            navLinks.map(link =>
                                <li className={`hover:border-b-2 hover:border-title transition-all duration-300 ${pathName === link.route ? "border-b-2 border-title" : ""}`} key={link.path}>
                                    <Link href={link.route}>{link.path}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                {/* profile and sidebar */}
                <div>
                    <ul className='flex items-center gap-4'>
                        <li className='border border-description rounded-full p-1'>
                            <Link href={'/cart'}>
                                <IoCartOutline className='text-title' size={24} />
                            </Link>
                        </li>
                        
                        <li className='md:hidden block '>
                            <button onClick={() => setOpenSidebar(true)} className='border border-description rounded-full p-1'>
                                <CgMenuLeftAlt className='text-title' size={24} />
                            </button>
                        </li>
                        {
                            user ?
                                <li className='border border-description rounded-full p-1'>
                                    <Link href={'/profile'}>
                                        <Image loading='eager' src={profile} alt='profile' width={24} height={24} />
                                    </Link>
                                </li> :
                                <li className='bg-button-background py-2 px-5 text-title rounded-sm'>
                                    <Link href={"/auth/sign-in"}>Sign In</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>


            {/* responsive */}
            <div className={`md:hidden ${openSidebar ? "block" : "hidden"} absolute top-0 flex justify-between w-full`}>
                <div className='w-1/2 min-h-screen' onClick={() => setOpenSidebar(false)}>

                </div>
                <div className={`bg-gray-500 w-1/2 min-h-screen p-3 text-gray-300`}>
                    <button onClick={() => setOpenSidebar(false)}>
                        <RxCross2 size={24} />
                    </button>
                    <div>
                        <ul className='space-y-2 text-[18px] capitalize'>
                            {
                                navLinks.map(link =>
                                    <li className={``} key={link.path}>
                                        <Link onClick={() => setOpenSidebar(false)} className={`hover:border-b-2 hover:border-gray-200 transition-all duration-300 ${pathName === link.route ? "border-b-2 border-gray-200" : ""}`} href={link.route}>{link.path}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
