"use client"



import Results from "../../Components/Results";
import { Suspense } from "react";


function PageSearch() {
let query



if(typeof window !== undefined) {
       const url = new URL(window.location.href)
       query = url.searchParams.get('q') as string
       console.log(query)
}else {
       return 
}

return (
         
       
     
       
       <Suspense fallback={<>Loading...</>}>
        
        <Results query={query}/>
        
       </Suspense>
     
       
)
}

export default PageSearch