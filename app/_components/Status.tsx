"use client";

import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SIDE_PROJECTS, { SideProjectProps } from "../../lib/sideProjects";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 w-full">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                id={project.id}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-3">
          <p className="text-lg text-muted-foreground">My certifications</p>
          <ContactCard name="React" image="profile.png" mediumImage="https://pbs.twimg.com/profile_images/1415325668787855361/nxZY4zVv_400x400.png" description="Trainer : Enzo Ustariz - Web School" url="react.jpg"/>
        </Card>
      </div>
    </Section>
  );
}

type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
};

export function ContactCard(props: ContactCardProps) {
  return (
    <Link href={props.url} className="w-full">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative">
          <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
          <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-2 -right-1 rounded-full object-contain" />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" />
      </Card>
    </Link>
  )
}

export function SideProject(props: SideProjectProps) {
  return (
    <Link href={`/projects/${props.id}`} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.new && <Badge variant="outline">New</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
}

const WORKS: WorkProps[] = [
  {
    image: "https://media.licdn.com/dms/image/C4E0BAQGZ815jNq3fbA/company-logo_100_100/0/1635844050696/psycleresearch_logo?e=1727308800&v=beta&t=26mUUmtooriMbYTQ8GivbA_b2cIgmLBvFmEvmSa7jr8",
    title: "Psycle",
    role: "Frontend developer",
    date: "March 2024 - June 2024",
    url: "https://psycle.io/",
    internship: true,
  },
  {
    image: "https://media.licdn.com/dms/image/C4E0BAQFQL9S0tp5cpw/company-logo_200_200/0/1631373136406?e=1727308800&v=beta&t=EPnkSt9mhsXFTyXub7OzSenUFYK46yOPVe1LyvNlOIM",
    title: "Compucraft",
    role: "Frontend developer",
    date: "April 2023 - June 2023",
    url: "https://www.linkedin.com/company/association-compucraft/about/",
    internship: true,
  },
]

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  internship?: boolean;
};

export function Work(props: WorkProps) {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded" />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.internship && <Badge variant="outline">Internship</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
}

