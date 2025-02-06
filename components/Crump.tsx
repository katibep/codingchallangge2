import Link from 'next/link'
import React from 'react'

export default function Crump() {
  return (
    <div className='mt-[1rem] p-[2rem]' >
        <Link href="/addnew" className='text-red-800'>
        Add product
        </Link>
    </div>
  )
}
