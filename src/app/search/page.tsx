"use client"



import {  useSearchParams } from "next/navigation";
import Results from "../../Components/Results";
import { Suspense } from "react";


function Search() {

const params = useSearchParams()
const query = params.get('q') as string
      
      
      return (
<div className="h-100vh w-100vw flex justify-center items-center flex-col p-4 pl-[15px]">

<Results query={query}/>

</div>
       )
}

function PageSearch() {

return (
        
       <Suspense>
        
       <Search />
       </Suspense>
)
}

export default PageSearch