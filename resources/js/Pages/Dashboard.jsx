import SortableFileProvider from "@/ContextsProviders/FileContextProvider"
import { Head } from "@inertiajs/react"
import Nav from "@/Components/Nav"
import DashboardChild from "@/Pages/DashboardChild"


export default function Dashboard()
{
    return(
        <SortableFileProvider>
          <Head title="Dashboard"/>
          <Nav/>
          <DashboardChild/>
        </SortableFileProvider>
      )
}