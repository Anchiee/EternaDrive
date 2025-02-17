import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function CenteredCardLayout({title, children})
{
  return(
    <>
      <Head title={title}/>
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
  title: PropTypes.string.isRequired,
}

