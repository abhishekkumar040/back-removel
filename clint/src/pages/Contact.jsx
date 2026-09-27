import React from 'react'
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, PhoneIcon } from '../components/icons'

const contactLinks = [
  {
    label: 'Email',
    value: 'bika2413@gmail.com',
    href: 'mailto:bika2413@gmail.com',
    Icon: MailIcon,
  },
  {
    label: 'Phone',
    value: '+91 95466 80985',
    href: 'tel:+919546680985',
    Icon: PhoneIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/abhishekkumar040',
    href: 'https://github.com/abhishekkumar040',
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Abhishek Kumar',
    href: 'https://www.linkedin.com/in/abhishek-kumar-57233019b/?isSelfProfile=true',
    Icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    value: '@abhishek.mediaa',
    href: 'https://www.instagram.com/abhishek.mediaa/',
    Icon: InstagramIcon,
  },
]

const Contact = () => {
  return (
    <div className='mx-4 lg:mx-44 my-14 min-h-[70vh]'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800 text-center'>Get in Touch</h1>
      <p className='text-center text-gray-500 mt-3 max-w-xl mx-auto'>
        Have a question, feedback, or want to collaborate? Reach out through
        any of the channels below.
      </p>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {contactLinks.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='flex items-center gap-4 bg-white border rounded-xl p-5 drop-shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300'
          >
            <div className='shrink-0 w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white'>
              <Icon className='w-5 h-5' />
            </div>
            <div className='min-w-0'>
              <p className='font-medium text-gray-800'>{label}</p>
              <p className='text-sm text-gray-500 truncate'>{value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
