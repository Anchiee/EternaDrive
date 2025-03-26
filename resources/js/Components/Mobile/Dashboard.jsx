import useFiles from "@/Hooks/useFiles"
import { SortableFilesContext } from "@/Contexts/Files"
import { useContext, useState } from "react"
import { Link } from "lucide-react"
import { EllipsisVertical, Trash, Download, Star, X, Share2 } from "lucide-react"

export default function MobileDashboard() {
    const { sortableFiles } = useContext(SortableFilesContext)
    const {getFileIcon, getFileSize, getFormattedDate} = useFiles()

    let [isShown, setIsShown] = useState({})

    const iconSize = 15
    let fileRouteParam = null



    return(
        <section className="grid grid-rows-3 grid-cols-2 gap-y-10 gap-x-5 mt-10 md:hidden">
            {
                sortableFiles.map((file, index) => {
                    fileRouteParam = { "file": sortableFiles[index] }
                    return(
                        <div key={index} className="bg-white-300 rounded-sm text-xs py-4">

                            <section className="ml-4 flex flex-col">
                                <p className="flex items-center">
                                    {getFileIcon(file.file_type)}
                                    <span className="break-all">{file.name}</span>
                                </p>
                                <p>{getFileSize(file.size)}</p>
                                <p>{getFormattedDate(file.created_at)}</p>

                                <button 
                                onClick={() => setIsShown(prev => ({...prev, [index]: !prev[index]}))} 
                                className="self-end mr-4 relative">
                                    <EllipsisVertical  size={17}/>

                                    {isShown[index] &&
                                        <section className="absolute bg-white-300 text-black flex flex-col gap-3 pr-9 pl-3 py-2 rounded-md 
                                        outline-1 outline-gray-300">
                                            {
                                                [
                                                    { page: "Delete", component: <Trash size={iconSize} />, route: route("file.delete", fileRouteParam)},
                                                    { page: "Download", component: <Download size={iconSize} />, route: route("file.download", fileRouteParam)},
                                                    { page: "Favorite", component: file.is_favorite ? <X size={iconSize}/> : <Star size={iconSize}/>, route: route("file.setFavorite", fileRouteParam)},
                                                    { page: "Share", component: <Share2 size={iconSize} />, route: route("file.share", fileRouteParam)},
                                                ].map(tab => (
                                
                                
                                                <p key={tab.page} className="flex gap-2"
                                                    href={tab.route}>
                                                    {tab.component}
                                                    {tab.page}
                                                </p>
                                                ))    
                                            }
                                        </section>
                                    }
                                </button>

                                
                                
                            </section>

                        </div>
                    )
                })
            }
        </section>
    )
}