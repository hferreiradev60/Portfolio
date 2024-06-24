import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./Status";

export default function Contact() {
  return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Contact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to work with you...
        </h2>
        <div className="flex max-md:flex-col w-full gap-4">
            <ContactCard name="hugo-ferreira" image="https://melvynx.com/images/my-face.png" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s" description="Contact me with Linkedin" url={""} />
            <ContactCard name="hugo-ferreira" image="https://melvynx.com/images/my-face.png" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s" description="Contact me with Linkedin" url={""} />
            <ContactCard name="hugo-ferreira" image="https://melvynx.com/images/my-face.png" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s" description="Contact me with Linkedin" url={""} />
        </div>
    </Section>
  )
}
