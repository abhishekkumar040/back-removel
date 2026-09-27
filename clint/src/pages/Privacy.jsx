import React from 'react'

const Privacy = () => {
  return (
    <div className='mx-4 lg:mx-44 my-14 min-h-[70vh]'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800 text-center'>Privacy Policy</h1>
      <p className='text-center text-gray-400 text-sm mt-2'>Last updated: September 2026</p>

      <div className='max-w-3xl mx-auto mt-10 space-y-8 text-sm text-gray-600 leading-relaxed'>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>1. Information We Collect</h2>
          <p>
            When you sign up, we collect basic account information (name,
            email address, and profile photo) through our authentication
            provider, Clerk. When you use the background-removal tool, the
            image you upload is processed to generate a result; we don't use
            your images for anything beyond producing that result. When you
            purchase credits, payment is handled by Razorpay — we don't
            store your card or payment details ourselves.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>2. How We Use Your Information</h2>
          <p>
            We use your account information to identify you, track your
            credit balance, and provide the background-removal service.
            Uploaded images are sent to our image-processing provider solely
            to remove the background and are not used for training,
            advertising, or shared with third parties beyond what's
            necessary to deliver your result.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>3. Image Storage & Retention</h2>
          <p>
            Uploaded images are processed to generate your result and are
            not permanently stored on our servers. The processed result is
            returned directly to your browser — we recommend downloading it,
            as we don't guarantee long-term storage of past results.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>4. Third-Party Services</h2>
          <p>
            We rely on trusted third parties to operate this platform: Clerk
            for authentication, Razorpay for payment processing, and a
            third-party API for background removal. Each provider has its
            own privacy practices governing the data they process on our
            behalf.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>5. Your Rights</h2>
          <p>
            You can request access to, correction of, or deletion of your
            account data at any time by contacting us. Deleting your account
            removes your stored profile information and credit balance from
            our database.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>6. Contact Us</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href='mailto:bika2413@gmail.com' className='text-violet-600 hover:underline'>bika2413@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
  )
}

export default Privacy
