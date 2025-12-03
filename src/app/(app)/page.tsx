import React from 'react'
import Banner from './home/Banner'
import Slider from './home/Slider'
import FeaturedItems from './home/FeaturedItems'
import DiscoverBundle from './home/DiscoverBundle'
import ConfortZone from './home/ComfortZone'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <FeaturedItems></FeaturedItems>
      <DiscoverBundle></DiscoverBundle>
      <ConfortZone></ConfortZone>
    </div>
  )
}

export default page
