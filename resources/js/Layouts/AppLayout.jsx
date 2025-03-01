import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"

export default function AppLayout({children, title})
{
  
  return(
  <>
      <Head title={title}/>
      <Nav/>
      <main className="grow-1 flex flex-col">
          {children}
      </main>
  </>
  )
}