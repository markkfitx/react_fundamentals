"use client"
import Card from "@/components/card"
import {useState} from "react"
export default function Hooks(){
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount((prev) => prev +1)
    }
    const decrement = () => {
        setCount((prev) => prev - 1)
    }
    return (
        <div className="bg-grey-900 w-auto inline-block h-[200px]">
            <Card title="Counter">
                <div className="flex flex-col gap-3 justify-center align-center">
                    <span className="text-md text-center">{count}</span>
                    <div className="flex flex-row gap-3 px-3">
                        <button className="btn btn-sm rounded bg-gray-900 text-white py-1 px-3" onClick={() => increment()}>Increment</button>
                        <button className="btn btn-sm rounded bg-gray-900 text-white py-1 px-3" onClick={() => decrement()}>Decrement</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}