import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import Image from "next/image"
type SkillCardProps = {
  label: string;
  icon: string;            // must be a valid src (public path or URL)
  width?: number;          // optional image width
  height?: number;         // optional image height
} & React.ComponentProps<typeof Card>; // allow passing Card props like className


export default function SkillCard({label,icon, width=48, height=48 }: SkillCardProps){
    return(
        <Card className="skillCard border-0 rounded-none bg-transparent shadow-sm min-w-[125px] relative">
            <div className="card-bg absolute w-full h-full top-0 left-0"></div>
            <CardHeader>
                <CardTitle className="text-white">
                    <Image className="max-w-none max-h-none shadow-md" width={width} height={height} alt={label} src={icon} />
                </CardTitle>
            </CardHeader>
            <CardFooter className="text-xs font-bold uppercase text-white text-shadow-sm">{label}</CardFooter>
        </Card>
    )
}