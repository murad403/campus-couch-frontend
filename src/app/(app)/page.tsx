import React from 'react'
import Banner from './home/Banner'
import Slider from './home/Slider'
import FeaturedItems from './home/FeaturedItems'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <FeaturedItems></FeaturedItems>
    </div>
  )
}

export default page
