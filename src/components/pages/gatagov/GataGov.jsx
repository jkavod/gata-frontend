import React from 'react';
import styles from '../../../style';
import gavel from '../../../assets/gavel.png';
import { motion } from 'framer-motion';

const GataGov = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} flex-col mb-10`}>
        <div className='mt-10'>
          <motion.img
            initial={{ opacity: 0, x: 0 }}
            animate={{ x: 0, opacity: 1, scale: 0.7 }}
            transition={{ duration: 2.5, repeatType: 'mirror' }}
            src={gavel}
            alt='GATA GOVERNANCE'
            className='relative z-[5]'
          />
        </div>
        <div className='mb-5'>
          <h1 className='text-center text-gold font-poppins text-2xl'>
            GGOV - Decentralised Voting Platform
          </h1>
        </div>
        <div className='text-center px-8 lg:px-10'>
          <p className='font-poppins font-normal text-dimWhite'>
            GGov is an innovative decentralized voting platform designed to facilitate
            <br className='hidden lg:block' /> transparent and democratic decision-making within the
            GATA Protocol
            <br className='hidden lg:block' /> community. Operating under a decentralized governance
            structure, GGov
            <br className='hidden lg:block' /> empowers all community members to actively
            participate in shaping the
            <br className='hidden lg:block' /> ecosystem's future. By harnessing blockchain
            technology, GGov ensures that
            <br className='hidden lg:block' /> all voting records are secure, immutable, and
            accessible to community
            <br className='hidden lg:block' /> members, promoting a fair and inclusive governance
            process.{' '}
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8`}>
        <h1 className='text-gold font-poppins text-3xl mb-2'>Governance Structure</h1>
        <p className='font-poppins text-dimWhite mb-10 text-sm'>
          GGov operates as a decentralized autonomous organization (DAO) on the blockchain, ensuring
          that community members hold the reins of decision-making. Here's a glimpse of our
          governance structure.
        </p>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Membership NFTs</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATANow optimizes the shipping process, cutting delivery times, and guaranteeing faster
            and more reliable deliveries for buyers. Decentralized logistics eliminates bottlenecks
            and delays commonly associated with traditional methods.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Proposal Submission</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Members can propose changes to the ecosystem via the GGov platform. To maintain the
            quality of proposals, initial submissions must meet minimum requirements as set by
            community guidelines and are screened and approved by the founding team.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Community Voting</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            In the second phase of governance, the community exercises its power by voting with
            their membership NFTs. Winning proposals must secure at least a 51% majority vote from
            the community members, ensuring decisions reflect the collective will.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>DAO Responsibilities</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            The DAO manages the token supply and rewards distribution, safeguarding the ecosystem's
            stability and incentivizing active participation.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Board Of Directors</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            The community elects a board of directors responsible for the ecosystem's day-to-day
            operations. This leadership team ensures smooth governance and execution of proposals.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>One-Member, One-Vote</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GGov follows a cooperative model, where decisions are made based on the consensus of the
            membership. Every member's vote carries equal weight, fostering inclusivity and
            fairness.
          </p>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>
          Benefits For Community Members
        </h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Empowered Decision Making
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GGov gives every community member a direct say in shaping the GATA Protocol's
              development and decision-making processes. This inclusivity empowers individuals to
              contribute to the growth and success of the ecosystem, creating a sense of ownership
              and shared responsibility.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Transparent And Accountable Governance
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              The decentralized nature of GGov ensures that all voting records are transparent and
              accessible. Community members can verify the fairness and accuracy of voting outcomes,
              reinforcing trust and accountability within the community.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Collaboration And Innovation
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              By providing a platform for proposal submission and discussion, GGov encourages
              collaboration and innovation within the community. Members can contribute ideas,
              provide feedback, and collectively steer the evolution of the GATA Protocol.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8`}>
        <h1 className='text-gold font-poppins text-3xl mb-2'>Participate In Voting</h1>
        <p className='font-poppins text-dimWhite mb-10 text-sm'>
          To actively participate in voting and contribute to the decision-making process within
          GGov, follow these steps.
        </p>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Register</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Create an account on the GGov platform by providing the necessary information, ensuring
            the identification and authentication of community members.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Explore Proposals</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Access the list of proposals submitted by community members. Review the details,
            objectives, and potential impact of each proposal to make informed decisions.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Cast Your Vote</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            After reviewing proposals, cast your vote using the user-friendly GGov interface. Your
            vote will be recorded on the blockchain, ensuring its transparency and immutability.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Engage In Discussions</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Join community discussions related to the proposals. Share your thoughts, opinions, and
            suggestions. Engaging in discussions allows for a deeper understanding of different
            perspectives and fosters collaboration within the community.
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8`}>
        <h1 className='text-gold font-poppins text-3xl mb-2'>Governance Rules</h1>
        <p className='font-poppins text-dimWhite mb-10 text-sm'>
          GGov operates based on the following governance rules and guidelines:
        </p>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Voting Procedures</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Voting procedures are clearly defined and communicated to community members, including
            the duration of voting periods, voting mechanisms, and specific requirements for
            eligible voters.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Quorum Requirements</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GGov establishes quorum requirements to ensure sufficient community engagement and
            representation in decision-making.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Decision-Making Protocols</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Decision-making protocols outline how proposals are evaluated, the criteria for
            acceptance or rejection, and subsequent actions based on the voting outcomes.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-dimWhite font-poppins text-lg'>
            By adhering to these governance rules, GGov promotes a fair, transparent, and effective
            decision-making process within the GATA Protocol community.
          </h1>
        </div>
      </div>
    </section>
  );
};

export { GataGov };
