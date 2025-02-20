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

  const { errors, setData, onSubmit} = useUser({
    popUpOption: "",
    password: ""
  })

  const onChange = (e) => {

    if(popUpOption === "Username") {
      setPopUpOption(popUpOption.slice(4, 8))
    }
    setData(popUpOption.toLowerCase(), e.target.value)
    console.log(popUpOption)
  }

  return  (
    <EditUserLayout onSubmit={(e) => onSubmit(e, "/settings", "put")}>
      <label htmlFor={popUpOption}>{popUpOption === "name" ? "Username" : popUpOption}</label>
      <Input InputId={popUpOption || "null"} 
      InputType={popUpOption === "Email" ? "email" : "text"} 
      InputOnChange={onChange}/>
      {errors.email && <ErrorMessage message={errors.email}/>}

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