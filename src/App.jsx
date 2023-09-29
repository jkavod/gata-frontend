// import { useState } from 'react'

import Head from './ui/head/head'
// import Body from './ui/body/body'
// import Features from './ui/features/features'
// import Contact from './ui/contact/contact'
// import Footer from './ui/footer/footer'
import Navbar from './components/common/Navbar'
import styles from './style'

function App() {

  return (
    <div className='bg-dark w-full overflow-hidden' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App
