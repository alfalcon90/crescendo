import Image from "next/image";
import ContactForm from "./ContactForm";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ContactSection() {
  return (
    <SectionContainer className="[&]:flex-row max-w-6xl space-x-16">
      <div className="flex w-full flex-col space-y-8">
        <SectionHeader className="[&]:text-start lg:[&]:items-start" innerClassName="lg:[&]:items-start [&]:space-y-1" title="Get in touch"><p className="text-red" >You can reach me anytime via <Link className="underline" href="mailto:shafer.jason@gmail.com">shafer.jason@gmail.com</Link></p></SectionHeader>
        <ContactForm />
      </div>
      <Image src="/illy-mail.png" alt="" height={500} width={500} />
    </SectionContainer>
  );
}
