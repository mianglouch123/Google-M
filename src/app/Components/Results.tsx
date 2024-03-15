"use client"
import Tags from './Tags';
import { ApiResponse } from '../types/results.type'
import {useEffect, useState} from 'react'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { type } from 'os';



interface ResultProps {
    query : string
}




 function Results({query} : ResultProps) {
    const [results , setResults] = useState<ApiResponse["results"]>([])
    const [panel , setPanel] = useState<ApiResponse["knowledge_panel"][]>([])
    const [kewords , setKeyWords] = useState<ApiResponse["related_keywords"][]>([])
    useEffect(() => {



        async function fetchResults(query : string) : Promise<void> {

        
            const BASE_URL : string = `https://google-web-search1.p.rapidapi.com/?query=${query}&limit=20&related_keywords=true`
            const options = {
             method: 'GET',
             headers: {
                 'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_RAPID_KEY as string,
                 'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_RAPID_HOST as string
             }
         };
         
         
         const response =  await fetch(BASE_URL , options)
         const data =  await response.json() as ApiResponse

         console.log(data)

         setResults(data.results)

         if( (!Array.isArray(data.knowledge_panel) ) && ( !Array.isArray(data.related_keywords.keywords) ) 
         
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

    <>

   <div className="flex items-center justify-center pt-[15px]">
         {panel?.map((info) => (
            <div key={uuidv4()} className="flex items-center justify-center gap-4 flex-col">
                

                <div className='flex gap-4'>
                {info.info.map((title) => (
                    <div className='flex border rounded-[25px]  outline-none p-2 bg-white text-semibold items-center justify-center' key={uuidv4()}>
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
            <p>relationed content</p>
           </div>
            {
            kewords?.map((content) => (
                <div className='grid grid-cols-3 pt-3 justify-center items-start flex-col gap-2' key={uuidv4()}>
                    {content.keywords.map((key) => (
                        <div>
                        <p  className='bg-white cursor-pointer border boder-[#5f6368] p-2 text-normal text-[#5f6369]' key={uuidv4()}>{key.keyword}</p>

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
    
    </>


)


}


export default Results