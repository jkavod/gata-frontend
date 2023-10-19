import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Home } from './components/pages/landing/Home';
import { DiscoverOurSolutions } from './components/pages/solutions/DiscoverOurSolutions';
import { GataMarket } from './components/pages/gatamarket/GataMarket';
import { GataNow } from './components/pages/gatanow/GataNow';

import styles from './style';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-dark w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`bg-dark fixed top-0 ${styles.boxWidth} z-10`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover-solutions' element={<DiscoverOurSolutions />} />
        <Route path='/gata-market' element={<GataMarket />} />
        <Route path='/gata-now' element={<GataNow />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
