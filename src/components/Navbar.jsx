
"use client"

import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <div className='flex justify-center'>
        <ul className='w-[350px] h-[61px] flex justify-between'>
            <Link href="/" className='flex items-center text-lg font-semibold'>Trang chủ</Link>
            <Link href="/contact" className='flex items-center text-lg font-semibold'>Liên Hệ</Link>
            <Link href="/ask" className='flex items-center text-lg font-semibold'>Tra cứu</Link>
        </ul>
    </div>
  )
}
