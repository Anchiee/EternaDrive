import useFiles from "@/Hooks/useFiles"
import { SortableFilesContext } from "@/Contexts/Files"
import { useContext, useState } from "react"
import { EllipsisVertical } from "lucide-react"

export default function MobileDashboard() {
    const { sortableFiles } = useContext(SortableFilesContext)
    const {getFileIcon, getFileSize, getFormattedDate} = useFiles()

    let [isShown, setIsShown] = useState({})

    return(
        <section className="grid grid-rows-3 grid-cols-2 gap-y-10 gap-x-5 mt-10 md:hidden">
            {
                sortableFiles.map((file, index) => {
                    
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
                                        <section className="absolute bg-red h-10 w-10">
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