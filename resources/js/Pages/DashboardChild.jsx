import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage, Link } from "@inertiajs/react"
import { useEffect, useState, useContext } from "react"
import { SortableFilesContext } from "@/Contexts/Files"
import useFiles from "@/Hooks/useFiles"
import MobileDashboard from "@/Components/Mobile/Dashboard"
import { Plus, Clock, Star, Columns2, Trash, Download, X, Share2,
} from "lucide-react"


export default function DashboardChild() {
  const { errors, fileRequest, data, setData } = useUser({
    file: ""
  })

  const {sortableFiles, setSortableFiles} = useContext(SortableFilesContext)
  const { files, flash, auth, maxUsage } = usePage().props
  const { url } = usePage()
  const {sortIcons, onClickSort, onShareClick, shareIcons, getFileIcon, getFileSize, getFormattedDate} = useFiles(files)
  
  const user = auth.user
  const signedUrl = flash.signedUrl



  let [hoveredIndex, setHoveredIndex] = useState(true)


  useEffect(() => {
    if(signedUrl) {
      navigator.clipboard.writeText(signedUrl)
    }
  }, [signedUrl])

  useEffect(() => {
    if (data.file) {
      fileRequest("/file")
    }

  }, [data.file])

  useEffect(() => {
    
    setSortableFiles(files)
    console.log(sortableFiles)
  }, [files])




return (
  <>
    <MobileDashboard/>
      <section className="hidden md:flex gap-5 my-5 grow-1">
        <nav className="flex-col border-r-[1px] border-r-grayTransparent-700 pr-10">

          <label
            htmlFor="file"
            className="border-2 border-red rounded-md text-red px-4 py-2 hover:bg-red-700 hover:text-white-300 
            hover:border-red-700 cursor-pointer transition-colors mt-5 flex items-center">
            <Plus className="inline" />
            New
          </label>

          <input type="file" onChange={(e) => setData("file", e.target.files[0])} id="file"
            className="fixed right-full bottom-full" />
          {errors.file && <ErrorMessage message={errors.file}/>}

          <section className="flex flex-col gap-3 text-white-300 mt-10">
            {
              [
                { page: "All", component: <Columns2 size={16} />, route: route("file.index", { "type": "all" }), param: "all" },
                { page: "Recent", component: <Clock size={16} />, route: route("file.index", { "type": "recent" }), param: "recent" },
                { page: "Favorite", component: <Star size={16} />, route: route("file.index", { "type": "favorites" }), param: "favorites" },
              ].map(tab => (


                <Link key={tab.page}
                  className={`flex items-center gap-2 px-3 py-1
                      ${url === `/dashboard/${tab.param}` ? " bg-red-700 rounded-md" : ""}`
                  }
                  href={tab.route}>
                  {tab.component}
                  {tab.page}
                </Link>
              ))    
            }
            <div className="w-full h-2 bg-gray-400 rounded-md">
                <div className="bg-red h-2 rounded-md" style={{width: `${user.memory_usage / maxUsage * 100}%`}}>
                </div>
            </div>
            <p className="text-xs">{(user.memory_usage / 1024 / 1024).toFixed(2)}MB used out of {maxUsage / 1024 / 1024}MB</p>
          </section>
        </nav>

        
        <div className="flex flex-col min-h-0">
          <div className="overflow-y-auto max-h-[50rem]">
            <table className="size-full text-sm text-left table-fixed w-full ">
              <thead className="border-b-[1px] border-b-grayTransparent-700 text-xs uppercase sticky top-0 z-1 bg-black w-full">
                <tr className="text-red w-full">
                    {
                      [
                        {text: "Name"},
                        {text: "Size"},
                        {text: "Uploaded at"},
                        {text: "Modified at"},
                      ].map((header, index) => (
                        <th className="px-6 py-3 w-1/5" key={index}>
                          <p className="flex items-center gap-2">
                            {header.text}
                            <button 
                            onClick={() => onClickSort(index, header.text.toLowerCase())} 
                            className="cursor-pointer"
                            aria-label="sort button">
                              {sortIcons[index].icon}
                            </button>
                          </p>
                        </th>
                      ))
                    } 
                    <th className="px-6 py-3 w-1/5">
                      Actions
                    </th>
                </tr>
              </thead>
              <tbody>
                {
                  sortableFiles.map((file, index) => {

                    const uploadDate = getFormattedDate(file.created_at)
                    const changeDate = getFormattedDate(file.updated_at)

                    return (
                      <tr key={index} className="text-white-300 border-b-[1px] border-y-grayTransparent-700 text-[.8rem] cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                        <td className="px-6 py-7 font-bold w-1/3">
                          <p className="flex gap-2 items-center">
                            {getFileIcon(file.file_type)}
                            {file.name}
                          </p>
                          
                        </td>
                        <td className="px-6 w-1/5 ">{getFileSize(file.size)}</td>
                        <td className="px-6 w-1/5">{uploadDate}</td>
                        <td className="px-6 w-1/5">{changeDate}</td>
                        
                        {hoveredIndex === index &&
                        <td className="px-6">
                          <p className="flex items-center gap-3">
                            <Link method="delete" className="cursor-pointer" href={route("file.delete", {file: sortableFiles[index]})}>
                              <Trash size={15}/>
                            </Link>

                            <a className="cursor-pointer" href={route("file.download", {file: sortableFiles[index]})} 
                            download={file[index]}>
                              <Download size={15}/>
                            </a>

                            <Link method="put" className="cursor-pointer" href={route("file.setFavorite", {file: sortableFiles[index]})}>
                              {file.is_favorite ? <X size={15}/> : <Star size={15}/>}
                            </Link>

                            <Link className="cursor-pointer" onClick={() => onShareClick(index)}
                            href={route("file.share", {"file": sortableFiles[index]})}>
                              {shareIcons[index] || <Share2 size={15}/>}
                            </Link>
                          </p>
                        </td>}
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </section>
  </>

)
}