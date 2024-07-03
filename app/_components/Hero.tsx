import { Section } from "./Section";
import { Code } from "./Code";

export default function Hero() {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[2] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Hugo Ferreira</h2>
            <h3 className="font-caption text-3xl">Student at the University of Amiens</h3>
            <p className="text-base">1st MIAGE master's student in Amiens (France). I want to be a <Code>Frontend developer</Code>.</p>
        </div>
        <div className="flex-1">
            <img src="profile.png" className="w-full h-auto max-w-xs rounded-full" alt="Hugo's picture" />
        </div>
    </Section>
  )
}