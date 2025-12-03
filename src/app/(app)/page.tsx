import React from 'react'
import Banner from './home/Banner'
import Slider from './home/Slider'
import FeaturedItems from './home/FeaturedItems'
import DiscoverBundle from './home/DiscoverBundle'
import ConfortZone from './home/ComfortZone'
import Feature from './home/Feature'
import Transform from './home/Transform'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <FeaturedItems></FeaturedItems>
      <DiscoverBundle></DiscoverBundle>
      <ConfortZone></ConfortZone>
      <Feature></Feature>
      <Transform></Transform>
    </div>
  )
}

export default page
