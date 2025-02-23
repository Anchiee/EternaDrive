import AppLayout from "@/Layouts/AppLayout"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage } from "@inertiajs/react"


export default function Dashboard()
{
  const {setData, errors, onSubmit } = useUser({
    file:""
  })

  const {files} = usePage().props


  return(
    <>
      <AppLayout title="Dashboard">

        <form onSubmit={(e) => onSubmit(e, "/file")} className="bg-white-300">
          <input type="file" onChange={(e) => setData("file", e.target.files[0])}/>
          {errors.file && <ErrorMessage message={errors.file}/>}
          <button type="submit">Submit</button>
        </form>

        <section className="bg-white">
          {
            files.map(file => (
              <div key={file}>
                <h1>{file.name}</h1>
                <h1>{file.size}</h1>
                <h1>{file.file_type}</h1>

              </div>
            ))
          }
        </section>
        
      </AppLayout>
    </>
    
  )
}