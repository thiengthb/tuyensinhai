import React from 'react'
import Image from 'next/image'

export default function ReviewBar() {
  return (
    <div className='w-[325px] flex p-1 gap-2 rounded-md bg-white'>
        <h1>Kết quả trên làm bạn hài lòng chứ? </h1>
        <Image src="assets/thumps-up.svg" alt="thumps up" width={18} height={18}></Image>
        <Image src="assets/thumps-down.svg" alt="thumps down" width={18} height={18}></Image>
    </div>
  )
}
