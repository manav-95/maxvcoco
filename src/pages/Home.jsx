import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import CakePremix from '../components/CakePremix'
import MuffinPremix from '../components/MuffinPremix'
import DetailsCards from '../components/DetailsCards'
import ChocolateCompounds from '../components/ChocolateCompounds'

const Home = () => {
  return (
   <>
   <Hero />
   <FeaturedProducts />
   <CakePremix />
   {/* <MuffinPremix /> */}
   <ChocolateCompounds />
   <DetailsCards />
   </>
  )
}

export default Home