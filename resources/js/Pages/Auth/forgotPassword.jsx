import CenteredCardLayout from "@/Layouts/CenteredCardLayout";
import { usePage, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import SolidButton from "@/Components/SolidButton";
import ErrorMessage from "@/Components/ErrorMessage";

export default function ForgotPassword()
{
  const {status} = usePage().props

  const {post, data, setData, errors} = useForm({
    "email": ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    post("/forgot-password", data)
  }

  return(
    <CenteredCardLayout title="Forgot password">
      <h1 className="text-left font-bold">FORGOT THE PASSWORD</h1>
      <p className="mb-4">Provide us the account's email and we'll send the verification link.</p>

      <form onSubmit={onSubmit}>
        <div className="my-6">
          <label htmlFor="email">Email</label>
          <Input InputId="email" InputType="email" InputPlaceholder="name@example.com" 
          InputOnChange={(e) => setData("email", e.target.value)}/>
          {errors.email && <ErrorMessage message={errors.email}/>}
        </div>
        
        {status && <p className="text-red-800 my-1">{status}</p>}
        <SolidButton ButtonType="email" ButtonText="Send"/>
      </form>
    </CenteredCardLayout>
  )
}