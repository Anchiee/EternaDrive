import Nav from "@/Components/Nav"

export default function AppLayout({children})
{
  return(
    <>
      <Nav/>
      <main className="size-full">
        {children}
      </main>
    </>

  )
}