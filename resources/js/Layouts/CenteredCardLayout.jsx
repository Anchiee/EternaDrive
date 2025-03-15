import PropTypes from "prop-types";
import MetaData from "@/Components/MetaData";


export default function CenteredCardLayout({title, children, description})
{
  return(
    <>
      <MetaData title={title} description={description}/>
      <section className="min-h-screen flex justify-center items-center">
        <div className="bg-white-300 py-6 px-8 rounded-md">
          <img src="/assets/logo.png" alt="logo" width="100" className="mx-auto"/>

          {children}
        </div>
      </section>
    </>
  )
}

CenteredCardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

