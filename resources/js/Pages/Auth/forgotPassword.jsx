import CenteredCardLayout from "@/Layouts/CenteredCardLayout";
import { usePage } from "@inertiajs/react";
import useUser from "@/Hooks/useUser";
import Input from "@/Components/Input";
import SolidButton from "@/Components/SolidButton";
import ErrorMessage from "@/Components/ErrorMessage";

export default function ForgotPassword()
{
  const {status} = usePage().props

  const {onSubmit, errors, setData} = useUser({
    "email": ""
  }) 

  return(
    <CenteredCardLayout title="Forgot password">
      <h1 className="text-left font-bold text-red-800 tracking-wider">FORGOT THE PASSWORD</h1>
      <p className="mb-4">Provide us the account's email and we'll send the verification link.</p>

      <form onSubmit={(e) => onSubmit(e, "/forgot-password")}>
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