"use client"

import {useState , useEffect} from 'react'
import { usePathname} from 'next/navigation'

function useGetPathForSearchBar() {

  
    const [isIndexPath , setIsIndexPath] = useState<boolean>(false);
    const currentPath = usePathname()
    let queryParams
    
    
    useEffect(() => {


      if(typeof window !== 'undefined') {
        const params = new URL(window.location.href)
       queryParams = params.searchParams.get('q') as string
      
       if(currentPath === '/' && !queryParams) {
        setIsIndexPath(true)
      }
      else if(['/search' , '/images '].includes(currentPath)) {
        setIsIndexPath(false)
      }
      else {
        setIsIndexPath(false)
      }

      
      
      } else {
        return
      }
        



    } , [queryParams])

   


    
    return {
        isIndexPath
    }
}

export default useGetPathForSearchBar