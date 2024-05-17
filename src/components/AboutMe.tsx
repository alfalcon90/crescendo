import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import Image from "next/image";


export default function AboutMe({
  src,
  showBtn = true,
}: {
  src: string | StaticImport;
  showBtn?: boolean;
}) {
  return (
    <SectionContainer className="bg-green-dark">
        <div className="flex flex-col lg:flex-row items-center" >
          <div className="max-w-[320px] md:max-w-none md:w-[460px] pointer-events-none">
            <Image
                className="scale-[1.75]"
                src={src}
                alt="Illustration of performer playing guitar"
                width={1000}
                height={1000}
                loading="eager"
            />
          </div>
          <SectionHeader dark className="[&]:text-start lg:[&]:items-start" innerClassName="lg:[&]:items-start [&]:space-y-8" overline="About me" title="Jason Shafer" href={showBtn ? "/about" : undefined} subtitle="I am a professional orchestral musician. With over a decade of experience as the full-time Principal Clarinetist of the Colorado Symphony, I deeply understand the stress we face as performing artists.
          I love teaching – I’m a university music professor, too. When I kept bumping into performance psychology both as a performer and teacher, I decided to follow this passion. Now, with a master’s degree in performance psychology, I’m nearing final certification as a Certified Mental Performance Consultant (CMPC) through the Association for Applied Sport Psychology (AASP)." ></SectionHeader>
        </div>
    </SectionContainer>
  );
}
