'use client'
import React from 'react'

import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { usePathname , useSearchParams} from 'next/navigation';



function SearchInput() {
  const [search , setSearch] = useState<string>('');
  const router = useRouter()
  const path = usePathname();
  const params = useSearchParams()
  const ROUTES : string [] = ['/search' , '/images']
  const query = params.get('q') as string

  useEffect(() => {
   
    
    if(ROUTES.includes(path)){
      
    setSearch(query)
    console.log('linea 37 componente search input ' + path)

    
    }
 
  } , [query])




 
  function handleSearchinput(e : React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    setSearch(value)
    
  

  }


  
  

  function handleToSearch (e : React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
     const querySearch = search
     if(querySearch !== "") {
      router.replace('/search?q=' + search)
     }else {
      return
     }
     
    }





  

  }

  return(
    <div className='flex mb-[35px] relative h-[40px] w-[550px] rounded-[25px] border border-slate-100 shadow-sm'>
    <input className="bg-trasparent text-[15px] font-normal outline-none ml-8" type="text" placeholder='search someone ....' 
    value={search}
    onChange={handleSearchinput}
    onKeyUp={handleToSearch}
    />
   </div>
  )
}



export default SearchInput