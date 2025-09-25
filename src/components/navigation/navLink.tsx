import  Link  from "next/link"
import { ReactNode } from "react";

interface NavLinkProps {
    url: string,
    children: ReactNode;
}

export default function NavLink({url,children}: NavLinkProps){
    return (
        <Link href={url} className="content-center bg-transparent hover:bg-orange-400 text-white font-semibold hover:text-gray-900 py-1 px-3 border border-transparent rounded text-xs">{children}</Link>
    )
}