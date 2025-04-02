import CenteredCardLayout from "@/Layouts/CenteredCardLayout"
import { usePage, Link } from "@inertiajs/react"


export default function Dashboard() {

    const {databaseInfo, flash} = usePage().props


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
                    className="cursor-pointer text-white-300 py-1 rounded-md bg-red w-full" 
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
                                className="bg-red px-2 py-1 text-xs text-white-300 rounded-sm cursor-pointer"
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
                                    <button className="bg-red px-2 py-1 text-xs text-white-300 rounded-sm cursor-pointer"
                                    onClick={() => onCopyClick(flash.adminPass)}
                                    >
                                        Copy
                                    </button>
                                </p>
                        }

                    
                    </div>

                }
                
                <div className="border-t-[1px] border-t-gray-400 my-4 py-4">
                    <Link as="button"
                    className="block w-full bg-red py-1 rounded-sm text-white-300"
                    href={route("admin.destroy")}
                    method="delete"
                    >
                        Log out
                    </Link>

                </div>
                
                
            </section>
            

                
        </CenteredCardLayout>
    )
}