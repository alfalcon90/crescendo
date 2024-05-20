import Image from "next/image";
import ContactForm from "./ContactForm";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ContactSection() {
  return (
    <SectionContainer className="md:[&]:flex-row max-w-6xl space-x-8">
      <div className="min-w-[400px] flex w-full flex-col space-y-8">
        <SectionHeader className="[&]:text-start [&]:items-start" innerClassName="[&]:items-start [&]:space-y-1" title="Get in touch"><p className="text-red" >I look forward to hearing from you!</p></SectionHeader>
        <ContactForm />
      </div>
      <Image className="hidden md:inline w-full" src="/illy-mail.png" alt="" height={200} width={200} />
    </SectionContainer>
  );
}
