import EditUserLayout from "@/Layouts/EditUserLayout";
import Input from "./Input";
import SolidButton from "./SolidButton";
import { popUpContext } from "@/Contexts/Popup";
import { useContext } from "react";

export default function EditProfile()
{
  const { popUpOption, setPopUpOption} = useContext(popUpContext
  )
  return  (
    <EditUserLayout>
      <label htmlFor={popUpOption}>{popUpOption}</label>
      <Input InputId={popUpOption} InputType="text"/>

      <label htmlFor="password">Password</label>
      <Input InputId="password" InputType="password"/>

      <div className="flex gap-10 my-3">
        <button type="button" className="cursor-pointer" onClick={() => setPopUpOption(null)}>Close</button>
        <SolidButton ButtonType="submit" ButtonText="Confirm"/>
      </div>
    </EditUserLayout>
    
  )
}