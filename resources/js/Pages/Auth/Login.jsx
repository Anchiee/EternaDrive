import AuthLayout from "@/Layouts/AuthLayout"
import { usePage } from "@inertiajs/react"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import Input from "@/Components/Input"
import SolidButton from "@/Components/SolidButton"
import InlinePrompt from "@/Components/InlinePrompt"
import Socials from "@/Components/Socials"


export default function Login()
{

  const {status, canResetPassword} = usePage().props
  const {onSubmit, errors, setData} = useUser({
    "email": "",
    "password": "",
  })

  return(
    <AuthLayout onSubmit={(e) => onSubmit(e, "/login")}>

      <div className="my-4">
        <label htmlFor="email">Email</label>
        <Input InputId="email" InputType="email" InputPlaceholder="name@example.com"
        InputOnChange={(e) => setData("email", e.target.value)}/>
        {errors.email && <ErrorMessage message={errors.email}/>}
      </div>

      <div className="my-4">
        <label htmlFor="password">Password</label>
        <Input InputId="password" InputType="password" 
        InputOnChange={(e) => setData("password", e.target.value)}/>
        {errors.password && <ErrorMessage message={errors.password}/>}
      </div>

      <InlinePrompt PromptHeader="New to EternaDrive?" PromptText="Sign-in" PromptRoute="sign.create"/>
      {canResetPassword && 
      <InlinePrompt PromptHeader="Forgot password?" PromptText="Reset it" PromptRoute="password.request"/>}

      {status && <p className="text-xs my-1 text-red">{status}</p>}

      <SolidButton ButtonType="submit" ButtonText="Log-in"/>

      <Socials/>
    </AuthLayout>
  )
}