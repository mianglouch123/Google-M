
import Results from "@/components/Results"
function PageTerm( {params} : {params : {searchTerm : string}} ) {


    return (
       <Results query={params.searchTerm}/>
    )
}


export default PageTerm