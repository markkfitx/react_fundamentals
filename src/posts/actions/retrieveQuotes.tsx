'use server'
 
export async function RetrieveQuotes(index: string) {
    const idx = Number.parseInt(index,10)
    if(!Number.isInteger(idx) || idx < 1) return "Please provide a non-negative number."
    try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(`https://dummyjson.com/quotes?limit=1&skip=${idx}`, {cache: 'no-store'})
        if (response.status === 404) return `No quote with id ${idx}.`
        if (!response.ok) throw new Error(`Request failed (${response.status})`)
        const data = await response.json();
        if (!data.quotes?.length) return `Index ${idx} is out of range (1 to ${data.total}).`
        return data.quotes[0].quote
    }catch(error){
        console.log(error);
        throw error;
    }
}