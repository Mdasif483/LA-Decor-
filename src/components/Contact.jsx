import React from 'react'
import ContactHero from './SubComponent/ContactHero'
import CallToAction from './SubComponent/CallToAction'

function Contact() {
  return (
    <div >
      <ContactHero />
      <CallToAction />
        {/* <h1 className='text-center text-xl md:text-7xl font-semibold'>Contact us</h1> */}
      <div className="flex flex-wrap justify-center items-center h-auto p-5 pl-[6%] pt-[7%] mt-27 " id='contact'>
        <div className="w-full md:w-2/5 p-4 ">
          <h2 className="text-xl md:text-7xl font-semibold mb-5">GET IN TOUCH!</h2>
          <form className="space-y-4">
            <div>
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' className="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email' className="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder='Message' className="mt-1 p-4 w-full border rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className="px-8 py-4 bg-black text-white hover:bg-yellow-500">Submit</button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <div className=" overflow-hidden w-[35rem] h-[35rem]">
            <iframe
              className="w-[35rem] h-[35rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6745.904183731265!2d78.08619991877197!3d27.924976927685893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a50fd99018bf%3A0xc991a0f21052d8f8!2sLa%20Decor%20Interior%20Design%20Studio!5e0!3m2!1sen!2sin!4v1757936287708!5m2!1sen!2sin" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
