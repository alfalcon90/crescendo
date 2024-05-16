import Button from "@/components/Button";
import Heading1 from "@/components/Heading1";
import PageContainer from "@/components/PageContainer";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import { PiArrowRightLight } from "react-icons/pi";

export default async function Home() {
  return (
    <PageContainer className="overflow-x-clip" >
      <div className="flex justify-center w-full h-[1000px] sm:h-[1200px] md:h-[800px] lg:h-[1200px] bg-[url('/hero-mask.svg')] bg-center">
        <div className="flex flex-col-reverse items-center sm:items-start md:flex-row w-full h-min max-w-6xl px-4 pt-10 md:pt-[100px] md:space-x-8">
          <div className="flex flex-col space-y-6 pt-8 sm:pt-0 md:pt-8 sm:px-8 md:px-0 md:space-y-10">
            <div className="">
              <Heading1 className="text-center sm:text-start [&]:text-beige">Crescendo</Heading1>
              <Paragraph large className="text-center sm:text-start [&]:text-beige">Performance Consulting</Paragraph>
            </div>
            <div>
              <Paragraph className="text-center sm:text-start [&]:text-beige">
                Are you an artist struggling with performance anxiety? Overwhelmed by audition preparation? Are you looking to perform more confidently under pressure?
              </Paragraph>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Button dark trailingIcon={PiArrowRightLight} href={"/contact"}>I can help</Button>  
            </div>
          </div>
          <div className="max-w-[320px] md:max-w-none md:w-[1420px] pointer-events-none">
            <Image
                className="scale-[1.8]"
                src="/illy-1.png"
                alt="Illustration of performer playing guitar"
                width={1000}
                height={1000}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
