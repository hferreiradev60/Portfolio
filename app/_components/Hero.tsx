import { Section } from "./Section";
import { Code } from "./Code";
import Image from 'next/image';

export default function Hero() {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[2] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Hugo Ferreira</h2>
            <h3 className="font-caption text-3xl">Student at the University of Amiens</h3>
            <p className="text-base">1st MIAGE master&apos;s student in Amiens (France). I want to be a <Code>Frontend developer</Code>.</p> {/* Remplacement de ' par &apos; */}
        </div>
        <div className="flex-1">
            <Image src="/profile.png" className="w-full h-auto max-w-xs rounded-full" alt="Hugo's picture" width={500} height={500} /> {/* Remplacement de <img> par <Image> */}
        </div>
    </Section>
  )
}
