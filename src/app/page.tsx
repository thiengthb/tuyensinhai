import Image from "next/image";
import HeaderAdvertises from "@/components/Advertises/HeaderAdvertises";
import SideAdvertises from "@/components/Advertises/SideAdvertises";
import Input from "@/components/Input";
import ReviewBar from "@/components/ReviewBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-[#e8e8e8] h-screen">
      <HeaderAdvertises />
      <div className="flex gap-[100px] mt-5 ml-5">
        <div className="flex flex-col gap-[21px]">
          <SideAdvertises width={362} height={161} />
          <SideAdvertises width={362} height={567} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center h-full">
            <h1 className="text-5xl mb-8">Tuyển sinh AI</h1>
            <Input></Input>
            <div className="relative w-[599px] h-[82px] my-8">
              <textarea
                className="w-full h-full text-sm border border-gray-300 py-2 px-4 rounded-lg resize-none"
                placeholder="Hôm nay bạn muốn ..."
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
            <Accordion type="single" collapsible className="w-[599px] max-w-[599px] mb-8">
              <AccordionItem value="item-1" className="bg-white px-3 rounded-lg">
                <AccordionTrigger className="text-lg">Trường đại học công nghệ thông tin (UIT) - Ngành Khoa học máy tính</AccordionTrigger>
                <AccordionContent className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-[599px] max-w-[599px] mb-8">
              <AccordionItem value="item-1" className="bg-white px-3 rounded-lg">
                <AccordionTrigger className="text-lg">Title</AccordionTrigger>
                <AccordionContent className="text-lg">

                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <ReviewBar />
          </div>
          <SideAdvertises width={599} height={95}/>
        </div>
      </div>
    </div>
  );
}
