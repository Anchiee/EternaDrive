import SortableFileProvider from "@/ContextsProviders/FileContextProvider"
import { Head } from "@inertiajs/react"
import Nav from "@/Components/Nav"
import DashboardChild from "@/Pages/DashboardChild"


export default function Dashboard()
{
    return(
        <SortableFileProvider>
          <Head>
            <title>Dashboard</title>
            <meta name="description" content="EternaDrive's dashboard. Upload, share and download your files here! However remember of the 100MB file limit"/>
          </Head>
          <Nav/>
          <DashboardChild/>
        </SortableFileProvider>
      )
}