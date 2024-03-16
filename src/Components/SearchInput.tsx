'use client'
import React from 'react'

import { useState} from 'react'
import { useRouter } from 'next/navigation';



function SearchInput() {
  const [search , setSearch] = useState<string>('');


  const router = useRouter()


  function handleSearchinput(e : React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    setSearch(value)
    
  }


  
 

  function handlePushRoute(e : React.FormEvent) {
   e.preventDefault()
    
   const querySearch = search
   if(querySearch !== "") {
    router.replace(`/search/${search}`)
   }else {
    return
   }


  }
  return(
    <form onSubmit={handlePushRoute} className='flex mb-[35px] relative h-[40px] w-[550px] rounded-[25px] border border-slate-100 shadow-sm'>
    <input className="bg-trasparent text-[15px] font-normal outline-none ml-8" type="text" placeholder='search someone ....' 
    value={search}
    onChange={handleSearchinput}
    />
   </form>
  )
}



export default SearchInput