import React from 'react'
import HomeSlider from './HomeSlider'
import FeatureSlides from './FeatureSlides'
import Highlights from './Highlights'

const HomeMain = () => {
  return (
    <div className=' h-[1000vh]'>
        <HomeSlider/>
        <FeatureSlides/>
        <Highlights/>
    </div>
  )
}

export default HomeMain