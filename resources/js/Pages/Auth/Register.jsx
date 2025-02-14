import Input from "@/Components/Input"
import { Head, Link, useForm, usePage } from "@inertiajs/react"
export default function Login()
{

  const {errors, post, data, setData} = useForm({
    "name": "",
    "email": "",
    "password": "",
    "password_confirmation":""
  }) 

  const {canResetPassword, status} = usePage().props

  const onSubmit = (e) => {
    e.preventDefault()
    post("/sign", data)
  }

  return (
    <>
      <Head title="Login"/>
        <section className="size-full flex justify-center items-center">
        <form className="max-w-sm mx-auto bg-white-300 px-19 py-6 rounded-md" onSubmit={onSubmit}>

          <img src="/assets/logo.png" alt="logo" width="100" className="mx-auto"/>

          <div className="my-4">
            <label htmlFor="username">Username</label>
            <Input InputId="username" InputType="text" InputPlaceholder="John"
            InputOnChange={(e) => setData("name", e.target.value)}/>
            {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
          </div>

          <div className="my-4">
            <label htmlFor="email">Email</label>
            <Input InputId="email" InputType="email" InputPlaceholder="name@example.com"
            InputOnChange={(e) => setData("email", e.target.value)}/>
            {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
          </div>

          <div className="my-4">
            <label htmlFor="password">Password</label>
            <Input InputId="password" InputType="password"
            InputOnChange={(e) => setData("password", e.target.value)}/>
            {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
          </div>

          <div className="my-4">
            <label htmlFor="password_confirm">Confirm password</label>
            <Input InputId="password_confirm" InputType="password"
            InputOnChange={(e) => setData("password_confirmation", e.target.value)}/>
            {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
          </div>

          {canResetPassword &&
          <p className="text-[.8rem] my-3">
            Forgot password?
            <Link 
            className="text-red-800 underline underline-offset-2 px-1">Click here</Link>
          </p>}

          <button type="submit" 
          className="w-full bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-lg
          hover:bg-red-900 transition-all">Sign-in</button>

          {status && <p>{status}</p>}


        </form>

      </section>
    </>
    
  )
}