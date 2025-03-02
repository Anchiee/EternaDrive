import AppLayout from "@/Layouts/AppLayout"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage, Link } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { Plus, Clock, Star, Columns2, ImageIcon, VideoIcon, Music2Icon, FileIcon, Trash, Download, X } from "lucide-react"

export default function Dashboard() {
  const { errors, fileRequest, data, setData } = useUser({
    file: ""
  })
  let [hoveredIndex, setHoveredIndex] = useState(true)

  const { files } = usePage().props
  const { url } = usePage()

  useEffect(() => {
    if (data.file) {
      fileRequest("/file")
    }
  }, [data.file])

  const getFileIcon = (type) => {

    if (type.startsWith("image")) return <ImageIcon size={20} />

    else if (type.startsWith("video")) return <VideoIcon size={20} />

    else if (type.startsWith("audio")) return <Music2Icon size={20} />

    else return <FileIcon size={20} />

  }
  const getFileSize = (size) => {
    let fullName = null

    if(size / 1024 / 1024 >= 1) {
      fullName = `${(size / 1024 / 1024).toFixed(1)} MB`
    }
    else {
      fullName = `${(size / 1024).toFixed(1)} KB` 
    }
    return fullName
  }


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
              <th className="px-6 py-3">Uploaded at</th>
              <th className="px-6 py-3">Modified at</th>
              <th className="px-6 py-3">Actions</th>
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

                return (
                  <tr key={index} className="text-white-300 border-b-[1px] border-y-grayTransparent-700 text-[.8rem] cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <td className="px-6 py-7 font-bold flex items-center gap-2">
                      {getFileIcon(file.file_type)}
                      {file.name}
                    </td>
                    <td className="px-6">{getFileSize(file.size)}</td>
                    <td className="px-6">{uploadDate}</td>
                    <td className="px-6">{changeDate}</td>
                    
                    {hoveredIndex === index &&
                    <td className="px-6 flex items-center gap-4">
                      <Link method="delete" className="cursor-pointer" href={route("file.delete", {file: files[index]})}>
                        <Trash size={15}/>
                      </Link>

                      <Link method="get" className="cursor-pointer" href={route("file.download", {file: files[index]})}>
                        <Download size={15}/>
                      </Link>

                      <Link method="put" className="cursor-pointer" href={route("file.setFavorite", {file: files[index]})}>
                        {file.is_favorite ? <X size={15}/> : <Star size={15}/>}
                      </Link>
                    </td>}
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