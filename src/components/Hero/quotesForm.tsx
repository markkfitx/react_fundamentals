"use client"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CustomForm from "@/components/form"
import { RetrieveQuotes } from "@/posts/actions/retrieveQuotes"

type Props = { onQuote: (q: string) => void }
export default function QuotesForm({onQuote}: Props) {
  const [quoteIndex, setQuoteIndex] = useState("")

  // action(prevState, formData)
  async function formAction(_prev: string, formData: FormData) {
    const idx = (formData.get("quoteIdx") as string) ?? ""
    setQuoteIndex(idx)
    const quote = await RetrieveQuotes(idx) // or pass formData if your action expects it
    console.log(quote)
    onQuote(String(quote))
    return "" // new state if you need it
  }

  const [error, action, isLoading] = useActionState(formAction, "")

  return (
    <CustomForm className="flex flex-row gap-2 items-center justify-center w-full" name="quotesForm" action={action}>
        <Input type="text" name="quoteIdx" id="quoteIdx" className="w-[50%]" placeholder="Insert a number please..." defaultValue={quoteIndex} />
        <Button variant="secondary" type="submit" disabled={isLoading}>
            {isLoading ? "Retrieving..." : "Submit"}
        </Button>
    </CustomForm>
  )
}
