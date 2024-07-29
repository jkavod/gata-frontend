import React from 'react';

const EconomyMenu = () => {
  return (
    <div className='border-solid border-white p-4 rounded-lg w-[400px]'>
      <div className='flex justify-between'>
        <p>GATACHAIN(Beta Testing)</p>
        <details>
          <summary>GATAMARKET</summary>
          <ul>
            <li>Browse Products</li>
            <li>Sell On Market Place</li>
          </ul>
        </details>
      </div>
      <div className='flex justify-between'>
        <p>GATANow</p>
        <p>GGOV(Road Mapped)</p>
      </div>
      <div className='flex justify-start'>
        <details>
          <summary>Wallet</summary>
          <ul>
            <li>Create Wallet</li>
            <li>Manage Digital Assets</li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export { EconomyMenu };
