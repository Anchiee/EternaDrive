import Nav from "@/Components/Nav"
import MetaData from "@/Components/MetaData"
import PropTypes from "prop-types"
import SortableFilesProvider from "@/ContextsProviders/FileContextProvider"

export default function AppLayout({children, title, description})
{
  
  return(
    <>
      <MetaData title={title} description={description}/>
      <SortableFilesProvider>
        <Nav/>
      </SortableFilesProvider>
      
      <main className="grow-1 flex flex-col">
          {children}
      </main> 
    </>
  )
}


AppLayout.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
}