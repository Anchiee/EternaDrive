import EditUserLayout from "@/Layouts/EditUserLayout";
import Input from "./Input";
import SolidButton from "./SolidButton";
import { popUpContext } from "@/Contexts/Popup";
import { useContext, useEffect } from "react";
import useUser from "@/Hooks/useUser";
import ErrorMessage from "./ErrorMessage";

export default function EditProfile()
{
  const { popUpOption, setPopUpOption} = useContext(popUpContext)

  const { errors, setData, onSubmit, data} = useUser({
    password: "",
    new_password: ""
  })

  const onsSubmit = (e) => {
    e.preventDefault()
    onSubmit(e, "/settings", "put")
    console.log(data)
  }


  return  (
    <EditUserLayout onSubmit={onsSubmit}>
      <label htmlFor={popUpOption}>
        {popUpOption === "name" ? "Username" : popUpOption === "Password" ? "New password" : popUpOption}
      </label>

      <Input InputId={popUpOption || "null"} 
      InputType={popUpOption === "Email" ? "email" : popUpOption === "Password" ? "password" : "text"} 
      InputOnChange={(e) => setData(popUpOption === "Password" ? "new_password" : popUpOption.toLowerCase(), e.target.value)}/>


      <label htmlFor="password">Password</label>
      <Input InputId="password" InputType="password" InputOnChange={(e) => setData("password", e.target.value)}/>
      {errors.password && <ErrorMessage message={errors.password}/>}

      <div className="flex gap-10 my-3">
        <button type="button" className="cursor-pointer" onClick={() => setPopUpOption(null)}>Close</button>
        <SolidButton ButtonType="submit" ButtonText="Confirm"/>
      </div>
    </EditUserLayout>
    
  )
}