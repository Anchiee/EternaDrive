import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"

export default function AppLayout({children, title})
{
  
  return(
  <>
      <Head title={title}/>
      <Nav/>
      <main className="min-h-full">
          {children}
      </main>
  </>
  )
}