"use client"
import React from 'react'
import { useEffect , useState } from 'react';
import {  useSearchParams } from "next/navigation";
import { ApiResponseSearchImage } from '../types/images.search.type';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

function pageImages() {
  
  const [results , setResults] = useState<ApiResponseSearchImage["items"]>([])
  const params = useSearchParams()
  const query = params.get("q") as string
  
  useEffect(() => {
    async function fetchResults(query : string) : Promise<void> {

        
      const BASE_URL : string = `https://google-search72.p.rapidapi.com/imagesearch?q=${query}&gl=us&lr=lang_en&num=10&start=0`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a081713884mshdc8ef8a71ad83d2p14d50ajsnfb069f5e22e4',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      };
      
   
   
   const response =  await fetch(BASE_URL , options)
   const data =  await response.json() as ApiResponseSearchImage

   console.log(data)
   
  setResults(data.items)
  
   
  }

  fetchResults(query)
  } , [])


  console.log(results)
  return (
    <div className="h-100vh w-100vw grid grid-cols-5 justify-center items-start flex-col p-4">
      
     {results?.map((content) => (
        <div className='flex gap-5 items-center justify-center' key={uuidv4()}>
          <Image
          src={content.originalImageUrl}
          alt={`image by ${query} search`}
          height={content.height}
          width={content.width}
          className="object-cover"
          />
        </div>
      ) )} 
  </div>
  )
}

export default pageImages