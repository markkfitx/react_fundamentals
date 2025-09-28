import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SkillCard from "@/components/Skill-Carousel/skill-card"
import data from "../../../data.json"

export default function SkillCarousel(){
    return (
        <Carousel className="w-full m-0">
            <CarouselContent className="gap-0">
                {data.skills.map((skill,idx) =>{
                    return(
                    <SkillCard key={`${skill.label}-${idx}`} label={skill.label} icon={skill.icon} width={skill.width} height={skill.height}/>
                    )
                })}
                <CarouselItem></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}