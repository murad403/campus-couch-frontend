import { TCategories } from '@/libs/categories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({category}: {category: TCategories}) => {
    return (
        <Link href={'/category'} className='bg-common-background flex flex-col justify-center items-center gap-2 p-5'>
            <Image src={category.image} alt={category.title} width={220} height={220} />
            <h2 className="text-lg font-bold text-slate-900 capitalize">{category.title}</h2>
        </Link>
    )
}

export default CategoryCard
