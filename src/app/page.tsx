import Button from "@/components/Button";
import FeatureItem from "@/components/FeatureItem";
import Heading1 from "@/components/Heading1";
import PageContainer from "@/components/PageContainer";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { PiArrowRightLight } from "react-icons/pi";

export default async function Home() {
  return (
    <PageContainer className="overflow-x-clip" >
      <div className="flex justify-center w-full h-[1000px] sm:h-[1200px] md:h-[800px] lg:h-[1504px] bg-[url('/hero-mask.svg')] bg-center">
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
      <SectionContainer className="[&]:py-0 -translate-y-[72px] sm:-translate-y-[120px] md:translate-y-[72px] lg:-translate-y-[320px]">
        <Image
          className="absolute scale-[8] -translate-x-[100px] sm:scale-[10] translate-y-[1200px] sm:-translate-x-[220px] pointer-events-none"
          src="/stripes.svg"
          alt="Illustration of performer playing guitar"
          width={200}
          height={256}
          />
        <SectionHeader
          overline="Discover your voice"
          title="My Approach"
          subtitle="I help musicians and performers overcome performance anxiety, prepare for auditions, and perform more confidently under pressure."
          href={"/faq"}
        />
        <FeatureItem
          title="Holistic Development"
          body="As a mental performance consultant, I use evidence-based concepts of performance psychology to help performing artists overcome barriers: performance anxiety, lack of confidence, impostor syndrome, audition preparation, injury recovery, and much more!"
          src="/illy-2.png"
          alt="Abstract illustration of a person"
        />
        <div className="h-4 sm:h-20" />
         <FeatureItem
          title="Performance Psychology"
          body="You may know that athletes regularly work with sport psychologists to enhance their performance, but you might not know that the “sport psychology” field also applies to performing artists. This is why experts often refer to the field as “performance psychology.” In short – research shows that performing artists benefit from these concepts as much as athletes!"
          src="/illy-3.png"
          alt="Abstract illustration of a person running in a park"
          reverse
        />
        <div className="h-4 sm:h-20" />
         <FeatureItem
          title="Customized Strategies"
          body="I see most of my clients one-on-one, but I also offer group sessions and workshops. Musicians are my specialty, but I also enjoy working with other performing artists."
          src="/illy-4.png"
          alt="Abstract illustration of two people talking"
        />
      </SectionContainer>
    </PageContainer>
  );
}
