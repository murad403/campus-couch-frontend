"use client"
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { profileSidebarItems, TProfileSidebarItem } from '@/libs/profileSidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const ProfileLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathName = usePathname();
    // console.log(pathName)
    return (
        <div>
            {/* navbar */}

            <Navbar></Navbar>
            <main className="container mx-auto md:mb-20 mb-10 px-5 md:px-0 flex gap-6">
                <div className='w-full md:w-[20%] flex flex-col gap-2'>

                    {
                        profileSidebarItems.map((item: TProfileSidebarItem, index: number) =>
                            <Link key={index} className={`text-[20px] text-title font-semibold ${pathName === item.route ? "bg-[#FFC21A]" : "bg-[#F5F5F5]"} w-full p-2`} href={item.route}>{item.label}</Link>
                        )
                    }
                    <button className='text-[20px] text-title font-semibold bg-[#F5F5F5] p-2 text-start'>Logout</button>
                </div>
                <div className='w-full md:w-[80%]'>
                    {children}
                </div>
            </main>
            {/* footer */}
            <Footer></Footer>
        </div>
    )
}

export default ProfileLayout
