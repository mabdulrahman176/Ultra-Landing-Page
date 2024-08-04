import React from 'react'
import Services from './Services'
import Products from './Products'
import Pricing from './Pricing'
import DataBase from './DataBase'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
  <>
  <div className=' bg-[#101522] w-full h-auto p-12 flex flex-col lg:flex-row'>
    <div className='w-full lg:w-1/2 pt-10 lg:pt-20 lg:pl-8 p-6'>
        <h3 className='text-[#a9b3c1] text-2xl lg:text-3xl'>Marketing Agency</h3>
        <h2 className='text-3xl lg:text-5xl font-bold text-[#f7f8fa] font-sans leading-snug'>Lead Generation Specialist for Online Businesses</h2>
        <p className='text-lg lg:text-[22px] font-sans text-[#a9b3c1] leading-7 lg:leading-8 pt-4 lg:pt-8 pb-6 lg:pb-10'>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.</p>
        <Link to='/rounting' className='text-xl lg:text-3xl text-white leading-8 lg:leading-10 rounded-md px-4 py-2 bg-[#4b59f7]'>Get Started</Link>
    </div>
    <div className='w-full lg:w-1/2 p-6 lg:p-12'> <img className='w-full pt-8 bg-[#151c39] bg-transparent h-auto lg:w-11/12 lg:pl-4' src="/images/img1.png" alt="images" /></div>
        </div>
<Services/>
<Products/>
<Pricing/>
<DataBase/>
{/* <SignIn /> */}
  </>
  )
}

export default Home
