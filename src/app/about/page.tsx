import AboutMe from "@/components/AboutMe";
import Heading3 from "@/components/Heading3";
import PageContainer from "@/components/PageContainer";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import Link from "next/link";
import { PiImageLight } from "react-icons/pi";


export default function About() {
  return (
    <PageContainer className="overflow-x-clip" >
      <AboutMe showBtn={false} src="/jemmy-2.png" />
      <SectionContainer className="relative max-w-4xl">
        <Heading3 className="w-full">My work as a musician</Heading3>
        <Paragraph>
          I joined the Colorado Symphony as Principal Clarinet at the start of the 2013-2014 season. Prior to that, I spent four years as a fellow with the New World Symphony in Miami Beach, FL. I earned my Bachelor of Music with Highest Distinction from the Eastman School of Music in Rochester, NY. My major musical influences include Kenneth Grant, Mark Nuccio, Burt Hara, and Dr. Kyle Coughlin.
          <br />
          <br />
          I&apos;ve had the privilege of performing in guest principal roles with the Philadelphia Orchestra and the Cincinnati Symphony. Additionally, I serve as the Principal Clarinet at the Sun Valley Music Festival. Internationally, I&apos;ve performed in Thailand, Austria, Estonia, and Russia, and I&apos;m always eager to expand my travel experiences.
          <br />
          <br />
          My journey in music has allowed me the opportunity to collaborate in chamber music performances with many distinguished musicians, such as Yefim Bronfman, Jessye Norman, Michelle DeYoung, Jeremy Denk, and Paquito D’Rivera. As a concerto soloist, I&apos;ve performed with the Colorado Symphony, the Sun Valley Music Festival, the New World Symphony, and the Eastman Philharmonia, among others.
          <br />
          <br />
          My passion for teaching led me to join the faculty of the University of Northern Colorado and the International Festival-Institute at Round Top. Topics on performance psychology often find their way into my teaching. During my time at Eastman, I also studied piano, and I still enjoy accompanying other musicians whenever possible.
        </Paragraph>
        <div className="w-full space-y-2 py-6">
          <Image className="w-full rounded-xl" src="/concert-1.jpg" alt="Photo of Jason Shafer performing with the Colorado Symphony" height={480} width={720}/>
          <div className="flex items-center space-x-2">
            <PiImageLight className="text-green-dark/50"/>  
            <small>Image courtesy of the <Link className="underline" href="https://coloradosymphony.org/about/media-press/">Colorado Symphony</Link></small>
          </div>
        </div>
        <Heading3 className="w-full">My work as a performance consultant</Heading3>
        <Paragraph>
          I successfully completed my Master&apos;s degree in Performance Psychology in 2024, with a notable distinction and a GPA of 4.0. Currently, I am in the advanced stages of obtaining my certification as a Certified Mental Performance Consultant (CMPC), a qualification offered by the Association for Applied Sport Psychology (AASP).
          <br />
          <br />
          I have worked with individual and group clients from around the world. Although I specialize in working with musicians, I have also enjoyed my work with dancers, actors, and athletes. In addition, I have the privilege of teaching &quot;Performance Psychology&quot; courses at two institutions: the University of Northern Colorado and the University of Denver&apos;s Lamont School of Music.
          <br />
          <br />
          Over the years, I&apos;ve had the opportunity to conduct a range of workshops centered around the theme of performance psychology for a variety of organizations. To name a few examples, I&apos;ve led sessions at the International Festival-Institute at Round Top, collaborated with <Link className="underline" href="https://bulletproofmusician.com/" >Dr. Noa Kageyama</Link> on multiple projects, presented at the International Clarinet Association, and worked with several other universities and music schools across the United States.
          <br />
          <br />
          To give you a deeper understanding of my work and my approach to performance psychology, I would recommend listening to a <Link className="underline" href="https://bulletproofmusician.com/jason-shafer-on-healthier-practicing-strengths-based-performing/" >recent interview</Link> I had the pleasure of doing with Dr. Noa Kageyama, who is one of my most respected colleagues in this field.
        </Paragraph>
        <div className="group absolute lg:inline hidden flex flex-col items-center -bottom-[2px] -right-[56px] hover:animate-bounce">
          <span className="pointer-events-none rounded-md p-1 text-xs font-medium bg-green-dark text-beige w-max opacity-0 transition-opacity group-hover:opacity-100">Sunnies!</span>
          <div className="h-2" ></div>
          <Image src="/sunny.svg" alt="Illustration of a sunflower" height={40} width={50} />
        </div> 
      </SectionContainer>
      <SectionContainer className="bg-red">
        <SectionHeader overline="Want to hear some music?" innerClassName="[&]:space-y-1 [&]:sm:space-y-2" overlineClassName="[&]:text-beige" title="Performances">
          <p>You can also watch me perform every week with the Colorado Symphony. Tickets are <Link className="underline" href="https://coloradosymphony.org/view-all-events/" >available here</Link>.</p>
        </SectionHeader>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoCard className="bg-[url('/concert-2.png')]" title="Sergei Prokofiev - Quintet" subtitle="November 2, 2021" href="https://www.youtube.com/watch?v=OhzCHB56C5M" />
          <VideoCard className="bg-[url('/concert-3.png')]" title="Claude Debussy - Petite Piece" subtitle="July 14, 2018" href="https://www.youtube.com/watch?v=xdgy7Zv2Ttk"/>
        </div>
      </SectionContainer>
    </PageContainer>
  )
}