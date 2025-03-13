import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"
import FileContextProvider from "@/ContextsProviders/FileContextProvider"

export default function AppLayout({children, title})
{
  
  return(
    <FileContextProvider>
      <Head title={title}/>
      <Nav/>
      <main className="grow-1 flex flex-col">
          {children}
      </main> 
    </FileContextProvider>
  )
}