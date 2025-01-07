import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import CakePremix from '../components/CakePremix'
import MuffinPremix from '../components/MuffinPremix'
import DetailsCards from '../components/DetailsCards'
import ChocolateCompounds from '../components/ChocolateCompounds'
import ChocoPaste from '../components/ChocoPaste'
import CocoaReplacer from '../components/CocoaReplacer'
import CocoaSubstitute from '../components/CocoaSubstitute'

const Home = () => {
  return (
   <>
   <Hero />
   <FeaturedProducts />
   <CakePremix />
   <ChocoPaste />
   {/* <MuffinPremix /> */}
   <ChocolateCompounds />
   <DetailsCards />
   <CocoaReplacer />
   <CocoaSubstitute />
   </>
  )
}

export default Home