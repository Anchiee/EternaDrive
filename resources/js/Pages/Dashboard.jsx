import AppLayout from "@/Layouts/AppLayout"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react"
import { Plus, Clock, Star, Columns2 } from "lucide-react"

export default function Dashboard()
{
  const {errors, fileRequest, data, setData} = useUser({
    file:""
  })

  const {files} = usePage().props

  useEffect(() => {
    if(data.file) {
      fileRequest("/file")
    }
  }, [data.file])


  return(
    <>
      <AppLayout title="Dashboard">

        <section className="flex gap-5 mt-5">
          <nav className="flex flex-col border-r-2 border-r-gray-800 pr-10">

            <label 
            htmlFor="file" 
            className="border-2 border-red-800 rounded-md text-red-700 px-4 py-2 hover:bg-red-800 hover:text-white-300 
            cursor-pointer transition-colors mt-5 flex items-center">
              <Plus className="inline"/>
              New
            </label>

            <input type="file" onChange={(e) => setData("file", e.target.files[0])} id="file" 
              className="fixed right-full bottom-full"/>

              <section className="flex flex-col gap-3 text-white-300 mt-10">
                {
                  [
                    {page: "All", component: <Columns2 size={16}/>},
                    {page: "Recent", component: <Clock size={16}/>},
                    {page: "Favorites", component: <Star size={16}/>},
                  ].map(tab => (

                    <p key={tab.page} className="flex items-center gap-2">
                      {tab.component}
                      {tab.page}
                    </p>
                  
                ))
                }
              </section>
          </nav>
          
          {errors.file && <ErrorMessage message={errors.file}/>}

          <section className="bg-white">
            {
              files.map((file, index) => (
                <div key={index}>
                  <h1>{file.name}</h1>
                  <h1>{file.size}</h1>
                  <h1>{file.file_type}</h1>

                </div>
              ))
            }
          </section>

        </section>

       
        
      </AppLayout>
    </>
    
  )
}