import CenteredCardLayout from "@/Layouts/CenteredCardLayout"
import { usePage, Link } from "@inertiajs/react"


export default function Dashboard() {

    const {databaseInfo} = usePage().props


    return (
        <CenteredCardLayout title="Dashboard" description="Admin's dash panel">

            <h2 className="flex gap-2 items-center font-semibold mb-3 mt-5">
                Database status 
                <span className={`${databaseInfo.status ? "bg-green-800" : "bg-red"} px-2 py-2 rounded-3xl text-white-300`}>
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
                
                <h2 className="mb-2 mt-2">Generate admin account</h2>
                <Link  
                    as="button" 
                    href={route("admin.create")} 
                    className="cursor-pointer text-white-300 px-2 py-1 rounded-md bg-red" 
                    method="post">

                    Generate
                </Link>
            </section>
            

                
        </CenteredCardLayout>
    )
}