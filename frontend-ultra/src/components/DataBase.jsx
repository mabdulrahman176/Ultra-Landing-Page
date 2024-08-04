import React from 'react'
import { Link } from 'react-router-dom'

function DataBase() {
    return (
        <div className='w-full h-auto py-20 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 p-6 lg:p-12'>
                <img className='w-full pt-4 h-auto lg:w-11/12 lg:pl-4' src="/images/imag4.png" alt="images" />
            </div>
            <div className='w-full lg:w-1/2 mt-7 lg:pt-20 lg:pl-8 p-6'>
                <h3 className='text-[#4b59f7] text-2xl lg:text-3xl'>Secure Database</h3>
                <h2 className='text-3xl lg:text-5xl font-bold text-[#1c2237] font-sans leading-snug'>All your data is stored on our secure server</h2>
                <p className='text-lg lg:text-[22px] font-sans text-[#1c2237] leading-7 lg:leading-8 pt-4 lg:pt-8 pb-6 lg:pb-10'>You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.</p>
                <Link to='/rounting' className='text-xl lg:text-3xl text-white leading-8 lg:leading-10 rounded-md px-4 py-2 bg-[#4b59f7]'>Sign Up Now</Link>
            </div>
        </div>
    )
}

export default DataBase