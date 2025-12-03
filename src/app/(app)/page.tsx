import React from 'react'
import Banner from './home/Banner'
import Slider from './home/Slider'
import FeaturedItems from './home/FeaturedItems'
import DiscoverBundle from './home/DiscoverBundle'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <FeaturedItems></FeaturedItems>
      <DiscoverBundle></DiscoverBundle>
    </div>
  )
}

export default page
