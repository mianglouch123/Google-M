
import Results from "@/Components/Results"



function SearchTermPage(

    {params} : {params : {searchTerm : string}}
) {


    return (
       <Results query={params.searchTerm}/>
    )
}


export default SearchTermPage