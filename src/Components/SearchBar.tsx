import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchInput from './SearchInput'

function SearchBarIndex() {
  return (
   
    <>
    <div className='flex h-[40px] w-[100%] bg-white justify-end  '>
    <ul className='flex gap-2 mr-16 font-normal text-[13px] mt-5 pointer-none gap-4'>
      <li>Gmail</li>
      <li>Images</li>
      <li>Photo</li>
    </ul>
  </div>

  <div className='flex flex-col mt-4 items-center justify-center gap-4'>
      <div>
      <Image src="https://1000marcas.net/wp-content/uploads/2020/02/Google-Logo.png"
      height={450}
      width={290}
      alt="google navbar img"
      className='object-cover'
      />
      </div>

      <SearchInput />

      <div className='flex flex-col gap-4 justify-center items-center h-[50px] w-[50px] rounded-[50%] bg-[#f8f9fa]' >  
       <p className='font-[500] text-[25px] text-black opacity-85'>+</p>
      </div>
      <p className='text-[15px]'>Agregar acceso directo...</p>
  </div>

     
    </>
   
       
  )
}


export default SearchBarIndex