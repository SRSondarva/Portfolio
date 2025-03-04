import React from 'react'
import HeroContent from '../sub/HeroContent'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div  className='relative flex flex-col bottom-[250px]'>
        <video
      autoPlay
      muted
      loop
      className='rotate-180 animate-widthExpand w-full h-[80vh] object-cover -z-20'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero