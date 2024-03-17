import React from 'react'
import Results from 'componentss/Results'

export default function PageTerm( {params} : {params : {searchTerm : string}} ) {


    return (
       <Results query={params.searchTerm}/>
    )
}


