
import Results from '../../../components/Results'

function SearchTermPage(

    {params} : {params : {searchTerm : string}}
) {


    return (
       <Results query={params.searchTerm}/>
    )
}


export default SearchTermPage