import CenteredCardLayout from "@/Layouts/CenteredCardLayout";
import { usePage, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import SolidButton from "@/Components/SolidButton";
import ErrorMessage from "@/Components/ErrorMessage";

export default function ResetPassword()
{
  const {token} = usePage().props

  const {post, data, setData, errors} = useForm({
    "email": "",
    "password":"",
    "password_confirmation":"",
    "token": token
  })

  const onSubmit = (e) => {
    e.preventDefault()
    post("/forgot-password", data)
  }

  return(
    <CenteredCardLayout title="Reset password">
      <form onSubmit={onSubmit}>
        <div className="my-6">
          <label htmlFor="email">Email</label>
          <Input InputId="email" InputType="email" InputPlaceholder="name@example.com" 
          InputOnChange={(e) => setData("email", e.target.value)}/>
          {errors.email && <ErrorMessage message={errors.email}/>}
        </div>

        <div className="my-6">
          <label htmlFor="new_password">New password</label>
          <Input InputId="new_password" InputType="password" 
          InputOnChange={(e) => setData("password", e.target.value)}/>
          {errors.password && <ErrorMessage message={errors.password}/>}
        </div>

        <div className="my-6">
          <label htmlFor="confirm_password">Confirm password</label>
          <Input InputId="confirm_password" InputType="password" 
          InputOnChange={(e) => setData("password_confirmation", e.target.value)}/>
          {errors.password && <ErrorMessage message={errors.password}/>}
        </div>

        <SolidButton ButtonType="submit" ButtonText="Change"/>
      </form>
    </CenteredCardLayout>
  )
}