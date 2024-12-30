import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-6xl border-t pt-4 mx-auto p-6'>
      <h1 className='text-3xl font-semibold mt-20 text-[#301d57] mb-4'> Contact Us</h1>
      <p className='text-lg text-[#51328f] mb-4'>
        {"If you have any questions or feedback, feel free to reach out to us!"}
      </p>
      <form className='space-y-4'>
        <div>
            <label className='block text-sm  font-semibold'>Name</label>
            <input type='text' className='w-full lg:w-1/2 p-2 border rounded-lg' placeholder='Your name' />
        </div>
        <div>
            <label className='block text-sm font-semibold'>E-mail</label>
            <input type='email' className='w-full lg:w-1/2 p-2 border rounded-lg' placeholder='Your email' />
        </div>
        <div>
            <label className='block text-sm font-semibold'>Message</label>
            <textarea className='w-full lg:w-1/2 p-2 border rounded-lg' placeholder='Your message' />
        </div>
        <button className=' transition ease-in-out delay-150 p-3 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300  text-[#fdfdfd] px-6 py-2 rounded-md'> Send Message</button>
      </form>
    </div>
  )
}

export default Contact;
