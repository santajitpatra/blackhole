import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
      <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    //   showArrows={false}
      interval={5000}
      >
        <div>
            <img loading='lazy' src="show.png" alt="" />
        </div>
        <div>
            <img loading='lazy' src="t-shat.png" alt="" />
        </div>
        <div>
            <img loading='lazy' src="camera.png" alt="" />
        </div>        
      </Carousel>
    </div>
  )
}

export default Banner
