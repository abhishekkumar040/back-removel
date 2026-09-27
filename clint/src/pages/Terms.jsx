import React from 'react'

const Terms = () => {
  return (
    <div className='mx-4 lg:mx-44 my-14 min-h-[70vh]'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800 text-center'>Terms of Service</h1>
      <p className='text-center text-gray-400 text-sm mt-2'>Last updated: September 2026</p>

      <div className='max-w-3xl mx-auto mt-10 space-y-8 text-sm text-gray-600 leading-relaxed'>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using back.removal, you agree to these
            Terms of Service. If you don't agree, please don't use the
            platform.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>2. The Service</h2>
          <p>
            back.removal lets you upload an image and receive a version of
            it with the background removed. New accounts start with a
            limited number of free credits; each background removal deducts
            one credit. Additional credits can be purchased on the Pricing
            page.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>3. Acceptable Use</h2>
          <p>
            You agree not to upload images that are illegal, infringe on
            someone else's rights, or that you don't have permission to use.
            You're solely responsible for the content you upload and process
            through the platform.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>4. Payments & Credits</h2>
          <p>
            Credit purchases are processed securely through Razorpay.
            Credits are non-transferable and, unless required by law, are
            non-refundable once used. Please review your plan carefully
            before purchasing.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>5. No Warranty</h2>
          <p>
            The service is provided "as is." While we aim for accurate,
            high-quality background removal, results can vary depending on
            image quality and content, and we don't guarantee a perfect
            result every time.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>6. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of
            the platform after changes are posted means you accept the
            updated Terms.
          </p>
        </section>

        <section>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>7. Contact Us</h2>
          <p>
            Questions about these Terms can be sent to{' '}
            <a href='mailto:bika2413@gmail.com' className='text-violet-600 hover:underline'>bika2413@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
  )
}

export default Terms
