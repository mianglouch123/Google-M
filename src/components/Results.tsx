"use client"

import {useEffect, useState} from 'react'
import { ApiResponse } from 'types/results.type';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';


interface ResultProps {
    query : string
}




 function Results({query} : ResultProps) {
    const [results , setResults] = useState<ApiResponse["results"]>([])
    const [panel , setPanel] = useState<ApiResponse["knowledge_panel"][]>([])
    const [kewords , setKeyWords] = useState<ApiResponse["related_keywords"][]>([])
    useEffect(() => {



        async function fetchResults(query : string) : Promise<void> {

        
    const BASE_URL = 'https://google-search72.p.rapidapi.com/search?q=word%20cup&gl=us&lr=lang_en&num=10&start=0';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a081713884mshdc8ef8a71ad83d2p14d50ajsnfb069f5e22e4',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};
         
         
         const response =  await fetch(BASE_URL , options)
         const data =  await response.json() as ApiResponse

        console.log(data)
         setResults(data.results)

         if( (!Array.isArray(data?.knowledge_panel) ) && ( !Array.isArray(data?.related_keywords?.keywords) ) 
         
         || 

         typeof (data.knowledge_panel && data.related_keywords) === 'object'
         
         )
         setPanel([data.knowledge_panel])
         setKeyWords([data.related_keywords])
        
         
        }

        fetchResults(query)

        
    }, [query])
   


    console.log(results)
 
 return (

  <div className="h-100vh w-100vw flex justify-center items-center flex-col p-4 pl-[15px]">
    

    

   <div className="flex items-center justify-center pt-[15px]">
         {panel?.map((info) => (
            <div key={uuidv4()} className="flex items-center justify-center gap-4 flex-col">
                

                <div className='flex gap-4'>
                {info?.info?.map((title) => (
                    <div key={uuidv4()}  className='flex border rounded-[25px]  outline-none p-2 bg-white text-semibold items-center justify-center'>
                        <p className='cursor-pointer font-semibold opacity-80'>{title.title}</p>
                    </div>
                ) )}

                </div>
              
                
            
            <div className='h-[100px] w-[620px]'>
            <p className='text-normal text-[14px] text-[#5f6368]'>{info?.description?.text}</p>

           </div>           
        </div>
         ))}
        </div>


     <div className='h-container w-full flex items-center ml-2 justify-center flex-col gap-4'>
           <div className='font-bold'>
            {results && <p className=''>relationed content</p>}
           </div>
            {
            kewords?.map((content) => (
                <div key={uuidv4()} className='grid grid-cols-3 pt-3 justify-center items-start flex-col gap-2'>
                    {content?.keywords?.map((key) => (
                        <div  key={uuidv4()}>
                        <p className='bg-white cursor-pointer border boder-[#5f6368] p-2 text-normal text-[#5f6369]'>{key.keyword}</p>

                        </div>
                    ))}
                </div>
            ))
            }
    

     </div>


    
   <div className='h-container w-full flex items-start justify-center mt-[35px] flex-col gap-4'>
     
     
   


    {results?.map((content) => (
        <div key={uuidv4()} className='flex items-start justify-center flex-col mt-[25px]'>
       
          <Link href={content.url} className='text-[#3842b3] cursor-pointer text-[15px]'>{content.url}</Link>
          <p className='font-normal text-[#5f6368]'>{content.title}</p>
        
         
        
        </div>
    ))}
   </div>
    
    </div>


)


}


export default Results