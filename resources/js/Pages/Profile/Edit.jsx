import { usePage, Head } from "@inertiajs/react"
import { useContext, useState } from "react"
import useUser from "@/Hooks/useUser"
import Input from "@/Components/Input"
import EditUserLayout from "@/Layouts/EditUserLayout"
import SolidButton from "@/Components/SolidButton"
import ErrorMessage from "@/Components/ErrorMessage"
import { AnimatePresence } from "motion/react"
import EditProfile from "@/Components/EditProfile"
import { popUpContext } from "@/Contexts/popup"


export default function Edit()
{
  const {auth, status} = usePage().props
  const {isHidden, setIsHidden, popUpOption, setPopUpOption} = useContext(popUpContext)

  const {onSubmit, errors, setData} = useUser({
    "password": ""
  })

  const date = new Date(auth.user.created_at)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  const formattedDate = `${year}-${month}-${day}`



  return(
    <>
      <Head title="Settings"/>
        <main>
          <section className="min-h-screen flex justify-center items-center">
            <div className="bg-white-300 pl-8 pr-19 py-6 rounded-md">

            {status && <p className="text-base my-1 text-center text-red-600">{status}</p>}
              
              {[
<<<<<<< HEAD
                {label: "Name", data: auth.user.name},
                {label: "Email", data: auth.user.email},
                {label: "Password", data: "******"},
=======
                {label: "Username", data: auth.user.name},
                {label: "Email", data: auth.user.email},
>>>>>>> 996d7fcecc04e6998b073fc56b9c1f43651b0119
                {label: "Join date", data: formattedDate},
              ].map((dataPiece, index) => (
                <div key={index}>
                  <div>
                    <h2 className="font-bold text-red-800">{dataPiece.label}</h2>

                    <div className="flex items-center justify-between gap-16">
                      <p>{dataPiece.data}</p>

                      {dataPiece.label !== "Join date" && <button 
                      className="bg-red-800 px-3 py-1 text-white-300 rounded-sm cursor-pointer
                      hover:bg-red-900 transition-all" onClick={() => setPopUpOption(dataPiece.label)}>Edit</button>}
                    </div>
                  </div>
                </div>
              ))}
              
              
              <button 
              className="border-2 border-red-800 text-red-800 px-3 py-1 rounded-sm mt-4
              hover:bg-red-800 hover:text-white-300 transition-all cursor-pointer"
              onClick={() => setIsHidden(prev => !prev)}>Delete account</button>
            </div>
          </section>

          {/*delete account dialog*/}
          <AnimatePresence>
            {!isHidden &&
            <EditUserLayout onSubmit={(e) => onSubmit(e, "/settings", "delete")}>
              <h1 className="font-bold text-red-800 tracking-wider my-3">CONFIRM THE ACTION</h1>
              <label htmlFor="password">Password</label>
              <Input InputId="password" InputOnChange={(e) => setData("password", e.target.value)} InputType="password"/>
              {errors.password && <ErrorMessage message={errors.password}/>}

              <div className="flex gap-10 my-3">
                <button type="button" className="cursor-pointer" onClick={() => setIsHidden(prev => !prev)}>Close</button>
                <SolidButton ButtonType="submit" ButtonText="Confirm"/>
              </div>
            </EditUserLayout>}
          </AnimatePresence>

          {/*edit credentials dialog*/}
          <AnimatePresence>
            {popUpOption &&
                <EditProfile option={popUpOption}/>
            }
          </AnimatePresence>

        </main>
        
    </>
      
  )
}