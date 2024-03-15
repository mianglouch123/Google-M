"use client"


import Results from "../Components/Results";
import {  useSearchParams } from "next/navigation";

function Search() {

const params = useSearchParams()
const query = params.get('q') as string



return (
    <div className="h-100vh w-100vw flex justify-center items-center flex-col p-4 pl-[15px]">
        

        <Results query={query}/>
    </div>
)
}

export default Search