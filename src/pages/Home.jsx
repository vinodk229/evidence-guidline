import React from 'react'
import HeroSection from '../components/HeroSection/HeroSlider'
import AboutUs from '../components/aboutus/AboutUs'
import KeyStatistics from '../components/statics/KeyStatistics'
import VideoSection from '../components/video/VideoSection'
import WhatsNew from '../components/whatsnew/WhatsNew'
const Home = () => {
  return (
    <div>
       <HeroSection />
       <AboutUs />
       <KeyStatistics />
       <VideoSection/>
       <WhatsNew />
    </div>
  )
}

export default Home