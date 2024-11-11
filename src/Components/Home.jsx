import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import BusinessServices from './BusinessServices'
import Trusted from './Trusted'
import Services1 from './Services1'
import Services2 from './Services2'
import PricingOptions from './PricingOptions'
import RequestForm from './RequestForm'
import CheckVideo from './CheckVideo'
import Testimonials from './Testimonials'
import AboutForm from './AboutForm'
import Footer from './Footer'

export default function Home() {
  return (
   <>
  <Navbar />
    <Header />
    <Trusted/>
    <BusinessServices/>
    <Services1/>
    <Services2/>
    <PricingOptions/>
    <RequestForm />
    <CheckVideo/>
    <Testimonials/>
    <AboutForm/>
    <Footer/>
   </>
  )
}
