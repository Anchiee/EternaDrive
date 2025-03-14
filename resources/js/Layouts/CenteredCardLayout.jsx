import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function CenteredCardLayout({title, children, description})
{
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

