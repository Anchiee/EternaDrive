import { useState } from "react";
import { popUpContext } from "@/Contexts/Popup";


export default function PopUpProvider({children})
{
  let [isHidden, setIsHidden] = useState(true)
  let [popUpOption, setPopUpOption] = useState("")

  return(
    <popUpContext.Provider value={{isHidden, setIsHidden, popUpOption, setPopUpOption}}>
      {children}
    </popUpContext.Provider>
  )
}