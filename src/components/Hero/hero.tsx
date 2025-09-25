"use client"
import {useState} from "react"
import QuotesForm from "@/components/Hero/quotesForm"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {X} from "lucide-react"

export default function Hero(){
    const [quote, setQuote] = useState<string | null>("")
    const [isVisible, setVisibility] = useState(false)
    const handleQuote = (q:string) =>{
        setQuote(q)
        quote && quote.trim().length > 0 ? setVisibility(true) : setVisibility(false);
    }
    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-20 gap-20">
            <div className="w-full flex flex-col items-center content-baseline text-center">
                <h1 className="text-[48px] uppercase font-bold text-white text-shadow-md">
                    Wel<span className="font-thin">come</span>
                </h1>
                <p className="text-xs text-white max-w-[75%] text-shadow-md">I am a Full-stack Software Engineer with 8+ years of experience delivering secure, scalable web applications.</p>
            </div>
            <QuotesForm onQuote={handleQuote} />
            {isVisible && (
                <Alert variant="default" className="absolute top-0 mt-5 w-[500px]">
                    <button onClick={() => setVisibility(false)} className="mr-2 mt-2 text-gray-500 hover:text-gray-800 text-shadow-sm absolute top-0 right-0">
                        <X size={18} />
                    </button>
                    <AlertTitle className="font-semibold capitalize">Todays Quote!</AlertTitle>
                    <AlertDescription className="text-center justify-items-center text-xs mt-1">
                        "{quote}"
                    </AlertDescription>
                </Alert>
            )}
        </div>

    )
}