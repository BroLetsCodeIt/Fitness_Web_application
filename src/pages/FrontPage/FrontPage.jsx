import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Services from '../../components/Services'
import Static from '../../components/Static'
import Testimonails from '../../components/Testimonails'
import Pricing from '../../components/Pricing'
import ContactUs from '../../components/ContactUs'
const FrontPage = () => {
  return (
    <div>
      <HeroBanner/>
      <Services/>
      <Static/>
      <Testimonails/>
      <Pricing/>
      <ContactUs/>
    </div>
  )
}
export default FrontPage
