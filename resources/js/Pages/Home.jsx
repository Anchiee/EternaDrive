import { Head } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"

export default function Home()
{

  return (

    <>
      <Head title="Home"/>
      <AppLayout>

        <section className="h-full flex flex-col">

          <section className="flex flex-row justify-between items-center h-full">
            <div>
              <h1 className="font-bold text-red-800 text-xl tracking-wider">OFTEN WORRIED ABOUT YOUR MEMORY?</h1>
              <p className="text-white-300 text-xs w-2/3">
                With Eternadrive, your precious memories and files are safe, secure, and always accessible—anytime, anywhere.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-red-800 text-xl tracking-wider">
                JOIN A THRIVING COMMUNITY OF SATISFIED USERS
              </h1>
              <p className="text-white-300 text-xs w-2/3">
                Discover why thousands trust Eternadrive to store, share, and protect what matters most.
              </p>
            </div>
          </section>

          <section className="text-white-300 text-3xl mb-20">
            TODO: ADD SOME NICE SCREENS WITH SOME NICE TEXT BELOW THE HEADERS
          </section>
         
        </section>

      </AppLayout>
    </>

  )
}