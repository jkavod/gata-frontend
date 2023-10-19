import React from 'react'

import { Hero } from './Hero';
import { Graphics } from './Graphics';
import { JoinOurCommunity } from './JoinOurCommunity';
import { Features } from './Features';
import { GataSection } from '../../common/GataSection';
import { GataCoin } from './GataCoin';
import { WhyGata } from './WhyGata';
import { ContactUs } from './ContactUs';

// Section Images
import chains from '../../../assets/chains.png';
import shop from '../../../assets/shop.png';
import truck from '../../../assets/truck.png';
import handshake from '../../../assets/handshake.png';
import gavel from '../../../assets/gavel.png';
import oculus from '../../../assets/oculus.png';

import styles from '../../../style';


const gataSection1 = {
    title1: 'GATACHAIN',
    content1:
      'Experience blockchain tailored for dcommerce, empowering businesses to effortlessly transact, streamline, supply chains and increase profitability through reduced cost and heightened transparency.',
    icon1: chains,
    path1: '/gata-chain',
    title2: 'GATAMARKET',
    content2:
      'Discover new way to securely shop online via a decentralized marketplace for buying, selling products and managing supply chains globally at reduced transaction cost.',
    icon2: shop,
    path2: '/gata-market'
  };
  
  const gataSection2 = {
    title1: 'GATANOW',
    content1:
      'Explore a next decentralized logistics and deliver system that seamlessly bridges sellers to buyers with enhanced efficiency and without the fear of losing goods and money.',
    icon1: truck,
    path1: '/gata-now',
    title2: 'GATA BUSINESS NETWORK',
    content2:
      'Join an exclusive, member-only community that drives the dcommerce ecosystem forward, collaborate, network and govern alongside like-minded businesses.',
    icon2: handshake,
    path2: '/gata-business'
  };
  
  const gataSection3 = {
    title1: 'GGOV: COMMUNITY GOVERNANCE',
    content1:
      'Empower yourself with GGOV, the decentralized application that puts the decision-making power into the hands of the community.',
    icon1: gavel,
    path1: '/gata-governance',
    title2: 'AI, AR, AND VR IN DCOMMERCE',
    content2:
      'Immerse Yourself in Revolutionary Shopping Experiences Powered by AI, AR, and VR Technologies.',
    icon2: oculus,
    path2: '/gata-ai-ar-vr'
  };

const Home = () => {
  return (
    <div>
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
      <div className={`${styles.paddingX} ${styles.flexStart} bg-backfiller bg-no-repeat`}>
        <div className={styles.boxWidth}>
          <GataSection
            title1={gataSection1.title1}
            content1={gataSection1.content1}
            icon1={gataSection1.icon1}
            path1={gataSection1.path1}
            title2={gataSection1.title2}
            content2={gataSection1.content2}
            icon2={gataSection1.icon2}
            path2={gataSection1.path2}
          />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart} bg-backfiller bg-no-repeat`}>
        <div className={styles.boxWidth}>
          <GataSection
            title1={gataSection2.title1}
            content1={gataSection2.content1}
            icon1={gataSection2.icon1}
            path1={gataSection2.path1}
            title2={gataSection2.title2}
            content2={gataSection2.content2}
            icon2={gataSection2.icon2}
            path2={gataSection2.path2}
          />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart} bg-backfiller bg-no-repeat`}>
        <div className={styles.boxWidth}>
          <GataSection
            title1={gataSection3.title1}
            content1={gataSection3.content1}
            icon1={gataSection3.icon1}
            path1={gataSection3.path1}
            title2={gataSection3.title2}
            content2={gataSection3.content2}
            icon2={gataSection3.icon2}
            path2={gataSection3.path2}
          />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <GataCoin />
        </div>
      </div>
      <div className='bg-gold w-full h-20' />
      <div className={`bg-dark ${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <WhyGata />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export { Home }