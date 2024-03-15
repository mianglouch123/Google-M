"use client"


import Results from "../Components/Results";
import {  useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Search() {

const params = useSearchParams()
const query = params.get('q') as string



return (
        
       <Suspense>
        <div className="h-100vh w-100vw flex justify-center items-center flex-col p-4 pl-[15px]">

        <Results query={query}/>
        
        </div>

       </Suspense>
)
}

export default Search