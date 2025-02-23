import React from 'react'
import Image from 'next/image'

export default function Input() {
  return (
    <div className="relative h-[30px]">
        <div className="absolute left-2 top-1">
            <Image src="/assets/mail.svg" alt="mail icon" width={22} height={22}/>
        </div>
        <input type="search" id="default-search" className="h-full w-full px-10 py-[14px] border border-gray-300 rounded-lg text-sm" placeholder="Type your email" required />
        <button type="submit" className="absolute right-2 top-1">
            <Image src="/assets/circle-arrow-right.svg" alt="arrow icon" width={22} height={22}></Image>
        </button>
    </div>
  )
}
