import AppLayout from "@/Layouts/AppLayout"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import { usePage, Link } from "@inertiajs/react"
import { useEffect, useState, useContext } from "react"
import { FilesContext } from "@/Contexts/Files"
import useSorting from "@/Hooks/useSorting"
import { Plus, Clock, Star, Columns2, ImageIcon, VideoIcon, Music2Icon, FileIcon, Trash, Download, X, Share2, Check, LetterText
} from "lucide-react"


export default function DashboardChild() {
  const { errors, fileRequest, data, setData } = useUser({
    file: ""
  })

  const {userFiles, setUserFiles} = useContext(FilesContext)
  const { files, flash, auth, maxUsage } = usePage().props
  const { url } = usePage()
  const {sortIcons, onClickSort} = useSorting(files)
  
  const user = auth.user
  const signedUrl = flash.signedUrl



  let [hoveredIndex, setHoveredIndex] = useState(true)

  let [shareIcons, setShareIcons] = useState({})


  const onShareClick = (index) => {
    setShareIcons(prev => ({...prev, [index]: <Check size={15}/>}))

    setTimeout(() => {
      setShareIcons(prev => ({...prev, [index]: <Share2 size={15}/>}))
    }, 800);
  }


  const getFileIcon = (type) => {

    const fileType = type.split('/')[0]

    switch(fileType) {
      case "image":
        return <ImageIcon size={20} />
      case "video":
        return <VideoIcon size={20} />
      case "audio":
        return <Music2Icon size={20}/>
      case "text":
        return <LetterText size={20}/>
      default:
        return <FileIcon size={20} />
    }

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


  useEffect(() => {
    navigator.clipboard.writeText(signedUrl)
  }, [signedUrl])

  useEffect(() => {
    if (data.file) {
      fileRequest("/file")
    }

  }, [data.file])

  useEffect(() => {
    setUserFiles(files)
  }, [files])





return (
  <>
    <AppLayout title="Dashboard">

      <section className="flex gap-5 my-5 grow-1">
        <nav className="flex flex-col border-r-[1px] border-r-grayTransparent-700 pr-10">

          <label
            htmlFor="file"
            className="border-2 border-red rounded-md text-red px-4 py-2 hover:bg-red-800 hover:text-white-300 
            cursor-pointer transition-colors mt-5 flex items-center">
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
                      ${url === `/dashboard/${tab.param}` ? " bg-red rounded-md" : ""}`
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
                            className="cursor-pointer">
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
                  userFiles.map((file, index) => {


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
                            <Link method="delete" className="cursor-pointer" href={route("file.delete", {file: userFiles[index]})}>
                              <Trash size={15}/>
                            </Link>

                            <a className="cursor-pointer" href={route("file.download", {file: userFiles[index]})} 
                            download={file[index]}>
                              <Download size={15}/>
                            </a>

                            <Link method="put" className="cursor-pointer" href={route("file.setFavorite", {file: userFiles[index]})}>
                              {file.is_favorite ? <X size={15}/> : <Star size={15}/>}
                            </Link>

                            <Link className="cursor-pointer" onClick={() => onShareClick(index)}
                            href={route("file.share", {"file": userFiles[index]})}>
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


    </AppLayout>
  </>

)
}