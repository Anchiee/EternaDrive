import { Link, usePage } from "@inertiajs/react"
import { Menu, X, Handshake, EarthLock, Settings, LogOut, Star, Columns2, Clock, Plus, LayoutDashboard } from "lucide-react"
import { useState, useEffect } from "react"
import useUser from "@/Hooks/useUser"
import AnimatedNav from "./AnimatedNav"
import { AnimatePresence } from "motion/react"
import ErrorMessage from "../ErrorMessage"


export default function MobileNav() 
{
    const { errors, fileRequest, data, setData } = useUser({
    file: ""
    })

    let [isHidden, setIsHidden] = useState(true)

    const {auth} = usePage().props
    const {url} = usePage()

    const currentYear = new Date().getFullYear()

    useEffect(() => {
        if(data.file) {
            fileRequest("/file")
        }
    }, [data.file])
    
    return(
        <section className="flex items-center justify-between  bg-black border-b-[1px] border-b-grayTransparent-700
      text-white-300 sticky top-0 z-99 md:hidden">         
            <button onClick={() => setIsHidden(prev => !prev)} aria-label="hamburger menu">
                <Menu/>
            </button>

            <AnimatePresence mode="wait">
            {!isHidden &&
                
                <div className="h-full w-full bg-transparent-300 absolute">

                    <AnimatedNav className="h-full">
                        <nav className="absolute top-0 w-[60%] h-screen right-40 bg-white-300 text-black flex flex-col">
                            <button onClick={() => setIsHidden(prev => !prev)} className="text-black self-end mr-4 mt-5">
                                <X/>
                            </button>


                            <section className="mx-4 px-4 flex flex-col gap-3 text-[.8rem] mt-10 flex-grow">       
                                
                                {!auth.user &&
                                <Link className="bg-red text-white-300 px-5 py-2 rounded-sm"
                                href={route("session.create")}>SIGN-IN</Link>
                                }


                                {auth.user &&
                                    <>
                                        <div>
                                            <p className="font-semibold">{auth.user.name}</p>
                                            <p className="font-semibold">{auth.user.email}</p>
                                        </div>
                                        
                                        <Link href={route("profile.edit")} className="flex items-center gap-2">
                                            <Settings size={15}/>
                                            Settings
                                        </Link>

                                        
                                        <Link href={route("file.index", {type: "all"})} className="flex items-center gap-2">
                                            <LayoutDashboard size={15}/>
                                            Dashboard
                                        </Link>

                                        <Link href={route("user.destroy")} method="delete" className="flex items-center gap-2">
                                            <LogOut size={15}/>
                                            Log out
                                        </Link>
                                    </>
                                }

                                {
                                    [
                                        {text: "Terms of service", route: "/terms", icon: <Handshake size={15}/>},
                                        {text: "Privacy Policy", route: "/policy", icon: <EarthLock size={15}/>}
                                    ].map((link, index) => (
                                        <Link href={link.route} key={index} className="flex items-center gap-2">
                                            {link.icon}
                                            {link.text}
                                        </Link>
                                    ))
                                }

                            
                            <div className="flex flex-col gap-3 border-t-[1px] border-t-gray-300 py-4">

                            
                            {url.includes("/dashboard") &&
                                <>
                                    <label 
                                    htmlFor="file"
                                    className="flex items-center gap-1 bg-red py-2 pl-1 pr-5 text-white-300 rounded-sm mb-5"
                                    >
                                        <Plus size={15}/>
                                        New
                                    </label>
                                    {errors.file && <ErrorMessage message={errors.file}/>}

                                    <input type="file" onChange={(e) => setData("file", e.target.files[0])} id="file"
                                        className="fixed right-full bottom-full" />


                                    <input 
                                    type="text" 
                                    placeholder="Search by name, date, size..."
                                    className="text-[.7rem] py-1 pl-2 rounded-sm outline-gray-300 outline-1 focus:ring-2 focus:ring-red border-none"/> 


                                    {[
                                        { page: "All", component: <Columns2 size={15} />, route: route("file.index", { "type": "all" }), param: "all" },
                                        { page: "Recent", component: <Clock size={15} />, route: route("file.index", { "type": "recent" }), param: "recent" },
                                        { page: "Favorite", component: <Star size={15} />, route: route("file.index", { "type": "favorites" }), param: "favorites" },
                                    ].map(tab => (


                                        <Link key={tab.page}
                                        className={`flex items-center gap-2
                                            ${url === `/dashboard/${tab.param}` ? "bg-red text-white-300 pl-1 pr-5 py-2 rounded-sm" : ""}`
                                        }
                                        href={tab.route}>
                                        {tab.component}
                                        {tab.page}
                                        </Link>
                                    ))}    
                                </>
                            }
                            </div>


                            </section>

                            <footer className="mx-4 px-4 border-t-[1px] border-t-gray-300 py-4 text-xs">
                                <p>EternaDrive {currentYear}</p>
                                <a href="https://github.com/Anchiee/EternaDrive" className="underline">Get full repo here</a>
                            </footer>

                        </nav>
                    </AnimatedNav>         
                    
                </div>
            
                
            }
            </AnimatePresence>

            <div className="flex items-center">
                <img src="/assets/logo.png" alt="logo" className="w-12"/>
                <Link href={route("Home")} className="text-[.8rem]">EternaDrive</Link>
            </div>

        </section>
    )
}