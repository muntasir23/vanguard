import React from 'react'

export default function InvoiceForm() {
  return (
    <div className='w-full grid place-items-center gap-3'>
      <div className='md:w-[900px] w-[95%] flex gap-5 bg-white shadow-sm p-3'>
        <input type='text' placeholder='Customer Name' className='w-full p-2 border border-zinc-300 rounded' />
        <input type='Number' placeholder='Cell No.' className='w-full p-2 border border-zinc-300 rounded' />
      </div>
      <div className='md:w-[900px] w-[95%] flex gap-5 bg-white shadow-sm p-3'>
        <input type='text' placeholder='Email' className='w-full p-2 border border-zinc-300 rounded' />
        <input type='text' placeholder='Address' className='w-full p-2 border border-zinc-300 rounded' />
      </div>
      <div className='md:w-[900px] w-[95%] flex gap-5 bg-white shadow-sm p-3'>
      <input type='Date' placeholder='Address' className='w-full p-2 border border-zinc-300 rounded' />
      </div>
    </div>
  )
}
