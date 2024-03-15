"use client"

import Link from "next/link"


export default function Tags() {
    
    let query : string

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


    if(typeof window !== 'undefined') {
         const params = new URL(window.location.href);
         query  = params.searchParams.get("q") as string
    
     
    }else {
        return
    }

 



    return (
        <>
        {query && tags.map((_tag) => (
            <Link key={_tag.path} href={`${process.env.NEXT_PUBLIC_URL as string}/${_tag.path}?q=${query}`} className="flex items-center justify-center gap-4 text-[#70758f] text-[15px]">{_tag.tag}</Link>
        ) )}
        </>
    )
}