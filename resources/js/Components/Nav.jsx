import { Link, usePage } from "@inertiajs/react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export default function Nav()
{
  const {auth} = usePage().props
  let [isHidden, setIsHidden] = useState(true)

  return(
    <nav className="flex items-center justify-between bg-black border-b-2 border-b-gray-800 
    text-white-300 sticky top-0">

      <div className="flex items-center">
        <img src="/assets/logo.png" alt="logo" width="70"/>
        <Link href={route("Home")} className="text-[.8rem]">EternaDrive</Link>
      </div>
    
    {!auth.user &&
      <Link className="outline-2 outline-red-800 px-5 py-2 rounded-4xl text-[.7rem]
      hover:bg-red-800 hover:text-white-300 transition-all" 
      href={route("sign")}>SIGN-IN</Link>
    }


    {auth.user && 
      <div className="flex items-center gap-10">
        <Link className="text-[.8rem] hover:text-red-800 transition-colors" 
        href={route("dashboard")}>Dashboard</Link>
        <div className="relative">

          <button className="cursor-pointer" onClick={() => setIsHidden(prev => !prev)}>
            <img src={auth.user.profile_path} alt="profile picture" width="40"/>
          </button>

          {!isHidden &&
          <div className="bg-white-300 rounded-md px-5 absolute right-[10%] text-black">
            <p className="text-[.9rem] mt-2">{auth.user.name}</p>
            <p className="text-[.9rem] text-gray-500 border-b-[1px] border-gray-300 mb-2 pb-2">{auth.user.email}</p>

            <Link className="my-2 flex items-center gap-1 font-light box-border hover:text-red-800 transition-all">
              <FontAwesomeIcon icon={faGear}/>
              Settings
            </Link>
            <Link className="my-2 flex items-center gap-1 font-light hover:text-red-800 transition-all cursor-pointer" 
            href={route("user.destroy")} method="delete">
              <FontAwesomeIcon icon={faRightFromBracket}/>
              Log out
            </Link>
          </div>
        }
        </div>
      </div>
      
    }
    </nav>
  )
}