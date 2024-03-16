"use client"


import React from 'react'
import { useRouter} from 'next/navigation'
import Image from 'next/image';
import SearchInput from './SearchInput';

function SearchBarByOtherPages() {

  const router = useRouter();
  



 return (
    <div className='flex h-[100px] w-[100%] bg-white justify-around	 items-center'>
     <div className='flex ml-4 justify-center items-center gap-4'>
     <Image
     height={100}
     width={150}
     src="https://1000marcas.net/wp-content/uploads/2020/02/Google-Logo.png"
     alt='google img banner'
     className='object-cover mr-[7px] cursor-pointer'
     onClick={() => {
      router.push('/')
     }}
     ></Image>
    <div className='flex justify-center items-center mt-[33px] ml-[35px]'>
    
    <SearchInput />


    </div>

    
    <div className='flex justify-end items-center ml-[335px]'>
     <ul className='flex gap-4 justify-end items-center text-[15px]'>
      <li>icon</li>
       <li>Image</li>
     </ul>
    </div>

     </div>

     

    
    </div>
 )
}


export default SearchBarByOtherPages