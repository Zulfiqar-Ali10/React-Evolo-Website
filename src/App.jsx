import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import BusinessServices from './Components/BusinessServices'
import Trusted from './Components/Trusted'
import Services1 from './Components/Services1'
import Services2 from './Components/Services2'
import PricingOptions from './Components/PricingOptions'
import RequestForm from './Components/RequestForm'
import CheckVideo from './Components/CheckVideo'
import Testimonials from './Components/Testimonials'
import AboutForm from './Components/AboutForm'
import ContactInformation from './Components/ContactInformation'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

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
    <ContactInformation/>
    <Footer/>


    </>
  )
}

export default App
