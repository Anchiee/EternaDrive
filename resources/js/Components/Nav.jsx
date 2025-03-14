import { Link, usePage } from "@inertiajs/react"
import { AnimatePresence } from "motion/react"
import { useState, useContext, useEffect } from "react"
import useSorting from "@/Hooks/useSorting"
import AnimatedComponent from "./AnimatedComponent"
import { Settings2, LogOut, User, Search } from "lucide-react"
import { SortableFilesContext } from "@/Contexts/Files"


export default function Nav()
{
  const {auth, files} = usePage().props
  const {component} = usePage()
  const {search} = useSorting()
  let [isHidden, setIsHidden] = useState(true)

  const {setSortableFiles} = useContext(SortableFilesContext)
  let [userFilesCopy, setUserFilesCopy] = useState()

  const onSearch = (e) => {
    if(e.target.value.length === 0) {
      setSortableFiles(userFilesCopy)
    }
    else {
      const result = search(e.target.value)
      setSortableFiles(result)
    }
  }

  useEffect(() => {
    setUserFilesCopy(files)
  }, [files])



 



  return(
    <nav className="flex items-center justify-between bg-black border-b-[1px] border-b-grayTransparent-700
    text-white-300 sticky top-0 z-99">

      <div className="flex items-center">
        <img src="/assets/logo.png" alt="logo" width="70"/>
        <Link href={route("Home")} className="text-[.8rem]">EternaDrive</Link>
      </div>

      {component === "Dashboard" &&
        <div className="flex items-center px-4 border-2 border-red rounded-md">
          <Search size={12}/>
          <input type="text" placeholder="Search by name, size, date" 
          className="border-none bg-transparent text-white placeholder:text-white text-[.8rem] placeholder:text-[.8rem] focus:ring-0"
          onChange={onSearch}/>
        </div>
      }

    
    

    <section className="flex items-center gap-10">
      <Link className="text-[.8rem] hover:text-red-800 transition-colors" 
      href="/terms">Terms of service</Link>
      <Link className="text-[.8rem] hover:text-red-800 transition-colors" 
      href="/policy">Privacy policy</Link>
      {!auth.user &&
        <Link className="outline-2 outline-red-800 px-5 py-2 rounded-4xl text-[.7rem]
        hover:bg-red-800 hover:text-white-300 transition-all" 
        href={route("session.create")}>SIGN-IN</Link>
      }




    {auth.user && 
      <div className="flex items-center gap-10">
        <Link className="text-[.8rem] hover:text-red-800 transition-colors" 
        href={route("file.index", {"type": "all"})}>Dashboard</Link>
        



        <div className="relative">

          <button className="cursor-pointer" onClick={() => setIsHidden(prev => !prev)} aria-label="user">
            <User size={20}/>
          </button>

          <AnimatePresence>
          {!isHidden &&
          
            <AnimatedComponent>
              <div className="bg-white-300 rounded-md px-5 absolute right-[10%] text-black">
                <p className="text-[.9rem] mt-2">{auth.user.name}</p>
                <p className="text-[.9rem] text-gray-500 border-b-[1px] border-gray-300 mb-2 pb-2">{auth.user.email}</p>

                <Link className="my-2 flex items-center gap-1 font-light box-border hover:text-red-800 transition-all"
                href={route("profile.edit")}>
                  <Settings2 size={20} strokeWidth={1}/>
                  Settings
                </Link>
                <Link className="my-2 flex items-center gap-1 font-light hover:text-red-800 transition-all cursor-pointer" 
                href={route("user.destroy")} method="delete">
                  <LogOut size={20} strokeWidth={1}/>
                  Log out
                </Link>
              </div>
            </AnimatedComponent>
        }
        </AnimatePresence>
        </div>
      </div>
      
    }
    </section>
    </nav>
  )
}