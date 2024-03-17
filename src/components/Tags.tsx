"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface TagObject {
    tag : string ,
    path : string
 }



 function Tags() {
   const path = usePathname()  as string
  const term = path.split('/').filter(term => term !== "")[1] as string
    

     const tags : Array<TagObject> = [
        {
            tag : 'Todo',
            path : '/search'
        
        } 
       ]

 



    return (
        <>
        {term && tags.map((_tag) => (
            <Link key={_tag.path} href={`${process.env.NEXT_PUBLIC_URL as string}/${_tag.path}/${term}`} className="flex items-center justify-center gap-4 text-[#70758f] text-[15px]">{_tag.tag}</Link>
        ) )}
        </>
    )
}


export default Tags