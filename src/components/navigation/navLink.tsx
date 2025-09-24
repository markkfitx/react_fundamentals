import  Link  from "next/link"
import { ReactNode } from "react";

interface NavLinkProps {
    url: string,
    children: ReactNode;
}

export default function NavLink({url,children}: NavLinkProps){
    return (
        <Link href={url} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">{children}</Link>
    )
}