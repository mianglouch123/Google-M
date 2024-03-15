"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"


export default function Tags() {
 

    const params = useSearchParams();
    const query  = params.get("q") as string

     interface TagObject {
        tag : string ,
        path : string
     }

   const tags : Array<TagObject> = [
    {
        tag : 'Todo',
        path : '/search'
    
    } 
   ]



    return (
        <>
        {query && tags.map((_tag) => (
            <Link key={_tag.path} href={`${process.env.NEXT_PUBLIC_URL as string}/${_tag.path}?q=${query}`} className="flex items-center justify-center gap-4 text-[#70758f] text-[15px]">{_tag.tag}</Link>
        ) )}
        </>
    )
}