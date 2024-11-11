import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Pages/Aboutus'
import Services from './Pages/Services'
import Pricing from './Pages/Pricing'
import Request from './Pages/Request'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/request' element={<Request/>} />
    <Route path='/aboutus' element={<AboutUs/>} />
  </Routes>


    </>
  )
}

export default App
