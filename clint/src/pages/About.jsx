import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='mx-4 lg:mx-44 my-14 min-h-[70vh]'>

      <div className='text-center max-w-2xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800'>About back.removal</h1>
        <p className='text-gray-500 mt-4'>
          An AI-powered tool that removes image backgrounds in seconds —
          no design skills and no expensive software required.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 gap-8 mt-14'>

        <div className='bg-white border rounded-xl p-7 drop-shadow-sm'>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>What we do</h2>
          <p className='text-gray-600 text-sm leading-relaxed'>
            back.removal automatically detects the main subject in a photo
            and removes its background, producing a clean, transparent
            image in seconds. It's built for e-commerce sellers who need
            product shots on a plain background, designers who need quick
            cutouts, and anyone who wants a cleaner profile picture or
            social post — without opening Photoshop.
          </p>
        </div>

        <div className='bg-white border rounded-xl p-7 drop-shadow-sm'>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>Why we built it</h2>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Most background-removal tools are either paywalled, slow, or
            need some design skill to get a clean result. back.removal was
            built to make the process instant and accessible: upload an
            image, get a transparent result, and download it — all in one
            click. The platform launched in 2026 and is still under active
            development, with new features added over time.
          </p>
        </div>

      </div>

      <div className='bg-white border rounded-xl p-7 sm:p-10 drop-shadow-sm mt-8 flex flex-col sm:flex-row items-center gap-8'>
        <img src={assets.logo_icon} alt="" className='w-20 h-20 sm:w-24 sm:h-24 shrink-0' />
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>About the developer</h2>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Hi, I'm <span className='font-medium text-gray-800'>Abhishek Kumar</span> — a Computer Science
            Engineering student and the developer behind back.removal. I
            built this platform end-to-end: the image-processing pipeline,
            user authentication, the credits system, and the payment
            integration, as a way to apply full-stack development skills to
            a real, working product.
          </p>
          <Link to='/contact' className='inline-block mt-4 text-sm font-medium text-violet-600 hover:text-violet-700'>
            Get in touch →
          </Link>
        </div>
      </div>

    </div>
  )
}

export default About
