"use client"
import {useState} from "react"
import QuotesForm from "@/components/Hero/quotesForm"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {X, ChevronRightIcon} from "lucide-react"
import Image from "next/image"
import reactIcon from "@/img/react-icon.png"
import nextIcon from "@/img/nextjs-icon.png"

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
                <p className="text-xs text-white max-w-[75%] text-shadow-md">I am a Frontend Software Engineer with 8+ years of experience delivering secure, scalable web applications.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-full">
                <QuotesForm onQuote={handleQuote} />
                {isVisible && (
                    <Alert variant="default" className="absolute top-0 mt-5 w-[500px]">
                        <button onClick={() => setVisibility(false)} className="mr-2 mt-2 text-gray-500 hover:text-gray-800 text-shadow-sm absolute top-0 right-0">
                            <X size={18} />
                        </button>
                        <AlertTitle className="font-semibold capitalize">Todays Quote!</AlertTitle>
                        <AlertDescription className="text-center justify-items-center text-xs mt-1">
                            {quote}
                        </AlertDescription>
                    </Alert>
                )}
                <div className="inline-flex items-center gap-x-2 rounded-full border-0 pr-1 pl-3 transition hero-pill shadow-md">
                    <span className="flex flex-row items-center gap-3 text-neutral-800 text-[10px] font-semibold">
                        Powered By:
                        <div className="ms-2 flex flex-row flex-nowrap justify-baseline items-center gap-2 h-7">
                            <Image alt="React Icon" src={reactIcon} className="w-4 text-shadow-md"/>
                            <Image alt="React Icon" src={nextIcon} className="w-9 text-shadow-md"/>
                        </div>
                    </span>
                    <svg
                        className="text-neutral-800 h-5 w-5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                        d="M6 13L10 3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        />
                    </svg>
                    <a
                        className="inline-flex items-center gap-x-1 text-neutral-800 text-[10px] font-medium decoration-2 hover:underline"
                        href="#"
                    >
                        View My Work
                        <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
                    </a>
                </div>
            </div>
        </div>
    )
}