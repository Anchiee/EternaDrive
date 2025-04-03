import CenteredCardLayout from "@/Layouts/CenteredCardLayout"
import { usePage, Link } from "@inertiajs/react"
import Input from "@/Components/Input"
import useUser from "@/Hooks/useUser"
import SolidButton from "@/Components/SolidButton"
import ErrorMessage from "@/Components/ErrorMessage"


export default function Dashboard() {

    const {databaseInfo, flash} = usePage().props
    const {onSubmit, setData, errors, data} = useUser({
        id: "",
        duration: ""
    })


    const onCopyClick = (param) => {
        navigator.clipboard.writeText(param)
    }


    return (
        <CenteredCardLayout title="Dashboard" description="Admin's dash panel">

            <h2 className="flex gap-2 items-center font-semibold mb-3 mt-5">
                Database status 
                <span className={`${databaseInfo.status ? "bg-green-800" : "bg-red"} px-2 py-2 rounded-3xl text-white-300 text-xs`}>
                    {databaseInfo.status}
                </span>
            </h2>

            <section>
                <div className="border-b-[1px] border-b-gray-300 mb-3">
                    {
                        Object.entries(databaseInfo).map(([key, value], index) => (
                            <div key={index} className="mb-2">
                                <p className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}: <span className="text-gray-800">{value}</span></p>
                            </div>
                        ))
                    }
                </div>
                
                <h2 className="mb-2 mt-2 font-semibold">Generate admin account</h2>
                <Link  
                    as="button" 
                    href={route("admin.create")} 
                     className="w-full bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-lg
                    hover:bg-red-600 transition-all"
                    method="post">

                    Generate
                </Link>


                {
                    flash.adminStatus &&
                        <div className="flex flex-col gap-3">
                        {flash.adminStatus && <p className="text-xs font-semibold mt-3">{flash.adminStatus}</p>}
                        
                        {
                            flash.adminName &&
                                <p className="flex items-center gap-2">
                                {flash.adminName && <p className="text-xs">{flash.adminName}</p>}
                                <button 
                                className="bg-red px-2 py-1 text-xs text-white-300 rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => onCopyClick(flash.adminName)}
                                >
                                    Copy
                                </button>
                            </p>
                        }
                        
                        {
                            flash.adminPass && 
                                <p className="flex items-center gap-2">
                                    {flash.adminPass && <p className="text-[.8rem]">{flash.adminPass}</p>}
                                    <button 
                                    className="bg-red px-2 py-1 text-xs text-white-300 rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => onCopyClick(flash.adminPass)}
                                    >
                                        Copy
                                    </button>
                                </p>
                        }

                    
                    </div>

                }

                <form className="border-t-[1px] border-t-gray-300 my-4 py-4" onSubmit={(e) => onSubmit(e, route("admin.ban"), "put")}>
                    <h2 className="font-semibold mb-3">Bans</h2>


                    <div className="mb-4">
                        <label htmlFor="id">
                            User's ID
                        </label>

                        <Input 
                        InputType="number"
                        InputPlaceholder="e.g 1"
                        InputId="id"
                        InputOnChange={(e) => setData("id", e.target.value)}
                        />
                        
                    </div>

                    <div className="my-4">

                        <label htmlFor="id">
                            Ban's duration(no input is a permament ban)
                        </label>

                        <Input 
                        InputType="text"
                        InputPlaceholder="e.g 15 seconds, 1 month"
                        InputId="id"
                        InputOnChange={(e) => setData("duration", e.target.value)}
                        />
                    </div>

                    

                    {flash.banStatus && <p className="text-xs text-red">{flash.banStatus}</p>}
                    {errors.id && <ErrorMessage message={errors.id}/>}
                    <SolidButton ButtonType="submit" ButtonText="Set ban status"/>
                </form>
                
                <div className="border-t-[1px] border-t-gray-300 my-4 py-4">
                    <Link
                    href={route("admin.destroy")}
                    method="delete"
                     className="w-full bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-lg
                            hover:bg-red-600 transition-all"
                    >
                        Log out
                    </Link>

                </div>
                
                
            </section>
            

                
        </CenteredCardLayout>
    )
}