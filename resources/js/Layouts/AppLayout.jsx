import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"
import PopUpProvider from "@/ContextsProviders/PopUpProvider"

export default function AppLayout({children, title})
{
  return(
  <>
      <Head title={title}/>
      <Nav/>
      <main className="min-h-full">
        <PopUpProvider>
          {children}
        </PopUpProvider>
      </main>
  </>
      

  )
}