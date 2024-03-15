"use client"

import getPathForSearchBar from "../CustomHooks/showSearchBarByPath"
import SearchBarIndex from "./SearchBar"
import SearchBarByOtherPages from "./SearchBarByOtherPages"
import { useEffect, useState } from "react"
function Navigation() {

const {isIndexPath} = getPathForSearchBar() 

console.log(isIndexPath)


    return (
        <div className="flex justify-center	items-center h-100vh w-100vw flex-col">
         {
            isIndexPath ?
            (
            <SearchBarIndex />
            ) :(
             
           <>
           <SearchBarByOtherPages />
           <div className="flex items-center justify-center gap-4">
           </div>
           </>
            

            )
         }        
            </div>

    )
}


export default Navigation