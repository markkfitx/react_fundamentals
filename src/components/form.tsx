import {ReactNode} from "react"
import Form from "next/form"

interface formProps{
    name:string,
    className?: string,
    action?: string | ((formData: FormData) => void | Promise<void>),
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>
    children: ReactNode;
}
export default function CustomForm({name,className = "",action="",onSubmit,children}: formProps){
    return(
    <Form className={`${className}`} name={name} key={name} action={action} onSubmit={onSubmit}>
        {children}
    </Form>
    )
}