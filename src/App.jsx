// import { useState } from 'react'

import Head from './ui/head/head'
// import Body from './ui/body/body'
// import Features from './ui/features/features'
// import Contact from './ui/contact/contact'
// import Footer from './ui/footer/footer'
import Navbar from './components/common/Navbar'
import { Hero } from './components/pages/landing/Hero'
import { Graphics } from './components/pages/landing/Graphics'
import { JoinOurCommunity } from './components/pages/landing/JoinOurCommunity'
import { Features } from './components/pages/landing/Features'
import styles from './style'

function App() {

  return (
    <div className='bg-dark w-full overflow-hidden' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
        <Hero />
        <Graphics />
        {/* Rest of Landing Page */}
        <div className={`bg-dark ${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <JoinOurCommunity />
          </div>
        </div>
        <div className={`bg-dark ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Features />
          </div>
        </div>
    </div>
  )
}

export default App
