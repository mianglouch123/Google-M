
import SearchBarByOtherPages from "../../componentss/SearchBarByOtherPages"
import Tags from '../../componentss/Tags'
function PageLayout (
  {children} : {children : React.ReactNode}
  
  
  ) {
return (
<div className="flex justify-center	items-center h-100vh w-100vw flex-col">  
<SearchBarByOtherPages />
<Tags />
{children}

</div>
)
}

export default PageLayout