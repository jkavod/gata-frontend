import { useState } from 'react'
import './App.css'
import Head from './ui/head/head'
import Body from './ui/body/body'
import Features from './ui/features/features'
import Contact from './ui/contact/contact'
import Footer from './ui/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark text-white'>
      <Head />
      <Body />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
