import EditUserLayout from "@/Layouts/EditUserLayout";
import Input from "./Input";
import SolidButton from "./SolidButton";
import { popUpContext } from "@/Contexts/Popup";
import { useContext } from "react";
import useUser from "@/Hooks/useUser";
import ErrorMessage from "./ErrorMessage";

export default function EditProfile()
{
  const { popUpOption, setPopUpOption} = useContext(popUpContext)

  const { errors, setData, onSubmit } = useUser({
    password: "",
    new_password: ""
  })

  const handleInputChange = (e) => {
    let fieldName = popUpOption === "Password" ? "new_password" : popUpOption.toLowerCase()
    setData(fieldName, e.target.value)
  }


  return  (
    <EditUserLayout onSubmit={(e) => onSubmit(e, "/settings", "put")}>
      
      <label htmlFor={popUpOption}>
        {popUpOption === "Password" ? "New password" : popUpOption}
      </label>

      <Input InputId={popUpOption || "null"} 
      InputType={popUpOption === "Email" ? "email" : popUpOption === "Password" ? "password" : "text"} 
      InputOnChange={handleInputChange}/>

      <label htmlFor="password">Password</label>
      <Input 
        InputId="password" 
        InputType="password" 
        InputOnChange={(e) => setData("password", e.target.value)}
      />

      {errors.password && <ErrorMessage message={errors.password}/>}

      <div className="flex gap-10 my-3">
        <button type="button" className="cursor-pointer" onClick={() => setPopUpOption("")}>Close</button>
        <SolidButton ButtonType="submit" ButtonText="Confirm"/>
      </div>
    </EditUserLayout>
    
  )
}