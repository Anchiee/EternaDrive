import { Head, usePage } from "@inertiajs/react"
import { useState } from "react"

export default function Edit()
{
  const {auth, status} = usePage().props

  const date = new Date(auth.user.created_at)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  const formattedDate = `${year}-${month}-${day}`

  let [isHidden, setIsHidden] = useState(true)

  return(
    <>
      <Head title="Settings"/>
      <main className="min-h-screen">
        <section className="min-h-screen flex justify-center items-center">
          <div className="bg-white-300 pl-8 pr-19 py-6 rounded-md">

          {status && <p className="text-base my-1 text-center text-red-600">{status}</p>}
            
            {[
              {label: "Username", data: auth.user.name},
              {label: "Email", data: auth.user.email},
              {label: "Join date", data: formattedDate},
            ].map((dataPiece, index) => (
              <div key={index}>
                <div>
                  <h2 className="font-bold text-red-800">{dataPiece.label}</h2>

                  <div className="flex items-center justify-between gap-16">
                    <p>{dataPiece.data}</p>
                    {dataPiece.label !== "Join date" && <button 
                    className="bg-red-800 px-3 py-1 text-white-300 rounded-sm cursor-pointer
                    hover:bg-red-900 transition-all">Edit</button>}
                  </div>
                </div>
              </div>
            ))}
            
            
            <button 
            className="border-2 border-red-800 text-red-800 px-3 py-1 rounded-sm mt-4
            hover:bg-red-800 hover:text-white-300 transition-all cursor-pointer">Delete account</button>
          </div>
        </section>

        <section className="size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent-300">
          
          <div className="size-full flex justify-center items-center">
            <div className="bg-white-300 pl-8 pr-19 py-6 rounded-md">
              
            </div>
          </div>
        </section>

      </main>
    </>
  )
}