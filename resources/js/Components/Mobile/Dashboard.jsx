import { usePage } from "@inertiajs/react"
import useFiles from "@/Hooks/useFiles"

export default function MobileDashboard() {
    const { files, flash } = usePage().props
    const {getFileIcon, getFileSize, getFormattedDate} = useFiles()

    return(
        <section className="grid grid-rows-3 grid-cols-2 gap-y-10 gap-x-5 mt-10 md:hidden">
            {
                files.map((file, index) => {
                    

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