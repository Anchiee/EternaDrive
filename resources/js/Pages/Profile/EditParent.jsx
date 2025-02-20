import PopUpProvider from "@/ContextsProviders/PopUpProvider";
import Edit from "./Edit";

export default function EditParent()
{
  return(
    <PopUpProvider>
      <Edit/>
    </PopUpProvider>
  )
}