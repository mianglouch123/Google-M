"use client"

import SearchBarIndex from "./SearchBar"
import Tags from "./Tags"
import { usePathname } from "next/navigation"
import SearchBarByOtherPages from "./SearchBarByOtherPages"
import { useState , useEffect } from "react"


function Navigation() {
 
 const [indexPath , setIsIndexPath] = useState<boolean>(false)
 const pathname = usePathname()



useEffect(() => {

    if(pathname === '/') {
        setIsIndexPath(true)
    } 
    else if( !['/search'].includes(pathname) ) {
        setIsIndexPath(false)
    } else {
        setIsIndexPath(false)
    }


}, [indexPath, pathname])

    return (
        <div className="flex justify-center	items-center h-100vh w-100vw flex-col">
         {
            indexPath ?
            (
            <SearchBarIndex />
            ) :(
             
           <>
           <SearchBarByOtherPages />
           <div className="flex items-center justify-center gap-4">
            <Tags />
           </div>
           </>
            

            )
         }        
            </div>

    )
}


export default Navigation