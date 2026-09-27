import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-gray-300 mt-20'>
      <div className='mx-4 lg:mx-44 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

        {/* Brand */}
        <div className='col-span-1 sm:col-span-2 lg:col-span-1'>
          <img src={assets.logo} alt="back.removal" className='w-32' />
          <p className='mt-4 text-sm text-gray-400 max-w-xs'>
            Remove image backgrounds instantly with AI — clean, transparent
            results in one click, ready for e-commerce, design, and social media.
          </p>
          <div className='flex items-center gap-4 mt-5'>
            <a href="#" aria-label="Facebook" className='opacity-80 hover:opacity-100 transition-opacity'>
              <img width={20} src={assets.facebook_icon} alt="" />
            </a>
            <a href="#" aria-label="Twitter" className='opacity-80 hover:opacity-100 transition-opacity'>
              <img width={20} src={assets.twitter_icon} alt="" />
            </a>
            <a href="#" aria-label="Google Plus" className='opacity-80 hover:opacity-100 transition-opacity'>
              <img width={20} src={assets.google_plus_icon} alt="" />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <p className='text-white font-semibold mb-4'>Product</p>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/' className='hover:text-white transition-colors'>Remove Background</Link></li>
            <li><Link to='/buy' className='hover:text-white transition-colors'>Pricing & Credits</Link></li>
            <li><a href='#' className='hover:text-white transition-colors'>API Access</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className='text-white font-semibold mb-4'>Company</p>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/about' className='hover:text-white transition-colors'>About Us</Link></li>
            <li><Link to='/contact' className='hover:text-white transition-colors'>Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className='text-white font-semibold mb-4'>Legal</p>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/privacy' className='hover:text-white transition-colors'>Privacy Policy</Link></li>
            <li><Link to='/terms' className='hover:text-white transition-colors'>Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-800'>
        <p className='text-center text-xs sm:text-sm text-gray-500 py-5'>
          © {year} back.removal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
