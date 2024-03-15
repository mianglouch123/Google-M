"use client"



import {  useSearchParams } from "next/navigation";
import Results from "../../Components/Results";
import { Suspense } from "react";


function PageSearch() {

const params = useSearchParams()
const query = params.get('q') as string

return (
         
     <div>
       
       {
       !query && <p>not has query search</p>
       }
       
       <Suspense fallback={<>Loading...</>}>
        
        <Results query={query}/>
        
       </Suspense>
     
     </div>
       
)
}

export default PageSearch