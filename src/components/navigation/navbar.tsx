"use client"
import NavLink from "@/components/navigation/navLink"
export default function Navbar(){
    const navItems = [
        { 
            "label": "Home", 
            "url": "/dashboard" 
        },
        { 
            "label": "Hook Examples", 
            "url": "/hooks" 
        }
    ]
    return (
        <div className="w-fit flex flex-row gap-2">
            {navItems.map((nLink) =>{
                return <NavLink key={nLink.url} url={nLink.url}>{nLink.label}</NavLink>
            })}
        </div>
    )
}