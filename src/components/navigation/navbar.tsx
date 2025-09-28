"use client"
import NavLink from "@/components/navigation/navLink"
import data from "../../../data.json"
export default function Navbar(){
    return (
        <div className="w-fit flex flex-row gap-2">
            {data.navItems.map((nLink) =>{
                return <NavLink key={nLink.url} url={nLink.url}>{nLink.label}</NavLink>
            })}
        </div>
    )
}