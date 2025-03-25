import { usePage } from "@inertiajs/react"
import useFiles from "@/Hooks/useFiles"
import {SortableFilesContext} from "@/Contexts/Files"
import { useContext } from "react"

export default function MobileDashboard() {
    const { sortableFiles } = useContext(SortableFilesContext)
    const {getFileIcon, getFileSize, getFormattedDate} = useFiles()

    return(
        <section className="grid grid-rows-3 grid-cols-2 gap-y-10 gap-x-5 mt-10 md:hidden">
            {
                sortableFiles.map((file, index) => {
                    
                    return(
                        <div key={index} className="bg-white-300 rounded-sm text-xs py-4">

                            <div className="ml-4">
                                <p className="flex items-center">
                                    {getFileIcon(file.file_type)}
                                    {file.name}
                                </p>
                                <p>{getFileSize(file.size)}</p>
                                <p>{getFormattedDate(file.created_at)}</p>
                            </div>

                        </div>
                    )
                })
            }
        </section>
    )
}