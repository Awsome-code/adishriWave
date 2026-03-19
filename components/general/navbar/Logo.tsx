import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='w-10 h-10 '>
      <Image src="/images/logo3.png" alt='logo' width={80} height={60} />
    </div>
  )
}
