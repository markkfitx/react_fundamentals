"use client"
import {useState} from "react"
import QuotesForm from "@/components/Hero/quotesForm"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Hero(){
    const [quote, setQuote] = useState<string | null>("")
    
    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-20 gap-20">
            <div className="w-full flex flex-col items-center content-baseline text-center">
                <h1 className="text-[48px] uppercase font-bold text-white text-shadow-md">
                    Wel<span className="font-thin">come</span>
                </h1>
                <p className="text-xs text-white max-w-[75%] text-shadow-md">I am a Full-stack Software Engineer with 8+ years of experience delivering secure, scalable web applications.</p>
            </div>
            <QuotesForm onQuote={(q) => setQuote(q)} />
            {quote && quote.trim().length > 0 && (
                <Alert variant="default" className="absolute top-0 mt-5 w-[500px]">
                    <AlertTitle className="font-semibold capitalize">Random Quote Picker</AlertTitle>
                    <AlertDescription className="text-center justify-items-center">
                        {quote}
                    </AlertDescription>
                </Alert>
            )}
        </div>

    )
}