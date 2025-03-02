import AppLayout from "@/Layouts/AppLayout"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage, Link } from "@inertiajs/react"
import { useEffect } from "react"
import { Plus, Clock, Star, Columns2 } from "lucide-react"

export default function Dashboard() {
  const { errors, fileRequest, data, setData } = useUser({
    file: ""
  })

  const { files } = usePage().props
  const { url } = usePage()

  useEffect(() => {
    if (data.file) {
      fileRequest("/file")
    }
  }, [data.file])


  return (
    <>
      <AppLayout title="Dashboard">

        <section className="flex gap-5 my-5 grow-1">
          <nav className="flex flex-col border-r-[1px] border-r-grayTransparent-700 pr-10">

            <label
              htmlFor="file"
              className="border-2 border-red-800 rounded-md text-red-700 px-4 py-2 hover:bg-red-800 hover:text-white-300 
            cursor-pointer transition-colors mt-5 flex items-center">
              <Plus className="inline" />
              New
            </label>

            <input type="file" onChange={(e) => setData("file", e.target.files[0])} id="file"
              className="fixed right-full bottom-full" />

            <section className="flex flex-col gap-3 text-white-300 mt-10">
              {
                [
                  { page: "All", component: <Columns2 size={16} />, route: route("file.index", { "type": "all" }), param: "all" },
                  { page: "Recent", component: <Clock size={16} />, route: route("file.index", { "type": "recent" }), param: "recent" },
                  { page: "Favorite", component: <Star size={16} />, route: route("file.index", { "type": "favorites" }), param: "favorites" },
                ].map(tab => (


                  <Link key={tab.page}
                    className={`flex items-center gap-2 px-3 py-1
                      ${url === `/dashboard/${tab.param}` ? " bg-red-800 rounded-md" : ""}`
                    }
                    href={tab.route}>
                    {tab.component}
                    {tab.page}
                  </Link>

                ))

              }
            </section>
          </nav>

          {errors.file && <ErrorMessage message={errors.file} />}

            <table className="size-full text-sm text-left rtl:text-right table-fixed">
              <thead className="border-b-[1px] border-b-grayTransparent-700 text-xs uppercase">
                <tr className="text-red-800">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Size</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Uploaded at</th>
                  <th className="px-6 py-3">Modified at</th>
                </tr>
              </thead>
              <tbody>
                {
                  files.map((file, index) => {
                    

                    const createDate = new Date(file.created_at)
                    const createYear = createDate.getFullYear()
                    const createMonth = String(createDate.getMonth() + 1).padStart(2, "0")
                    const createDay = String(createDate.getDate()).padStart(2, "0")

                    const uploadDate = `${createYear}-${createMonth}-${createDay}`

                    const updateDate = new Date(file.updated_at)
                    const updateYear = updateDate.getFullYear()
                    const updateMonth = String(updateDate.getMonth() + 1).padStart(2, "0")
                    const updateDay = String(updateDate.getDate()).padStart(2, "0")

                    const changeDate = `${updateYear}-${updateMonth}-${updateDay}`

                    const size = file.size / 1024 / 1024

                    return(
                      <tr key={index} className="text-white-300 border-b-[1px] border-y-grayTransparent-700 text-[.8rem]">
                        <td className="px-6 py-7 font-bold">{file.name}</td>
                        <td className="px-6">{`${size.toFixed(1)} MB`}</td>
                        <td className="px-6">{file.file_type}</td>
                        <td className="px-6">{uploadDate}</td>
                        <td className="px-6">{changeDate}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
              
            </table>
          </section>


      </AppLayout>
    </>

  )
}