import Input from "@/Components/Input"
import useUser from "@/Hooks/useUser"
import ErrorMessage from "@/Components/ErrorMessage"
import AuthLayout from "@/Layouts/AuthLayout"
import SolidButton from "@/Components/SolidButton"
import InlinePrompt from "@/Components/InlinePrompt"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Register()
{

  const {onSubmit, errors, setData} = useUser({
    "name": "",
    "email": "",
    "password": "",
    "password_confirmation":""
  }) 


  return (
    <AuthLayout onSubmit={(e) => onSubmit(e, "/sign")}>
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

      <InlinePrompt PromptHeader="Already have an account?" PromptText="Log-in" PromptRoute="session.create"/>

      <SolidButton ButtonType="submit" ButtonText="Sign-in"/>
      <div className="flex text-base justify-between mt-5 text-gray-900 border-t-[1px] border-gray-300 pt-4">
        <p className="flex gap-2 items-center border-2 rounded-xl py-2 px-2 hover:shadow-sm transition-all">
          <FontAwesomeIcon icon={faGithub}/>
          Github
        </p>

        <p className="flex gap-2 items-center border-2 rounded-xl py-2 px-2 hover:shadow-sm transition-all">
          <FontAwesomeIcon icon={faTwitter}/>
          Twitter
        </p>
        
      </div>
    </AuthLayout>
  )
}