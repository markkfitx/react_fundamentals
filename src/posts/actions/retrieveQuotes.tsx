'use server'
 
export async function RetrieveQuotes(index: string) {
    if(index === null || index == "") return "No value was provided, please type in a number then submit the form!"
    try{
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await fetch('https://dummyjson.com/quotes')
        const json = await response.json();
        if(parseInt(index) > json.quotes.length) return `Please provide a valid number between 1 and ${json.quotes.length}`
        return json.quotes[index].quote
    }catch(error){
        console.log(error);
        throw error;
    }
}