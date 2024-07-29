import React from 'react';
import styles from '../../../style';
import chain from '../../../assets/chains.png';
import { motion } from 'framer-motion';

const GataChain = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} flex-col mb-10`}>
        <div className='mt-10'>
          <motion.img
            initial={{ opacity: 0, x: 0 }}
            animate={{ x: 0, opacity: 1, scale: 0.7 }}
            transition={{ duration: 2.5, repeatType: 'mirror' }}
            src={chain}
            alt='GATA CHAIN'
            className='relative z-[5]'
          />
        </div>
        <div className='mb-5'>
          <h1 className='text-center text-gold font-poppins text-2xl'>
            GATA Chain Blockchain Network
          </h1>
        </div>
        <div className='text-center px-8 lg:px-10'>
          <p className='font-poppins font-normal text-dimWhite'>
            Welcome to GATA Chain: Revolutionising Blockchain Technology
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8 gap-4`}>
        <div>
          <h1 className='text-gold font-poppins text-3xl mb-2'>
            Unlocking the Future of Decentralization
          </h1>
          <p className='font-poppins text-dimWhite mb-10 text-sm'>
            Welcome to the GATA Chain, a groundbreaking innovation in blockchain technology that
            promises to reshape the very foundation of how we interact with data, commerce, and
            value exchange. GATA Chain is not just a blockchain, it's a sophisticated platform
            meticulously designed to redefine the possibilities of decentralized systems.
          </p>
        </div>
        <div>
          <h1 className='text-gold font-poppins text-3xl mb-2'>What is GATA Chain?</h1>
          <p className='font-poppins text-dimWhite mb-10 text-sm'>
            GATA Chain is far from your typical blockchain, it represents a seismic shift in the
            world of distributed ledger technology, empowering individuals and businesses to forge a
            new digital reality. With GATA Chain, you're not just a user; you're a co-creator of
            this digital commerce ecosystem of the future.
          </p>
        </div>
        <div>
          <h1 className='text-gold font-poppins text-3xl mb-2'>The Pillars of GATA Chain</h1>
          <p className='font-poppins text-dimWhite mb-10 text-sm'>
            GATA Chain stands strong on the following foundational pillars:
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8 gap-4`}>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>
            Pioneering Consensus Mechanism: Proof of Interaction (PoI)
          </h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            At the heart of GATA Chain lies our pioneering Proof of Interaction (PoI) consensus
            mechanism. Gone are the days of mindless computations and energy-wasting protocols. PoI
            revolves around meaningful, real-world interactions. It's a consensus mechanism that
            grants validation rights based on the significance of your actions within the ecosystem.
            Whether you're initiating transactions, overseeing logistics processes, or ensuring
            product authenticity, your interactions matter, ensuring fairness and trust.
          </p>
        </div>

        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>PoI Benefits:</h1>
        </div>

        <ul>
          <li>
            <h1 className='text-white font-poppins text-lg'>Fairness and Trust</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              PoI prioritizes meaningful interactions, fostering a sense of fairness and trust among
              participants.
            </p>
          </li>
          <li>
            <h1 className='text-white font-poppins text-lg'>Community Empowerment</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              By actively involving the community in the consensus process, GATA Chain empowers
              participants to contribute and shape the ecosystem.
            </p>
          </li>
          <li>
            <h1 className='text-white font-poppins text-lg'>Transparency and Accountability</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              GATA Chain's decentralized model enhances transparency and accountability, reducing
              the risk of manipulation or centralized control.
            </p>
          </li>
          <li>
            <h1 className='text-white font-poppins text-lg'>Innovation in dCommerce</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Our unique approach to consensus brings true innovation to decentralized commerce,
              providing a platform where interactions matter and trust is inherent.
            </p>
          </li>
        </ul>

        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Designed for dCommerce</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATA Chain is meticulously tailored for the dynamic landscape of decentralized commerce
            (dCommerce). Our blockchain infrastructure boasts a robust data structure, featuring
            blocks for recording interactions, transactions, and smart contracts. These smart
            contracts automate various processes within your ecosystem, from order processing to
            quality control, streamlining your business operations.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Seamless Mobile Node Deployment</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATA Chain takes user-friendliness to another level. Our platform offers a seamless
            mobile node deployment process. With our intuitive mobile wallet, you can effortlessly
            download and set up nodes on your mobile devices. Each node holds a full copy of the
            ledger, ensuring validation of interactions and active participation in the PoI
            consensus process.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Privacy and Data Security</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Your data privacy and security are paramount to us. GATA Chain employs robust measures
            to protect your personal and proprietary information. We've even integrated pseudonymity
            options, allowing you to customise your level of privacy according to your preferences.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>
            Regulatory Compliance and Interoperability
          </h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            For those engaged in international trade, GATA Chain ensures compliance with customs and
            regulatory requirements. We seamlessly connect with your existing software and systems,
            ensuring a harmonious exchange of data.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Community Governance and Education</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATA Chain is more than a technology; it's a thriving community. Our governance model
            places decisions and protocol upgrades in the hands of active participants. We provide
            comprehensive educational resources to ensure everyone can engage effectively.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Dispute Resolution and Data Integrity</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            In the rare event of disputes, our robust mechanisms for dispute resolution guarantee
            fairness and transparency. Furthermore, we've implemented solid data backup and recovery
            solutions, safeguarding your data against unforeseen circumstances.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-gold font-poppins text-3xl mb-2'>Join the GATA Chain Revolution</h1>
          <p className='font-poppins text-dimWhite mb-10 text-sm'>
            Are you ready to embrace the blockchain revolution like never before? GATA Chain, backed
            by the GATA Protocol, is here to empower your dCommerce ecosystem. Say goodbye to
            traditional e-commerce challenges and embrace transparency, trust, empowerment, and
            innovation with GATA Chain. <br />
          </p>
          <p className='font-poppins text-dimWhite mb-10 text-sm'>
            GATA Chain is your gateway to a new era of decentralized possibilities. Get ready to
            change the way you interact with data, commerce, and value exchange. Explore the GATA
            Chain and be a part of the future today.
          </p>
        </div>

        <div>
          <h1 className='text-gold font-poppins text-3xl mb-2'>
            Becoming Part of the GATA Chain Network
          </h1>

          <div className='mb-10'>
            <h1 className='text-white font-poppins text-lg'>Join Us as a Node:</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Joining the GATA Chain network as a node is not just a technological step; it's an
              invitation to be a cornerstone of our decentralized ecosystem. Here's how you can
              become a node:
            </p>
          </div>

          <ul>
            <li>
              <h1 className='text-white font-poppins text-lg'>Download Our Mobile Wallet</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Begin your journey by downloading our user-friendly mobile wallet. This wallet
                serves as your gateway to the network.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Set Up Your Node</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Within the mobile wallet, you'll find an intuitive setup process. Follow the simple
                configuration steps to establish your node. This process enables you to connect to
                the GATA Chain network, participate in the consensus mechanism, and maintain a copy
                of the blockchain ledger.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Active Participation</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                As a node, your role involves validating interactions within the ecosystem. These
                interactions can range from order placements and logistics processes to product
                verification. Your meaningful contributions will be essential in maintaining the
                integrity of the blockchain.
              </p>
            </li>
          </ul>

          <div className='mb-10'>
            <h1 className='text-white font-poppins text-lg'>Who Are the Nodes? What Do They Do?</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Nodes are the backbone of the GATA Chain network. They represent individuals and
              entities who actively participate in the blockchain's operations. Here's a breakdown
              of their role:
            </p>
          </div>

          <ul>
            <li>
              <h1 className='text-white font-poppins text-lg'>Active Participants</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Nodes are actively involved in the blockchain by validating interactions and
                contributing to the consensus mechanism. They ensure that interactions adhere to
                predefined rules and are meaningful to the ecosystem.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Full Ledger Holders</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Every node maintains a complete copy of the blockchain ledger, ensuring transparency
                and redundancy. This allows them to verify and record interactions, adding to the
                blockchain's integrity.{' '}
              </p>
            </li>
          </ul>

          <div className='mb-10'>
            <h1 className='text-white font-poppins text-lg'>Join Us as a Validator</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Becoming a validator is a significant step in influencing the direction of the GATA
              Chain network. As a validator, you'll have a direct say in the blockchain's governance
              and security. Here's how you can become a validator:
            </p>
          </div>

          <ul>
            <li>
              <h1 className='text-white font-poppins text-lg'>Demonstrate Your Commitment</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Validators are selected based on the demonstrated meaningful interactions they've
                had within the ecosystem. These interactions can include order placements, logistics
                management, or product verification. The more you actively participate, the greater
                your chances of becoming a validator.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Periodic Selection</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Validators are chosen periodically from the pool of eligible participants. The
                selection process is based on predefined criteria. This ensures a fair
                representation of the community in the consensus mechanism.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Consensus and Validation</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Validators play a pivotal role in the consensus process. They confirm and record
                interactions within the blockchain, ensuring their authenticity and compliance with
                predefined rules and business logic.
              </p>
            </li>
          </ul>

          <div className='mb-10'>
            <h1 className='text-white font-poppins text-lg'>
              Who Are the Validators? What Do They Do?
            </h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Validators are the guardians of the GATA Chain network, ensuring its security and
              integrity. Here's an overview of their role:
            </p>
          </div>

          <ul>
            <li>
              <h1 className='text-white font-poppins text-lg'>Review and Confirm Interactions</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Validators review incoming interactions to ensure they adhere to predefined rules
                and business logic. This includes verifying digital signatures and executing smart
                contracts correctly.
              </p>
            </li>
            <li>
              <h1 className='text-white font-poppins text-lg'>Consensus Builders</h1>
              <p className='font-poppins text-dimWhite my-3 text-sm'>
                Validators work collectively to reach consensus on the validity of interactions.
                This process ensures that multiple validators agree that an interaction is
                legitimate and adheres to the rules. This consensus-building ensures the
                blockchain's integrity.
              </p>
            </li>
          </ul>

          <div className='mb-10'>
            <h1 className='text-white font-poppins text-lg'>
              How Validators Are Selected and What They Earn:
            </h1>

            <h1 className='text-white font-poppins text-lg'>Selection Process</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Validators are selected periodically based on their demonstrated meaningful
              interactions. This selection is criteria-based, ensuring that active and trustworthy
              participants have a chance to become validators.{' '}
            </p>

            <h1 className='text-white font-poppins text-lg'>Incentives for Validators</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Validators receive incentives for their role in confirming and recording interactions.
              These incentives are paid in $GATA Coin cryptocurrency.{' '}
            </p>

            <h1 className='text-white font-poppins text-lg'>Staking and Collateral</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Validators are required to "stake" a certain amount of the native cryptocurrency as
              collateral. This collateral is at risk if they validate malicious or incorrect
              interactions. Validators earn rewards for honest validation but can lose their stake
              if they misbehave.{' '}
            </p>

            <h1 className='text-white font-poppins text-lg'>Participation in Governance</h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Validators also play a role in the governance of the blockchain, including proposing
              or voting on changes to the blockchain's rules and protocol upgrades.{' '}
            </p>

            <h1 className='text-white font-poppins text-lg'>
              Join Us, Contribute, and Shape the Future of GATA Chain
            </h1>
            <p className='font-poppins text-dimWhite my-3 text-sm'>
              Becoming a node or validator is not just about participating in a blockchain; it's an
              opportunity to actively shape the future of decentralized technology. Join us in this
              journey of empowerment, transparency, and innovation. Explore the GATA Chain and be
              part of the future today.{' '}
            </p>
          </div>

          {/* Blockchain Consensus: How Validators Achieve Consensus */}
        </div>
      </div>
    </section>
  );
};

export { GataChain };
