import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"
import PropTypes from "prop-types"
import SortableFilesProvider from "@/ContextsProviders/FileContextProvider"

export default function AppLayout({children, title, description})
{
  
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
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
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}