"use client"

import {useState , useEffect} from 'react'
import { usePathname , useSearchParams } from 'next/navigation'

function useGetPathForSearchBar() {


    const currentPath = usePathname()
    const params = useSearchParams()
    const queryParams = params.get('q') as string
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




    } , [currentPath])

   


    
    return {
        isIndexPath
    }
}

export default useGetPathForSearchBar