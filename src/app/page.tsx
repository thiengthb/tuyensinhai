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
    <div className="bg-[#e8e8e8]">
      <HeaderAdvertises />
      <div className="flex gap-10">
        <div className="flex flex-col gap-[21px]">
          <SideAdvertises width={362} height={161} />
          <SideAdvertises width={362} height={567} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mb-8">Tuyển sinh AI</h1>
          <Input></Input>
          <div className="relative w-[599px] h-[82px] mt-8">
            <textarea
              className="w-full h-full text-sm border border-gray-300 p-2 rounded-lg resize-none"
              placeholder="Hôm nay bạn muốn ..."
            ></textarea>
            <button type="submit" className="absolute right-2 top-3">
              <Image
                src="/assets/circle-arrow-right.svg"
                alt="arrow icon"
                width={22}
                height={22}
              ></Image>
            </button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-white px-3 rounded-lg">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ReviewBar />
        </div>
      </div>
    </div>
  );
}
