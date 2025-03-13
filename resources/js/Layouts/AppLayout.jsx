import Nav from "@/Components/Nav"
import { Head } from "@inertiajs/react"
import PropTypes from "prop-types"

export default function AppLayout({children, title})
{
  
  return(
    <>
      <Head title={title}/>
      <Nav/>
      <main className="grow-1 flex flex-col">
          {children}
      </main> 
    </>
  )
}


AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}