import { ChevronDown, ChevronUp, ImageIcon, Video, Music2Icon, FileIcon, Check, LetterText, icons} from "lucide-react"
import { useState } from "react"
import { useContext } from "react"
import { SortableFilesContext } from "@/Contexts/Files"

export default function useFiles() {
    
    const {sortableFiles, setSortableFiles} = useContext(SortableFilesContext)
    let [shareIcons, setShareIcons] = useState({})
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
            setSortableFiles(sortableFiles.sort((a, b) => {
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

            setSortableFiles(sortableFiles.sort((a , b) => {
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


  

    const onShareClick = (index) => {
      setShareIcons(prev => ({...prev, [index]: <Check size={15}/>}))
  
      setTimeout(() => {
        setShareIcons(prev => ({...prev, [index]: <Share2 size={15}/>}))
      }, 800);
      
    }

    const search = (param, files) => {
      console.log(`Param: ${param}`)

      let paramNum = Number(param)
      const paramLower = param.toLowerCase()

      console.log((files[0].size / 1024).toFixed(1) == paramNum)

      const result = files.filter((file) => 
        file.name.toLowerCase().includes(paramLower) ||
        (file.size / 1024).toFixed(1) === paramNum.toFixed(1) ||
        (file.size / 1024 / 1024).toFixed(1) === paramNum.toFixed(1) ||
        file.created_at.includes(paramLower) ||
        file.updated_at.includes(paramLower))

        return result
    }

    const onSearch = (e, files) => {
      if(e.target.value.length === 0) {
        setSortableFiles(files)
      }
      else {
        const result = search(e.target.value, files)
        setSortableFiles(result)
      }
    }

    const getFileIcon = (type, iconSize = 20) => {

      const fileType = type.split('/')[0]
  
      switch(fileType) {
        case "image":
          return <ImageIcon size={iconSize} />
        case "video":
          return <Video size={iconSize} />
        case "audio":
          return <Music2Icon size={iconSize}/>
        case "text":
          return <LetterText size={iconSize}/>
        default:
          return <FileIcon size={iconSize} />
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

    const getFormattedDate = (date) => {
      const createDate = new Date(date)
      const createMonth = String(createDate.getMonth() + 1).padStart(2, "0")
      const createYear = String(createDate.getFullYear()).padStart(2, "0")
      const createDay = createDate.getDate()

      const formattedDate = `${createYear}-${createMonth}-${createDay}`
      return formattedDate
    }

    return {sortIcons, onClickSort, onShareClick, getFileIcon, getFileSize, getFormattedDate, onSearch, shareIcons}
}