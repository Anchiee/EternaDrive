import Input from "@/Components/Input"
import {  useForm } from "@inertiajs/react"
import ErrorMessage from "@/Components/ErrorMessage"
import AuthLayout from "@/Layouts/AuthLayout"
import SolidButton from "@/Components/SolidButton"
import InlinePrompt from "@/Components/InlinePrompt"


export default function Register()
{

  const {errors, post, data, setData} = useForm({
    "name": "",
    "email": "",
    "password": "",
    "password_confirmation":""
  }) 

  const onSubmit = (e) => {
    e.preventDefault()
    post("/sign", data)
  }

  return (
    <AuthLayout onSubmit={onSubmit}>
      <div className="my-4">
        <label htmlFor="username">Username</label>
        <Input InputId="username" InputType="text" InputPlaceholder="John"
        InputOnChange={(e) => setData("name", e.target.value)}/>
        {errors.name && <ErrorMessage message={errors.name}/>}
      </div>

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

      <div className="my-4">
        <label htmlFor="password_confirm">Confirm password</label>
        <Input InputId="password_confirm" InputType="password"
        InputOnChange={(e) => setData("password_confirmation", e.target.value)}/>
        {errors.password && <ErrorMessage message={errors.password}/>}
      </div>

      <InlinePrompt PromptHeader="Already have an account?" PromptText="Log-in" PromptRoute="login"/>

      <SolidButton ButtonType="submit" ButtonText="Sign-in"/>
    </AuthLayout>
  )
}