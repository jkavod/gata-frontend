import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Home } from './components/pages/landing/Home';
import { DiscoverOurSolutions } from './components/pages/solutions/DiscoverOurSolutions';
import { GataMarket } from './components/pages/gatamarket/GataMarket';
import { GataNow } from './components/pages/gatanow/GataNow';
import { GataGov } from './components/pages/gatagov/GataGov';
import { GataTechnology } from './components/pages/gatatechnology/GataTechnology';
import { GataCoin } from './components/pages/gatacoin/GataCoin';

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
        <Route path='/gata-governance' element={<GataGov />} />
        <Route path='/gata-technology' element={<GataTechnology />} />
        <Route path='/gata-coin' element={<GataCoin />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
