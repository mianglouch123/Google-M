"use client"



import Results from "../../Components/Results";
import { Suspense } from "react";


function PageSearch() {

const url = new URL(window.location.href)
const query = url.searchParams.get('q') as string
console.log(query)
return (
         
       
     
       
       <Suspense fallback={<>Loading...</>}>
        
        <Results query={query}/>
        
       </Suspense>
     
       
)
}

export default PageSearch