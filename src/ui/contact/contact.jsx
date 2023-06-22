import React from 'react'
import './contact.css'

const contact = () => {
    return (
        <div className='contact_container'>
            <h1 className='text-4xl text-white text-center'>Get in Touch <span className='font-bold'>With Us</span></h1>
            <div className="input">
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email Address' />
            </div>
            <div className="input_message">
                <input type="text" placeholder='Type Your Message Here...' className='message' />
            </div>
            <div className="submit_btn">
                <a href="#" className='submit text-dark'>Submit</a>
            </div>
        </div>
    )
}

export default contact