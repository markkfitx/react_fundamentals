import { ReactNode } from "react"
interface CardProps{
    title: string,
    children: ReactNode,
}
export default function Card({title, children}:CardProps){
    return (
        <div className="card border rounded-2">
            <div className="card-title border-b py-2 bg-gray-200 text-center font-bold">{title}</div>
            <div className="card-body p-4">
                {children}
            </div>
        </div>
    )
}