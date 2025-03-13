import { useState } from "react";
import { FilesContext } from "@/Contexts/Files";
import { usePage } from "@inertiajs/react";


export default function FileContextProvider({children})
{   
    const {files} = usePage().props
    let [userFiles, setUserFiles] = useState(files)

    return (
        <FilesContext.Provider value={{userFiles, setUserFiles}}>
            {children}
        </FilesContext.Provider>

    )
}