import Nav from './components/Nav'
import Hero from "./components/Hero.jsx"
import Product from "./components/Product"
// 👉 AOS imports
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Categories from './components/Categories.jsx'

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    offset: 100,
  })
}, [])

  return (
 <>
 <Nav/>
 <Hero/>
 <Product />
 <Categories />
 </>
  )
}

export default App
