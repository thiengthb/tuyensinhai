import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-center'>
        <ul className='w-[350px] h-[61px] flex justify-between'>
            <li className='flex items-center text-lg font-semibold'>Trang chủ</li>
            <li className='flex items-center text-lg font-semibold'>Liên Hệ</li>
            <li className='flex items-center text-lg font-semibold'>Tra cứu</li>
        </ul>
    </div>
  )
}
