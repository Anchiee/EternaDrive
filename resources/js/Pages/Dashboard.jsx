import DashboardChild from "./DashboardChild";
import FileContextProvider from "@/ContextsProviders/FileContextProvider";

export default function Dashboard()
{
    return(
        <FileContextProvider>
            <DashboardChild/>
        </FileContextProvider>
    )
}