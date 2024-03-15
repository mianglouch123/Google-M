"use client"

import {useState , useEffect} from 'react'
import { usePathname} from 'next/navigation'

function useGetPathForSearchBar() {


    const currentPath = usePathname()
    const params = new URL(window.location.href)
    const queryParams = params.searchParams.get('q') as string
    const [isIndexPath , setIsIndexPath] = useState<boolean>(false);
    
    useEffect(() => {
        if(currentPath === '/' && !queryParams) {
            setIsIndexPath(true)
          }
          else if(['/search' , '/images '].includes(currentPath)) {
            setIsIndexPath(false)
          }
          else {
            setIsIndexPath(false)
          }




    } , [queryParams])

   


    
    return {
        isIndexPath
    }
}

export default useGetPathForSearchBar