import React from 'react'
import Image from 'next/image'

export default function ReviewBar() {
  return (
    <div className='flex py-1 px-2 gap-2 rounded-lg bg-[#FFFDF6]'>
        <h1>Kết quả trên làm bạn hài lòng chứ? </h1>
        <Image src="assets/thumps-up.svg" alt="thumps up" width={18} height={18}></Image>
        <Image src="assets/thumps-down.svg" alt="thumps down" width={18} height={18}></Image>
    </div>
  )
}
