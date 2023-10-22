import React from 'react';
import styles from '../../../style';
import truck from '../../../assets/truck.png';
import { motion } from 'framer-motion';

const GataNow = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} flex-col mb-10`}>
        <div className='mt-10'>
          <motion.img
            initial={{ opacity: 0, x: -400 }}
            animate={{ x: 0, opacity: 1, scale: 0.7 }}
            transition={{ duration: 2.5, repeatType: 'mirror' }}
            src={truck}
            alt='GATA NOW'
            className='relative z-[5]'
          />
        </div>
        <div className='mb-5'>
          <h1 className='text-center text-gold font-poppins text-2xl'>
            GATANOW - Decentralised Logistics
          </h1>
        </div>
        <div className='text-center px-8 lg:px-10'>
          <p className='font-poppins font-normal text-dimWhite'>
            GATANow represents a paradigm shift in the world of logistics and delivery.
            <br className='hidden lg:block' /> Our cutting-edge decentralized platform is
            meticulously designed to
            <br className='hidden lg:block' /> streamline the shipping process, ensuring buyers and
            sellers experience the
            <br className='hidden lg:block' /> utmost efficiency and reliability. Powered by
            blockchain technology, GATANow
            <br className='hidden lg:block' /> redefines traditional logistics, offering a secure
            and efficient solution for
            <br className='hidden lg:block' /> managing shipments and guaranteeing timely
            deliveries.
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8`}>
        <h1 className='text-gold font-poppins text-3xl mb-10'>Features</h1>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Simplified Shipping Process</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATANow leverages self-executing smart contracts, driven by blockchain, to automate and
            enforce shipping terms and conditions. These contracts establish trust and transparency
            among all stakeholders in the logistics process.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Efficient Order Fulfilment</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            We offer real-time tracking of shipments, granting buyers and sellers the ability to
            monitor the progress and location of their goods throughout the delivery journey.
            Visibility and peace of mind are yours at all times.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Automated Inventory Management</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATANow seamlessly integrates automated inventory management, enabling sellers to
            efficiently track stock levels and manage orders. This feature ensures optimal inventory
            control, minimizes stockouts, and enhances overall order fulfillment.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Secure Payment Systems</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Our platform incorporates secure payment systems, safeguarding transactions between
            buyers and sellers. Through blockchain technology, we facilitate fast and secure
            payments, reducing the risk of fraud and disputes.
          </p>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>Benefits For Buyers</h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Faster And More Reliable Deliveries
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GATANow optimizes the shipping process, cutting delivery times, and guaranteeing
              faster and more reliable deliveries for buyers. Decentralized logistics eliminates
              bottlenecks and delays commonly associated with traditional methods.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Improved Shipment Visibility
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Our real-time tracking capabilities empower buyers to monitor shipment progress at any
              time. Enhanced visibility allows buyers to plan accordingly, reducing the likelihood
              of missed deliveries.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Reduced Costs</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GATANow presents cost-saving opportunities for buyers. By eliminating intermediaries
              and streamlining logistics, the platform lowers shipping costs, potentially resulting
              in savings for buyers and broader accessibility to products.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>Benefits For Sellers</h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Simplified Shipping Processes
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GATANow simplifies shipping for sellers, providing a user-friendly platform for
              managing and tracking shipments. Automation and real-time tracking minimize the
              complexities of traditional logistics, saving sellers time and resources.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Efficient Order Fulfilment
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Our automated inventory management enables sellers to streamline order fulfillment.
              Accurate inventory tracking, efficient order management, and timely shipments lead to
              improved customer satisfaction and repeat business.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Enhanced Customer Satisfaction
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Faster deliveries, improved visibility, and reliable logistics enhance customer
              satisfaction for sellers. Meeting customer expectations contributes to positive
              reviews, increased loyalty, and a strong brand reputation.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>
          Benefits For Logistics Partners
        </h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Expanded Business Opportunities
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Joining the GATANow ecosystem opens up new business opportunities for logistics
              partners. Access a network of buyers and sellers, increasing the potential for
              partnerships and collaborations.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Streamlined Operations</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GATANow streamlines logistics operations, reducing manual interventions and optimizing
              routes. Logistics partners can deliver more efficiently and maintain higher service
              quality.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Increased Trust</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Blockchain technology and transparent smart contracts enhance trust between logistics
              partners and clients. Secure and automated transactions build credibility and foster
              long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GataNow };
