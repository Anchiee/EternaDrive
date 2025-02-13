import { Link } from "@inertiajs/react"

export default function Nav()
{
  return(
    <nav className="flex items-center justify-between bg-black border-b-2 border-b-gray-800 
    text-white-300 sticky top-0">

      <div className="flex items-center">
        <img src="/assets/logo.png" alt="logo" width="70"/>
        <Link href={route("Home")}>EternaDrive</Link>
      </div>
    
      <div>
        <Link className="outline-2 outline-red-800 px-5 py-2 rounded-4xl text-[.7rem]
        hover:bg-red-800 hover:text-white-300 transition-all" 
        href={route("login")}>SIGN-IN</Link>
      </div>
    </nav>
  )
}