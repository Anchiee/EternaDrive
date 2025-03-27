import useFiles from "@/Hooks/useFiles"
import { SortableFilesContext } from "@/Contexts/Files"
import { useContext, useState } from "react"
import { Link } from "@inertiajs/react"
import AnimatedComponent from "../AnimatedComponent"
import { AnimatePresence } from "motion/react"
import { EllipsisVertical, Trash, Download, Star, X, Share2 } from "lucide-react"

export default function MobileDashboard() {
    const { sortableFiles } = useContext(SortableFilesContext)
    const {getFileIcon, getFileSize, getFormattedDate} = useFiles()

    let [isShown, setIsShown] = useState({})

    const iconSize = 13
    let fileRouteParam = null



    return(
        <section className="grid grid-rows-3 grid-cols-2 gap-y-8 gap-x-5 mt-10 overflow-y-auto md:hidden">
            {
                sortableFiles.map((file, index) => {
                    fileRouteParam = { "file": sortableFiles[index] }
                    return(
                        <div key={index} className="bg-white-300 rounded-sm text-xs py-4">

                            <section className="ml-4 flex flex-col">
                                <p className="flex items-center gap-2">
                                    {getFileIcon(file.file_type, 12)}
                                    <span className="break-all">{file.name}</span>
                                </p>
                                <p>{getFileSize(file.size)}</p>
                                <p>{getFormattedDate(file.created_at)}</p>

                                <span
                                onClick={() => setIsShown({[index] : !isShown[index]})} 
                                className="self-end mr-4 relative">
                                    <EllipsisVertical  size={iconSize}/>


                                    <AnimatePresence mode="wait">
                                        {isShown[index] &&
                                            <AnimatedComponent>

                                                {/*0 and one because they are the first two indexes, checking if index can be divided by 2 because they are the one on the left*/}
                                                <div className={`absolute ${index == 0 || index == 1 ? "top-5" : "bottom-0"} ${index % 2 == 0 ? "right-7" : "right-9"} 
                                                    bg-white-300 text-black flex flex-col gap-3 pr-9 pl-3 py-2 rounded-md 
                                                    outline-1 outline-gray-300 shadow-sm shadow-gray-300`}>
                                                    {
                                                        [
                                                            { page: "Delete", component: <Trash size={iconSize} />, route: route("file.delete", fileRouteParam), method: "delete"},
                                                            { page: "Favorite", component: file.is_favorite ? <X size={iconSize}/> : <Star size={iconSize}/>, route: route("file.setFavorite", fileRouteParam), method: "put"},
                                                            { page: "Share", component: <Share2 size={iconSize} />, route: route("file.share", fileRouteParam), method: "get" },
                                                        ].map(tab => (
                                        
                                        
                                                        <Link key={tab.page} className="flex items-center gap-2 text-[.6rem]"
                                                            href={tab.route}
                                                            method={tab.method}>
                                                            {tab.component}
                                                            {tab.page}
                                                        </Link>
                                                        ))    
                                                    }
                                                    <a 
                                                    className="flex items-center gap-2 text-[.6rem]"
                                                    href={route("file.download", fileRouteParam)}>
                                                        <Download size={iconSize}/>
                                                        Download
                                                    </a>
                                                </div>
                                            </AnimatedComponent>
                                        }
                                    </AnimatePresence>
                                    
                                </span>

                                
                                
                            </section>

                        </div>
                    )
                })
            }
        </section>
    )
}