import { Link, usePage } from "@inertiajs/react"
import { Menu, X, Handshake, EarthLock, Settings, LogOut } from "lucide-react"
import { useState } from "react"
import AnimatedNav from "./AnimatedNav"
import { AnimatePresence } from "motion/react"


export default function MobileNav() 
{
    let [isHidden, setIsHidden] = useState(true)

    const {auth} = usePage().props

    const currentYear = new Date().getFullYear()

    
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


                            <section className="mx-4 flex flex-col gap-3 text-[.8rem] mt-10 flex-grow">       
                                
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

                                        <Link href={route("user.destroy")} className="flex items-center gap-2">
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


                            </section>

                            <footer className="mx-4 border-t-[1px] border-t-gray-300 py-4 text-xs">
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