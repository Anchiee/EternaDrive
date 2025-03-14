import { useState } from "react";
import { SortableFilesContext } from "@/Contexts/Files";
import { usePage } from "@inertiajs/react";


export default function sortableFilesProvider({children})
{   
    const {files} = usePage().props
    let [sortableFiles, setSortableFiles] = useState(files)

    return (
        <SortableFilesContext.Provider value={{sortableFiles, setSortableFiles}}>
            {children}
        </SortableFilesContext.Provider>

    )
}