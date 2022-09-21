import React from 'react'
import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
// import Stats from '../components/section/Stats'
// import { PagesHeader } from './../components/section/PagesHeader';
import CTA from '../components/section/CTA'



const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      <WhatWeDo />
      <CTA />


      {/* <PagesHeader /> */}
      {/*  <Stats /> */}
      {/* <Hero /> */}





      <Footer />
    </div>
  )
}

export default Home