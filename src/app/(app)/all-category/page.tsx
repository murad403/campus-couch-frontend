import CategoryCard from '@/components/card/CategoryCard'
import { categories, TCategories } from '@/libs/categories'

const AllCategory = () => {
  return (
    <div className='container mx-auto pb-10 px-5 md:px-0'>
      <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>All Category</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {
          categories.map((category: TCategories, index: number) => <CategoryCard key={index} category={category}></CategoryCard>)
        }
      </div>
    </div>
  )
}

export default AllCategory
