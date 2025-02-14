import AuthLayout from "@/Layouts/AuthLayout"
import { Link, useForm, usePage } from "@inertiajs/react"
import ErrorMessage from "@/Components/ErrorMessage"
import Input from "@/Components/Input"
import SolidButton from "@/Components/SolidButton"
import InlinePrompt from "@/Components/InlinePrompt"

export default function Login()
{
  const {status, canResetPassword} = usePage().props
  const {errors, post, data, setData} = useForm({
    "email": "",
    "password": "",
  }) 

  const onSubmit = (e) => {
    e.preventDefault()
    post("/login", data)
  }

  return(
    <AuthLayout onSubmit={onSubmit}>

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

      <InlinePrompt PromptHeader="New to EternaDrive?" PromptText="Sign-in" PromptRoute="sign"/>
      <InlinePrompt PromptHeader="Forgot password?" PromptText="Click here" PromptRoute="password.request"/>

      <SolidButton ButtonType="submit" ButtonText="Log-in"/>

    </AuthLayout>
  )
}