import React from 'react'
import InvoiceList from './InvoiceList'
import InvoiceFooter from './InvoiceFooter'

export default function InvoiceSection() {
  return (
    <div className='p-4 px-5 shadow rounded'>
      <InvoiceList />
      <InvoiceFooter />
    </div>
  )
}
