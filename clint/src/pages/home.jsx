import React from 'react'
import Header from '../components/header'
import Steps from '../components/steps'
import Bgslider from '../components/bgslider'
import Testimonial from '../components/testimonial'
import Upload from '../components/upload'


function home() {
  return (
    <div>
      <Header />
      <Steps />
      <Bgslider />
      <Testimonial />
      <Upload />
    </div>
  )
}

export default home