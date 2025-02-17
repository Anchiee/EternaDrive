import Nav from "@/Components/Nav"

export default function AppLayout({children})
{
  return(
    <>
      <Nav/>
      <main className="min-h-full">
        {children}
      </main>
    </>

  )
}