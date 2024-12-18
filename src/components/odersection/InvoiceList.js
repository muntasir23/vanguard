import React from 'react'
import Invoice from './Invoice'

export default function InvoiceList() {
  return (
    <div className='bg-white rounded'>
      <Invoice status="Pending" />
      <Invoice status="Paid" />
      <Invoice status="Pending"/>
      <Invoice status="Paid" />
    </div>
  )
}
