import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Header() {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-md">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">hugo.</h1>
            <div className="flex-1" />
            <ul className="flex items-center gap-2">
                <Link 
                    href="https://github.com/hferreiradev"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                >
                    <GithubIcon size={15} className="text-foreground" />
                </Link>
                {/* <Link 
                    href="https://www.instagram.com/hugo_frr60/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                >
                    <InstagramIcon size={15} className="text-foreground" />
                </Link> */}
                <Link 
                    href="https://www.linkedin.com/in/hugo-ferreira-5976172a3/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                >
                    <LinkedinIcon size={15} className="text-foreground" />
                </Link>
            </ul>
        </Section>
    </header>
  )
}