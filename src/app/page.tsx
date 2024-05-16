import Button from "@/components/Button";
import Heading1 from "@/components/Heading1";
import PageContainer from "@/components/PageContainer";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import { PiArrowRightLight } from "react-icons/pi";

export default async function Home() {
  return (
    <PageContainer >
      <div className="flex justify-center w-full h-[1000px] bg-[url('/hero-mask.svg')] bg-center">
        <SectionContainer className="md:pt-32 [&]:items-start">
          <div className="flex max-w-[480px] flex-col space-y-4 px-2 sm:max-md:px-16 md:space-y-10">
            <div className="">
              <Heading1 className="[&]:text-beige">Crescendo</Heading1>
              <Paragraph large className="[&]:text-beige">Performance Consulting</Paragraph>
            </div>
            <div>
              <Paragraph className="[&]:text-beige">
                Are you an artist struggling with performance anxiety? Overwhelmed by audition preparation? Are you looking to perform more confidently under pressure?
              </Paragraph>
            </div>
            <div className="flex">
              <Button dark trailingIcon={PiArrowRightLight} href={"/contact"}>I can help</Button>  
            </div>
          </div>
          <Image
            className="absolute top-[-56px] left-1/2 transform -translate-x-[120px] pointer-events-none"
            src="/illy-1.png"
            alt="Illustration of performer playing guitar"
            width={1000}
            height={1000}
          />
        </SectionContainer>
      </div>
    </PageContainer>
  );
}
