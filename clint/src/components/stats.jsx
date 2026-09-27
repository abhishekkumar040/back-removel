import React from 'react'

const stats = [
  { label: 'Images Processed', value: '500K+' },
  { label: 'Happy Users', value: '50K+' },
  { label: 'Average Rating', value: '4.9/5' },
  { label: 'Countries Served', value: '150+' },
]

const Stats = () => {
  return (
    <div className='mx-4 lg:mx-44 mt-6 sm:mt-2 mb-10 relative z-10'>
      <div className='bg-white rounded-2xl drop-shadow-md border border-gray-100 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100'>
        {stats.map((s, i) => (
          <div key={i} className='flex flex-col items-center justify-center py-6 px-2 text-center'>
            <p className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
              {s.value}
            </p>
            <p className='text-xs sm:text-sm text-gray-500 mt-1'>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
