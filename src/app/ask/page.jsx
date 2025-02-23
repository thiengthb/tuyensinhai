import React from 'react'
import HeaderAdvertises from "@/components/Advertises/HeaderAdvertises";
import Image from "next/image";
import SideAdvertises from "@/components/Advertises/SideAdvertises";

export default function App() {
  return (
    <div className='relative h-screen'>
      <HeaderAdvertises />
      <Image src="assets/Gradient.svg" alt="gradient" width={700} height={750} className='absolute top-1/10 left-1/2 -translate-x-1/2 z-[-1]'></Image>
      <div className="h-full flex flex-col items-center">
        <h1 className='mt-40 text-[85px] text-[#443587] font-bold'>Tuyển sinh AI</h1>
        <div className="mt-10">
          <h2 className='text-4xl text-center'>Trợ lý tư vấn tuyển sinh?</h2>
          <h2 className='text-4xl text-center'>Công cụ tìm kiếm hiệu quả?</h2>
        </div>
        <div className="relative w-[599px] h-[100px] mt-10 mb-32">
          <textarea
            className="w-full h-full text-md border border-gray-300 py-2 px-4 rounded-lg resize-none"
            placeholder="Tôi học giỏi các môn trong tổ hợp A và có đam mê lĩnh vực công nghệ thì chọn trường và chọn ngành nào?"
          ></textarea>
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
            <Image
              src="/assets/circle-arrow-right.svg"
              alt="arrow icon"
              width={22}
              height={22}
            ></Image>
          </button>
        </div>
        <SideAdvertises width={765} height={75}/>
      </div>
    </div>
  )
}
