"use client"



import {  useSearchParams } from "next/navigation";
import Results from "../../Components/Results";
import { Suspense } from "react";


function PageSearch() {

const params = useSearchParams()
const query = params.get('q') as string

return (
         
       
     
       
       <Suspense fallback={<>Loading...</>}>
        
        <Results query={query}/>
        
       </Suspense>
     
       
)
}

export default PageSearch