import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import NavBar from "@/components/navigation/navbar"
import avatar from "@/img/avatar.jpg"
export default function Header(){
    return (
        <div className="container-fluid py-8 flex flex-row justify-between content-center">
            <div className="flex flex-row justify-start content-center gap-3 avatar-wrapper">
                <Avatar className="shadow-sm border-1 border-gray-100 h-7 w-7 opacity-75">
                    <AvatarImage src={avatar.src} alt="Avatar Image"/>
                    <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <h1 className="text-sm text-white font-bold uppercase m-0 leading-7">Mark Kirby</h1>
            </div>
            <NavBar/>
        </div>
    )
}