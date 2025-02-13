import { Head } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
export default function Home()
{
  return (

    <>
      <Head title="Home"/>
      <AppLayout>
        <section className="flex  items-center h-full">

          <div>
            <h1 className="font-bold text-red-800 text-xl tracking-wider">OFTEN WORRY ABOUT YOUR MEMORY?</h1>
            <p className="text-white-300 text-xs">with Eternadrive you won't have to be scared about that.</p>
          </div>
        </section>
      </AppLayout>
    </>

  )
}