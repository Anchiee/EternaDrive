import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useContext } from "react"
import { FilesContext } from "@/Contexts/Files"

export default function useSorting() {
    
    const {userFiles, setUserFiles} = useContext(FilesContext)
    let [sortIcons, setSortIcons] = useState(
    {
        0: {icon: <ChevronDown size={15} strokeWidth={4}/>, sorting: "ascending"},
        1: {icon: <ChevronDown size={15} strokeWidth={4}/>, sorting: "ascending"},
        2: {icon: <ChevronDown size={15} strokeWidth={4}/>, sorting: "ascending"},
        3: {icon: <ChevronDown size={15} strokeWidth={4}/>, sorting: "ascending"},
    })

    const onClickSort = (index, type) => {
        const currentSorting = sortIcons[index].sorting
        
    
        switch(currentSorting) {
          case "descending":
            setSortIcons({...sortIcons, [index] : {icon: <ChevronDown size={15} strokeWidth={4}/>, sorting: "ascending"}})
            setUserFiles(userFiles.sort((a, b) => {
                const params = returnParams(type, a, b)
                const paramA = params.paramA
                const paramB = params.paramB

                
                if(paramA < paramB) return 1
                else if(paramA > paramB) return -1
                else return 0

            }))
            break

          case "ascending":

            setSortIcons({...sortIcons, [index] : {icon: <ChevronUp size={15} strokeWidth={4}/>, sorting: "descending"}})

            setUserFiles(userFiles.sort((a , b) => {
                const params = returnParams(type, a, b)
                const paramA = params.paramA
                const paramB = params.paramB

                if(paramA < paramB) return -1
                else if(paramA > paramB) return 1
                else return 0
            }))
            break
        }
    
    
    }

    const returnParams = (type, a, b) => {
        let paramA = null
        let paramB = null
        switch(type) {
            case "name":
              paramA = a.name.toLowerCase()
              paramB = b.name.toLowerCase()
              break
            case "size":
              paramA = a.size
              paramB = b.size
              break
            case "uploaded at":
                paramA = new Date(a.created_at)
                paramB = new Date(b.created_at)
                break
            case "modified at":
                paramA = new Date(a.updated_at)
                paramB = new Date(b.updated_at)
                break
          }
        
        return {paramA, paramB}
    }


    const search = (param) => {
      console.log(`Param: ${param}`)
      const result = userFiles.filter((file) => 
        file.name.toLowerCase().includes(param))

        return result
    }

    return {sortIcons, onClickSort, search}
}