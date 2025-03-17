import { Link } from "@inertiajs/react"
import { Menu  } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "motion/react"
import AnimatedNav from "./AnimatedNav"


export default function MobileNav() 
{
    let [isHidden, setIsHidden] = useState(true)
    return(
        <nav className="flex items-center justify-between  bg-black border-b-[1px] border-b-grayTransparent-700
      text-white-300 sticky top-0 z-99 md:hidden">         
            <button onClick={() => setIsHidden(prev => !prev)}>
                <Menu/>
            </button>

            {!isHidden &&
                
                <section className="h-[110rem] w-full bg-transparent-300 absolute">

                    <AnimatePresence>
                        <AnimatedNav>
                            <div className="absolute top-0 h-[110rem] w-[60%] right-40 bg-white-300">
                                <button onClick={() => setIsHidden(prev => !prev)} className="text-black">
                                    sda
                                </button>

                            </div>
                        </AnimatedNav>         
                    </AnimatePresence>
                    
                </section>
                
            }

            <div className="flex items-center">
                <img src="/assets/logo.png" alt="logo" width="70"/>
                <Link href={route("Home")} className="text-[.8rem]">EternaDrive</Link>
            </div>

        </nav>
    )
}