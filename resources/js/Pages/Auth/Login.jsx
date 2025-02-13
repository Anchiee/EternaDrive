import Input from "@/Components/Input"
import { Head } from "@inertiajs/react"
export default function Login()
{
  return (
    <>
      <Head title="Login"/>
        <section className="size-full flex justify-center items-center">
          <form className="text-white-300 outline-2 rounded-md outline-red-800 py-8 px-5">
            
            <Input InputType="text" InputPlaceholder="Enter your username" InputId="username"/>
          </form>
      </section>
    </>
    
  )
}