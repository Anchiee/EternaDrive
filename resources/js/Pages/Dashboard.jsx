import SortableFileProvider from "@/ContextsProviders/FileContextProvider"
import { Head } from "@inertiajs/react"
import Nav from "@/Components/Nav"
import DashboardChild from "@/Pages/DashboardChild"
import MetaData from "@/Components/MetaData"

export default function Dashboard()
{
    return(
        <SortableFileProvider>
          <MetaData 
          title="Dashboard"
          description="EternaDrive's dashboard. Upload, share and download your files here! However remember of the 100MB file limit and to not post any illegal content"/>
          <Nav/>
          <DashboardChild/>
        </SortableFileProvider>
      )
}