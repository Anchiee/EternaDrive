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
        <Link className="text-[.9rem] mx-9 hover:text-red-700 transition-all" href="about">About us</Link>
        <Link className="outline-2 outline-red-600 px-5 py-2 rounded-4xl text-[.9rem]
        hover:bg-red-600 hover:text-white-300 transition-all">SIGN-IN</Link>
      </div>
    </nav>
  )
}